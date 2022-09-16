// Import third party libraries:
import Chart from "chart.js/auto";

// Chart styling
const fontProperties = (context) => {
  const width = context.chart.width;
  const size = Math.round(width / 28);

  return {
    family: "Alegreya",
    size: size,
  };
};

const chartPlugins = {
  legend: {
    labels: {
      font: fontProperties,
    },
  },
};

const chartOptions = {
  scales: {
    x: {
      ticks: {
        font: fontProperties,
      },
    },
    y: {
      ticks: {
        font: fontProperties,
      },
    },
  },
  plugins: {
    ...chartPlugins,
  },
};

const barStyle1 = {
  backgroundColor: "#0077BB",
  hoverBackgroundColor: "#00DDDD",
};

const barStyle2 = {
  backgroundColor: "#9000EE",
  hoverBackgroundColor: "#CC77FF",
};

const charts = {
  // add and remove chart data functions
  // addData(chart, data) {
  //   chart.data.datasets.data = data;
  //   chart.update();
  // },

  // removeData(chart) {
  //   chart.data.datasets.forEach((dataset) => {
  //     dataset.data.pop();
  //   });
  //   chart.update();
  // },

  // Chart render functions
  renderSleepChartByWeek(sleep, date) {
    const weeklyHS = sleep.getDailySleepByWeek("hoursSlept", date);
    const weeklySQ = sleep.getDailySleepByWeek("sleepQuality", date);

    const weeklyHoursSlept = new Chart("weeklyHoursSlept", {
      type: "bar",
      data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        datasets: [
          {
            label: "Hours of Sleep Per Week",
            data: weeklyHS,
            ...barStyle1,
          },
          {
            label: "Sleep Quality Per Week",
            data: weeklySQ,
            ...barStyle2,
          },
        ],
      },
      options: {
        ...chartOptions,
      },
    });

    return weeklyHoursSlept;
  },

  renderSleepChartByDay(sleep, date) {
    const hours = sleep.getSleepDataByGivenDay(date, "hoursSlept");
    const quality = sleep.getSleepDataByGivenDay(date, "sleepQuality");

    const sleepDayCanvas = new Chart("dailyHoursSlept", {
      type: "bar",
      data: {
        labels: [""],
        datasets: [
          {
            label: `Hours Slept on ${date}`,
            data: [hours],
            barPercentage: 0.5,
            ...barStyle1,
            borderRadius: 4,
          },
          {
            label: `Sleep Quality on ${date}`,
            data: [quality],
            barPercentage: 0.5,
            ...barStyle2,
            borderRadius: 4,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        ...chartOptions,
      },
    });

    return sleepDayCanvas;
  },

  renderOuncesByWeek(hydration, date, input) {
    let weeklyData = hydration.getDailyOuncesByWeek(date);
    const hydrationChart = document
      .querySelector("#weeklyOunces")
      .getContext("2d");
    const setConfig = {
      type: "bar",
      data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        datasets: [
          {
            label: "Water Intake for the week",
            data: weeklyData,
            ...barStyle1,
          },
        ],
      },
      options: {
        ...chartOptions,
      },
    };
    const weeklyWaterChart = new Chart(hydrationChart, setConfig);
    console.log(input, weeklyWaterChart.removeData(hydrationChart));
    // if (input) {
    //   weeklyWaterChart.removeData(hydrationChart);
    //   weeklyWaterChart.addData(hydrationChart, weeklyData);
    // } else {
    //   return weeklyWaterChart;
    // }
  },

  renderOuncesPerDay(hydration, date) {
    const day = hydration.ouncesPerDay(date);

    const dailyOunces = new Chart("dailyOunces", {
      type: "bar",
      data: {
        labels: [""],
        datasets: [
          {
            label: `Daily Water Intake on ${date}`,
            data: [day],
            ...barStyle2,
            barPercentage: 0.25,
            borderRadius: 4,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        ...chartOptions,
      },
    });

    return dailyOunces;
  },
};

export default charts;
