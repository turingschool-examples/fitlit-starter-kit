import { Chart } from "chart.js/auto";

const createChart = function (hydration, sleepQuality, sleepHours) {
  let chart = Chart.getChart("weeklyChart");
  if (chart) {
    chart.destroy();
  }
  new Chart(document.getElementById("weeklyChart"), {
    type: "bar",
    data: {
      labels: hydration.dates,
      datasets: [
        {
          label: hydration.label,
          yAxisID: "hydration",
          data: hydration.count,
          backgroundColor: "rgba(187, 231, 255, .2)",
          borderColor: "#BBE7FF",
          borderWidth: 3,
        },
        {
          label: sleepQuality.label,
          yAxisID: "sleep",
          data: sleepQuality.count,
          backgroundColor: "rgba(255, 243, 199, .2)",
          borderColor: "#FFF3C7",
          borderWidth: 3,
        },
        {
          label: sleepHours.label,
          yAxisID: "sleep",
          data: sleepHours.count,
          backgroundColor: "rgba(186, 239, 195, .2)",
          borderColor: "#BAEFC3",
          borderWidth: 3,
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

const createSmallBarChart = function (
  id,
  labels,
  label,
  data,
  colors,
  borderColors,
  axis = "x"
) {
  new Chart(document.getElementById(id), {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: label,
          data: data,
          backgroundColor: colors,
          borderColor: borderColors,
          borderWidth: 3,
        },
      ],
    },
    options: {
      responsive: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      indexAxis: axis,
    },
  });
};

Chart.defaults.color = "#fff";
Chart.defaults.font.family = "'Open Sans'";

export { createChart, createSmallBarChart };
