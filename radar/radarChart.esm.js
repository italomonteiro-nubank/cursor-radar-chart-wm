/**
 * Radar Chart (ESM) — pensado pra bundlers (Vite/Webpack/etc).
 *
 * Uso:
 *   import { Chart } from "chart.js/auto";
 *   import { renderRadarChart } from "./radarChart.esm.js";
 *   const chart = renderRadarChart({ Chart, canvas, scores, tokens });
 */

/**
 * @param {{
 *  Chart: any,
 *  canvas: HTMLCanvasElement,
 *  scores: {diversificacao:number, liquidez:number, retorno:number, eficiencia:number, protecao:number},
 *  tokens?: any,
 *  existingChart?: any
 * }} params
 * @returns {any}
 */
export function renderRadarChart({ Chart, canvas, scores, tokens, existingChart } = {}) {
  if (!canvas) throw new Error("canvas é obrigatório");
  if (!Chart) throw new Error("Passe { Chart } (ex.: import { Chart } from 'chart.js/auto').");

  const t = tokens ?? getDefaultTokens();
  const labels = ["Diversificação", "Liquidez", "Retorno", "Eficiência", "Proteção"];
  const raw = [
    scores?.diversificacao,
    scores?.liquidez,
    scores?.retorno,
    scores?.eficiencia,
    scores?.protecao,
  ];

  const data = raw.map((v, idx) => normalizeScore(v, labels[idx]));

  if (existingChart && typeof existingChart.destroy === "function") existingChart.destroy();

  const plugin = createFigmaBasePlugin(t);

  return new Chart(canvas, {
    type: "radar",
    data: {
      labels,
      datasets: [
        {
          data,
          borderColor: t.radar.seriesBorderColor,
          backgroundColor: t.radar.seriesFillColor,
          borderWidth: 0,
          fill: true,
          pointRadius: 0,
          pointHoverRadius: 0,
        },
      ],
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      animation: false,
      normalized: true,
      layout: {
        padding: 0,
      },
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
      },
      elements: {
        line: {
          borderJoinStyle: t.radar.seriesBorderJoin,
        },
      },
      scales: {
        r: {
          min: 0,
          max: 100,
          afterFit(scale) {
            scale.paddingLeft = 0;
            scale.paddingRight = 0;
            scale.paddingTop = 0;
            scale.paddingBottom = 0;
          },
          ticks: { display: false },
          grid: { display: false },
          angleLines: { display: false },
          pointLabels: { display: false },
        },
      },
    },
    plugins: [plugin],
  });
}

function normalizeScore(v, label) {
  const n = Number(v);
  if (!Number.isFinite(n)) throw new Error(`Score inválido em "${label}": ${v}`);
  if (n < 1 || n > 100) throw new Error(`Score fora do range (1–100) em "${label}": ${n}`);
  return ((n - 1) * 100) / 99;
}

function createFigmaBasePlugin(tokens) {
  return {
    id: "figmaRadarBase",
    beforeDatasetsDraw(chart) {
      const r = chart.scales?.r;
      if (!r) return;
      const { ctx } = chart;
      const n = chart.data.labels?.length ?? 0;
      if (!n) return;

      const outer = [];
      for (let i = 0; i < n; i++) outer.push(r.getPointPositionForValue(i, 100));

      ctx.save();

      ctx.beginPath();
      ctx.moveTo(outer[0].x, outer[0].y);
      for (let i = 1; i < outer.length; i++) ctx.lineTo(outer[i].x, outer[i].y);
      ctx.closePath();
      ctx.fillStyle = tokens.radar.baseFill;
      ctx.fill();

      ctx.strokeStyle = tokens.radar.baseStrokeColor;
      ctx.lineWidth = 1;
      ctx.lineJoin = "miter";
      ctx.stroke();

      ctx.strokeStyle = tokens.radar.angleLineColor;
      ctx.lineWidth = 1;
      for (let i = 0; i < outer.length; i++) {
        ctx.beginPath();
        ctx.moveTo(r.xCenter, r.yCenter);
        ctx.lineTo(outer[i].x, outer[i].y);
        ctx.stroke();
      }

      ctx.restore();
    },
    afterDatasetsDraw(chart) {
      const meta = chart.getDatasetMeta?.(0);
      const points = meta?.data;
      if (!points?.length) return;

      const { ctx } = chart;
      const desired = tokens.radar.seriesBorderWidthPx ?? 0;
      if (!desired) return;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) ctx.lineTo(points[i].x, points[i].y);
      ctx.closePath();
      ctx.clip();

      ctx.lineJoin = tokens.radar.seriesBorderJoin ?? "round";
      ctx.lineWidth = desired * 2;
      ctx.strokeStyle = tokens.radar.seriesBorderColor;

      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) ctx.lineTo(points[i].x, points[i].y);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    },
  };
}

function getDefaultTokens() {
  return {
    radar: {
      baseFill: "#efefef",
      baseStrokeColor: "#e1e1e1",
      angleLineColor: "#1f023014",
      seriesBorderColor: "#820ad1",
      seriesFillColor: "rgba(130,10,209,0.4)",
      seriesBorderWidthPx: 3.77356,
      seriesBorderJoin: "round",
    },
  };
}

