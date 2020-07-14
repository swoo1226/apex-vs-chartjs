import React from "react";
import ReactDOM from "react-dom";
import Chart from "chart.js";

class Chartjs extends React.Component {
  chart = null;
  constructor(props) {
    super(props);

    this.state = {
      x: props.labels,
      y: props.counts,
    };
    // var renderStart = new Date().getTime();
    // window.onload = function () {
    //   var elapsed = new Date().getTime() - renderStart;
    //   console.log("Redered in " + elapsed + "ms");
    // };
  }
  componentDidMount() {
    this.configureChart();
  }

  configureChart = (props) => {
    const chartCanvas = ReactDOM.findDOMNode(this.chart);
    // console.log('props를 언제 확인하나', props)
    const mixedChart = new Chart(chartCanvas, {
      type: "line",
      data: {
        labels: this.state.x,
        datasets: [
          {
            label: "채널 친구수",
            barPercentage: 0.3,
            fill: true,
            fillStyle: "rgba(250, 199, 16, 0)",
            data: this.state.y,
            borderColor: "#FAC609", //라인 색깔
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            lineTension: 0.3,
            pointBackgroundColor: "#fff",
            pointBorderColor: "#FAC609", //포인트 점 테두리 색깔
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#FAC609",
            pointHoverBorderColor: "#FAC609",
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 10,
            backgroundColor: "rgba(250,199,16,0.3)",
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: { autoSkip: false, fontSize: 15, fontColor: "black" },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
              },
              ticks: { autoSkip: false, fontSize: 15, fontColor: "black" },
            },
          ],
        },
        animation: {
          onComplete: function () {
            var ctx = this.chart.ctx;
            ctx.font = Chart.helpers.fontString(
              Chart.defaults.global.defaultFontFamily,
              "normal",
              Chart.defaults.global.defaultFontFamily
            );
            //데이터 글자 색
            ctx.fillStyle = "grey";
            ctx.textAlign = "center";
            ctx.textBaseline = "center";

            this.data.datasets.forEach(function (dataset) {
              for (var i = 0; i < dataset.data.length; i++) {
                for (var key in dataset._meta) {
                  var model = dataset._meta[key].data[i]._model;
                  ctx.fillText(dataset.data[i], model.x, model.y - 5);
                }
              }
            });
          },
        },
      },
    });
  };

  render() {
    return (
      <canvas
        style={{
          //   height: "100%",
          width: "100%",
          maxHeight: "30rem",
          //   maxWidth: "50rem",
        }}
        ref={(chart) => {
          this.chart = chart;
        }}
      />
    );
  }
}

export default Chartjs;
