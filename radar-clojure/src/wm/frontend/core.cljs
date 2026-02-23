(ns wm.frontend.core)

(def labels ["Diversificação" "Liquidez" "Retorno" "Eficiência" "Proteção"])

(def default-tokens
  {:radar {:baseFill "#efefef"
           :baseStrokeColor "#e1e1e1"
           :angleLineColor "#1f023014"
           :seriesBorderColor "#820ad1"
           :seriesFillColor "rgba(130,10,209,0.4)"
           :seriesBorderWidthPx 3.77356
           :seriesBorderJoin "round"}})

(defonce state*
  (atom {:scores {:diversificacao 50
                  :liquidez 50
                  :retorno 50
                  :eficiencia 50
                  :protecao 50}
         :chart nil}))

(def chartjs-urls
  ["https://cdn.jsdelivr.net/npm/chart.js@4.5.1/dist/chart.umd.min.js"
   "https://unpkg.com/chart.js@4.5.1/dist/chart.umd.min.js"
   "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.5.1/chart.umd.min.js"])

(defn normalize-score [v]
  (let [n (js/Number v)]
    (/ (* (- n 1) 100) 99)))

(defn ordered-scores [{:keys [diversificacao liquidez retorno eficiencia protecao]}]
  [diversificacao liquidez retorno eficiencia protecao])

(defn clear-el! [el]
  (set! (.-textContent el) ""))

(defn el
  ([tag] (.createElement js/document tag))
  ([tag className]
   (doto (.createElement js/document tag)
     (aset "className" className))))

(defn set-styles! [el styles]
  (doseq [[k v] styles]
    (aset (.-style el) (name k) v))
  el)

(defn chart-ctor []
  (let [g js/globalThis
        c (.-Chart g)]
    (cond
      (fn? c) c
      (and c (fn? (.-Chart c))) (.-Chart c)
      :else nil)))

(defn load-script! [src onload onerror]
  (let [s (.createElement js/document "script")]
    (set! (.-src s) src)
    (set! (.-async s) true)
    (.addEventListener s "load" onload)
    (.addEventListener s "error" onerror)
    (.appendChild (.-head js/document) s)))

(defn ensure-chartjs! [done]
  (if (chart-ctor)
    (done true)
    (let [urls (atom chartjs-urls)]
      (letfn [(try-next! []
                (if-let [u (first @urls)]
                  (do
                    (swap! urls subvec 1)
                    (load-script!
                      u
                      (fn [_]
                        (if (chart-ctor)
                          (done true)
                          (try-next!)))
                      (fn [_] (try-next!))))
                  (done false)))]
        (try-next!)))))

