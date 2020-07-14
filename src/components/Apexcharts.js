import React, { useEffect } from "react";
import Chart from "react-apexcharts";
export const Apexcharts = (props) => {
  //   var renderStart = new Date().getTime();
  //   window.onload = function () {
  //     var elapsed = new Date().getTime() - renderStart;
  //     console.log("Redered in " + elapsed + "ms");
  //   };
  return (
    <Chart
      className="chart"
      options={{
        chart: {
          id: "channel",
          toolbar: {
            show: false,
          },
          animations: {
            easing: "easeinout",
            speed: 900,
            dynamicAnimation: {
              enabled: true,
              speed: 350,
            },
          },
        },
        xaxis: {
          labels: { rotate: -45, hideOverlappingLabels: false, offsetX: 0 },
          categories: props.labels,
          style: {
            fontSize: "2rem",
          },
        },
        colors: ["#FAC609"],
      }}
      series={[
        {
          name: "채널 친구수",
          data: props.counts,
          style: {
            fontSize: "1rem",
          },
        },
      ]}
      type="area"
      width={"100%"}
      //   height={"100%"}
    />
  );
};
