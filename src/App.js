import React, { useState } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Apexcharts } from "./components/Apexcharts";
import Chartjs from "./components/Chartjs";
function App() {
  const labels = [];
  const counts = [];
  for (let i = 0; i < 31; i++) {
    labels.push(`${i}일`);
    counts.push(Math.floor(Math.random() * 100));
  }
  const [apexchartsTime, setApexchartsTime] = useState(0);
  const [chartjsTime, setChartjsTime] = useState(0);
  const timer = () => {
    let renderStart = new Date().getTime();
    window.onload = function () {
      let elapsed = new Date().getTime() - renderStart;
      console.log("Redered in " + elapsed + "ms");
    };
  };
  return (
    <Router>
      <Route
        path="/apex"
        render={() => {
          timer();
          return (
            <div>
              <Apexcharts
                labels={labels}
                counts={counts}
                setApexchartsTime={setApexchartsTime}
              />
              <Apexcharts
                labels={labels}
                counts={counts}
                setApexchartsTime={setApexchartsTime}
              />
              <Apexcharts
                labels={labels}
                counts={counts}
                setApexchartsTime={setApexchartsTime}
              />
              <Apexcharts
                labels={labels}
                counts={counts}
                setApexchartsTime={setApexchartsTime}
              />
              <Apexcharts
                labels={labels}
                counts={counts}
                setApexchartsTime={setApexchartsTime}
              />
            </div>
          );
        }}
      ></Route>
      <Route
        path="/chartjs"
        render={() => {
          timer();
          return (
            <div>
              <Chartjs
                labels={labels}
                counts={counts}
                setChartjsTime={setChartjsTime}
              />
              <Chartjs
                labels={labels}
                counts={counts}
                setChartjsTime={setChartjsTime}
              />
              <Chartjs
                labels={labels}
                counts={counts}
                setChartjsTime={setChartjsTime}
              />
              <Chartjs
                labels={labels}
                counts={counts}
                setChartjsTime={setChartjsTime}
              />
              <Chartjs
                labels={labels}
                counts={counts}
                setChartjsTime={setChartjsTime}
              />
            </div>
          );
        }}
      ></Route>
    </Router>
  );
}

export default App;