(defn create-figma-base-plugin [tokens]
  (let [radar (:radar tokens)]
    (let [plugin (js-obj)]
      (aset plugin "id" "figmaRadarBase")

      (aset plugin "beforeDatasetsDraw"
            (fn [chart]
              (let [r (.. chart -scales -r)]
                (when r
                  (let [ctx (.-ctx chart)
                        n (.. chart -data -labels -length)]
                    (when (pos? n)
                      (let [outer (array)]
                        (dotimes [i n]
                          (.push outer (.getPointPositionForValue r i 100)))

                        (.save ctx)

                        (.beginPath ctx)
                        (let [p0 (aget outer 0)]
                          (.moveTo ctx (.-x p0) (.-y p0)))
                        (dotimes [i (dec n)]
                          (let [p (aget outer (inc i))]
                            (.lineTo ctx (.-x p) (.-y p))))
                        (.closePath ctx)
                        (set! (.-fillStyle ctx) (:baseFill radar))
                        (.fill ctx)

                        (set! (.-strokeStyle ctx) (:baseStrokeColor radar))
                        (set! (.-lineWidth ctx) 1)
                        (set! (.-lineJoin ctx) "miter")
                        (.stroke ctx)

                        (set! (.-strokeStyle ctx) (:angleLineColor radar))
                        (set! (.-lineWidth ctx) 1)
                        (dotimes [i n]
                          (let [p (aget outer i)]
                            (.beginPath ctx)
                            (.moveTo ctx (.-xCenter r) (.-yCenter r))
                            (.lineTo ctx (.-x p) (.-y p))
                            (.stroke ctx)))

                        (.restore ctx))))))))

      (aset plugin "afterDatasetsDraw"
            (fn [chart]
              (let [meta (.getDatasetMeta chart 0)
                    points (.-data meta)]
                (when (and points (pos? (.-length points)))
                  (let [ctx (.-ctx chart)
                        desired (:seriesBorderWidthPx radar)]
                    (when (and desired (pos? desired))
                      (.save ctx)

                      (.beginPath ctx)
                      (let [p0 (aget points 0)]
                        (.moveTo ctx (.-x p0) (.-y p0)))
                      (dotimes [i (dec (.-length points))]
                        (let [p (aget points (inc i))]
                          (.lineTo ctx (.-x p) (.-y p))))
                      (.closePath ctx)
                      (.clip ctx)

                      (set! (.-lineJoin ctx) (or (:seriesBorderJoin radar) "round"))
                      (set! (.-lineWidth ctx) (* desired 2))
                      (set! (.-strokeStyle ctx) (:seriesBorderColor radar))
                      (set! (.-shadowColor ctx) "transparent")
                      (set! (.-shadowBlur ctx) 0)
                      (set! (.-shadowOffsetX ctx) 0)
                      (set! (.-shadowOffsetY ctx) 0)

                      (.beginPath ctx)
                      (let [p0 (aget points 0)]
                        (.moveTo ctx (.-x p0) (.-y p0)))
                      (dotimes [i (dec (.-length points))]
                        (let [p (aget points (inc i))]
                          (.lineTo ctx (.-x p) (.-y p))))
                      (.closePath ctx)
                      (.stroke ctx)
                      (.restore ctx)))))))

      plugin)))

