(ns now-playing-api.handler-test
  (:require [clojure.test :refer :all]
            [ring.mock.request :as mock]
            [now-playing-api.handler :refer :all]))

(deftest test-app
  (testing "not-found route"
    (let [response (app (mock/request :get "/invalid"))]
      (is (= (:status response) 404))))
  (testing "/api/q2"
    (let [response (app (mock/request :get "/api/q2"))]
      (is (= (:status response) 200)))))
