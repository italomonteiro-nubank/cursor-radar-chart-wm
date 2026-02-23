/* global Chart */

/**
 * Renderiza o Radar Chart no canvas (Chart.js UMD via CDN).
 *
 * @param {HTMLCanvasElement} canvas
 * @param {{diversificacao:number, liquidez:number, retorno:number, eficiencia:number, protecao:number}} scores
 * @param {{tokens?: any, existingChart?: any}} [opts]
 * @returns {any} instância do Chart.js
 */
export function renderRadarChart(canvas, scores, opts = {}) {
  if (!canvas) throw new Error("canvas é obrigatório");
  if (typeof Chart === "undefined") {
    throw new Error("Chart.js não encontrado. Inclua o script UMD do Chart.js antes.");
  }

  const tokens = opts.tokens ?? getDefaultTokens();
  const labels = ["Diversificação", "Liquidez", "Retorno", "Eficiência", "Proteção"];
  const raw = [
    scores?.diversificacao,
    scores?.liquidez,
    scores?.retorno,
    scores?.eficiencia,
    scores?.protecao,
  ];

  const data = raw.map((v, idx) => normalizeScore(v, labels[idx]));

  if (opts.existingChart && typeof opts.existingChart.destroy === "function") {
    opts.existingChart.destroy();
  }

  const plugin = createFigmaBasePlugin(tokens);

  return new Chart(canvas, {
    type: "radar",
    data: {
      labels,
      datasets: [
        {
          data,
          borderColor: tokens.radar.seriesBorderColor,
          backgroundColor: tokens.radar.seriesFillColor,
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
          borderJoinStyle: tokens.radar.seriesBorderJoin,
        },
      },
      scales: {
        r: {
          min: 0,
          max: 100,
          afterFit(scale) {
            // remove padding interno do scale para maximizar a área desenhada
            scale.paddingLeft = 0;
            scale.paddingRight = 0;
            scale.paddingTop = 0;
            scale.paddingBottom = 0;
          },
          ticks: {
            display: false,
            padding: 0,
          },
          grid: {
            display: false,
          },
          angleLines: {
            display: false,
          },
          pointLabels: {
            display: false,
          },
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
  // 1 -> centro (0), 100 -> vértice (100)
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

      // Base fill
      ctx.beginPath();
      ctx.moveTo(outer[0].x, outer[0].y);
      for (let i = 1; i < outer.length; i++) ctx.lineTo(outer[i].x, outer[i].y);
      ctx.closePath();
      ctx.fillStyle = tokens.radar.baseFill;
      ctx.fill();

      // Base stroke
      ctx.strokeStyle = tokens.radar.baseStrokeColor;
      ctx.lineWidth = 1;
      ctx.lineJoin = "miter";
      ctx.stroke();

      // Angle/radial lines
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
      // clip no polígono garante que o stroke fique 100% INSIDE
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) ctx.lineTo(points[i].x, points[i].y);
      ctx.closePath();
      ctx.clip();

      // Como o stroke no canvas é centralizado, dobramos a largura pra
      // a metade "de fora" ser cortada pelo clip e a parte interna ficar
      // com a espessura desejada.
      ctx.lineJoin = tokens.radar.seriesBorderJoin ?? "round";
      ctx.lineWidth = desired * 2;
      ctx.strokeStyle = tokens.radar.seriesBorderColor;

      // garantir que não exista sombra
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      // Refaz o path após o clip para garantir stroke consistente
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

