(ns wm.server
  (:require
    [reitit.ring :as ring]
    [ring.adapter.jetty :refer [run-jetty]]
    [ring.middleware.content-type :refer [wrap-content-type]]
    [ring.middleware.not-modified :refer [wrap-not-modified]]
    [ring.util.response :as resp]))

(defn- env-port []
  (when-let [p (System/getenv "PORT")]
    (try
      (Long/parseLong p)
      (catch Exception _ nil))))

(def app
  (-> (ring/ring-handler
        (ring/router
          [["/" {:get {:handler (fn [_]
                                  (-> (resp/resource-response "index.html" {:root "public"})
                                      (resp/content-type "text/html; charset=utf-8")))}}]])
        (ring/create-resource-handler {:path "/" :root "public"})
        (ring/create-default-handler))
      wrap-content-type
      wrap-not-modified))

(defn -main [& _args]
  (run-jetty app {:port (or (env-port) 3000)
                  :join? true}))

