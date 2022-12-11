import { Chart } from "chart.js/auto";

const createChart = function (hydration, sleepQuality, sleepHours) {
  let chart = Chart.getChart("weeklyChart");
  if (chart) {
    chart.destroy();
  }
  console.log("detroyed?");
  new Chart(document.getElementById("weeklyChart"), {
    type: "bar",
    data: {
      labels: hydration.dates,
      datasets: [
        {
          label: hydration.label,
          yAxisID: "hydration",
          data: hydration.count,
          backgroundColor: "rgba(54, 162, 235, .7)",
          borderColor: "white",
          borderWidth: 1,
        },
        {
          label: sleepQuality.label,
          yAxisID: "sleep",
          data: sleepQuality.count,
          backgroundColor: "#7C77B9",
          borderColor: "white",
          borderWidth: 1,
        },
        {
          label: sleepHours.label,
          yAxisID: "sleep",
          data: sleepHours.count,
          backgroundColor: "#FC9F5B",
          borderColor: "white",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        hydration: {
          type: "linear",
          title: {
            display: true,
            text: "Water Intake",
          },
          position: "left",
        },
        sleep: {
          type: "linear",
          title: {
            display: true,
            text: "Sleep Info",
          },
          position: "right",
          ticks: {
            max: 15,
            min: 0,
          },
          grid: {
            drawOnChartArea: false,
          },
        },
      },
    },
  });
};


const createSmallBarChart = function (id, labels, label, data, colors, axis = 'x') {
  new Chart(document.getElementById(id), {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: label,
          data: data,
          backgroundColor: colors,
          borderColor: "white",
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        }
      },
      indexAxis: axis,
    }
  });
};

Chart.defaults.color = "#fff";

export { createChart, createSmallBarChart };