(defn make-chart! [canvas scores tokens]
  (let [plugin (create-figma-base-plugin tokens)
        ordered (ordered-scores scores)
        data #js {:labels (clj->js labels)
                  :datasets #js [#js {:data (clj->js (mapv normalize-score ordered))
                                     :borderColor (get-in tokens [:radar :seriesBorderColor])
                                     :backgroundColor (get-in tokens [:radar :seriesFillColor])
                                     :borderWidth 0
                                     :fill true
                                     :pointRadius 0
                                     :pointHoverRadius 0}]}
        opts #js {:responsive false
                  :maintainAspectRatio false
                  :animation false
                  :normalized true
                  :layout #js {:padding 0}
                  :plugins #js {:legend #js {:display false}
                                :tooltip #js {:enabled false}}
                  :elements #js {:line #js {:borderJoinStyle (get-in tokens [:radar :seriesBorderJoin])}}
                  :scales #js {:r #js {:min 0
                                      :max 100
                                      :afterFit (fn [scale]
                                                  (set! (.-paddingLeft scale) 0)
                                                  (set! (.-paddingRight scale) 0)
                                                  (set! (.-paddingTop scale) 0)
                                                  (set! (.-paddingBottom scale) 0))
                                      :ticks #js {:display false :padding 0}
                                      :grid #js {:display false}
                                      :angleLines #js {:display false}
                                      :pointLabels #js {:display false}}}}
        ChartCtor (chart-ctor)]
    (when-not (fn? ChartCtor)
      (throw (js/TypeError. "Chart.js não carregou (window.Chart indisponível).")))
    (new ChartCtor canvas #js {:type "radar"
                               :data data
                               :options opts
                               :plugins #js [plugin]})))

(defn sync-chart! [chart scores]
  (let [ordered (ordered-scores scores)
        ds (aget (.. chart -data -datasets) 0)]
    (set! (.-data ds) (clj->js (mapv normalize-score ordered)))
    (.update chart "none")))

(defn slider-row! [key label]
  (let [row (el "div" "controlRow")
        lbl (el "div" "controlLabel")
        val (el "div" "controlValue")
        input (el "input" "controlRange")]
    (set! (.-textContent lbl) label)
    (let [initial (get-in @state* [:scores key])]
      (set! (.-textContent val) (str initial))
      (set! (.-value input) (str initial)))

    (set! (.-type input) "range")
    (set! (.-min input) "1")
    (set! (.-max input) "100")
    (set! (.-step input) "1")
    (when (empty? (.-value input))
      (set! (.-value input) "50"))

    (.addEventListener
      input
      "input"
      (fn [_]
        (let [nv (js/Number (.-value input))]
          (swap! state* assoc-in [:scores key] nv)
          (set! (.-textContent val) (str nv))
          (when-let [c (:chart @state*)]
            (sync-chart! c (:scores @state*))))))

    (.appendChild row lbl)
    (.appendChild row val)
    (.appendChild row input)
    row))

(defn render-ui! []
  (let [root (.getElementById js/document "app")]
    (clear-el! root)

    (let [frame (el "div" "frame")]
      (.setAttribute frame "data-node-id" "1324:17002")

      (let [label-liq (el "div" "label")
            label-pro (el "div" "label")
            label-div (el "div" "label")
            label-efi (el "div" "label")
            label-ret (el "div" "label")]
        (set-styles! label-liq {:right "62px" :top "111.5px" :transform "translate(100%, -50%)"})
        (set-styles! label-pro {:left "16px" :top "111.5px" :transform "translate(0, -50%)"})
        (set-styles! label-div {:left "calc(50% - 36.5px)" :top "10.5px" :transform "translate(0, -50%)"})
        (set-styles! label-efi {:left "82px" :top "266.5px" :transform "translate(0, -50%)"})
        (set-styles! label-ret {:left "236px" :top "266.5px" :transform "translate(0, -50%)"})

        (set! (.-textContent label-liq) "Liquidez")
        (set! (.-textContent label-pro) "Proteção")
        (set! (.-textContent label-div) "Diversificação")
        (set! (.-textContent label-efi) "Eficiência")
        (set! (.-textContent label-ret) "Retorno")

        (.appendChild frame label-liq)
        (.appendChild frame label-pro)
        (.appendChild frame label-div)
        (.appendChild frame label-efi)
        (.appendChild frame label-ret))

      (let [canvas (el "canvas" "chartCanvas")]
        (set! (.-id canvas) "radar")
        (.setAttribute canvas "width" "240")
        (.setAttribute canvas "height" "240")
        (.appendChild frame canvas))

      (.appendChild root frame))

    (let [controls (el "div" "controls")]
      (.setAttribute controls "aria-label" "Controladores do gráfico de radar")
      (.appendChild controls (slider-row! :diversificacao "Diversificação"))
      (.appendChild controls (slider-row! :liquidez "Liquidez"))
      (.appendChild controls (slider-row! :retorno "Retorno"))
      (.appendChild controls (slider-row! :eficiencia "Eficiência"))
      (.appendChild controls (slider-row! :protecao "Proteção"))
      (.appendChild root controls))))

(defn show-error! [e]
  (let [pre (.createElement js/document "pre")]
    (set! (.-textContent pre)
          (str "Erro no frontend (ClojureScript)\n\n"
               (or (.-message e) e) "\n\n"
               (or (.-stack e) "")))
    (set! (.. pre -style -whiteSpace) "pre-wrap")
    (set! (.. pre -style -padding) "12px")
    (set! (.. pre -style -marginTop) "12px")
    (set! (.. pre -style -borderRadius) "8px")
    (set! (.. pre -style -background) "rgba(255,59,48,0.08)")
    (set! (.. pre -style -border) "1px solid rgba(255,59,48,0.35)")
    (set! (.. pre -style -color) "rgba(0,0,0,0.88)")
    (.appendChild (.-body js/document) pre)))

(defn init []
  (try
    (render-ui!)
    (let [canvas (.getElementById js/document "radar")]
      (when canvas
        (ensure-chartjs!
          (fn [ok?]
            (try
              (when-not ok?
                (throw (js/TypeError.
                        "Não foi possível carregar Chart.js. Verifique bloqueio de rede/CDN.")))
              (when-let [c (:chart @state*)]
                (.destroy c))
              (let [chart (make-chart! canvas (:scores @state*) default-tokens)]
                (swap! state* assoc :chart chart))
              (catch :default e
                (show-error! e)))))))
    (catch :default e
      (show-error! e))))

(init)

