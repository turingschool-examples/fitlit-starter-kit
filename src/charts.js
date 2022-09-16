// Import third party libraries:
import Chart from 'chart.js/auto';

// Global charts
let weeklySleepChart;
let dailySleepChart;
let weeklyHydrationChart;
let dailyOunces;

// Chart styling
const fontProperties = (context) => {
  const width = context.chart.width;
  const size = Math.round(width / 28);

  return {
    family: 'Alegreya',
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
  backgroundColor: '#0077BB',
  hoverBackgroundColor: '#00DDDD',
};

const barStyle2 = {
  backgroundColor: '#9000EE',
  hoverBackgroundColor: '#CC77FF',
};

const charts = {
  renderSleepChartByWeek(sleep, date) {
    const weeklyHS = sleep.getDailySleepByWeek('hoursSlept', date);
    const weeklySQ = sleep.getDailySleepByWeek('sleepQuality', date);
    const sleepChart = document.querySelector('#weeklyHoursSlept');
    // setup data block
    const weeklySleepData = {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
      datasets: [
        {
          label: `Hours of Sleep Week of ${date}`,
          data: weeklyHS,
          ...barStyle1,
        },
        {
          label: `Sleep Quality Week of ${date}`,
          data: weeklySQ,
          ...barStyle2,
        },
      ],
    };

    // config block
    const config = {
      type: 'bar',
      data: weeklySleepData,
      options: {
        ...chartOptions,
      },
    };
    // initialization
    weeklySleepChart = new Chart(sleepChart, config);

    return weeklySleepChart;
  },

  renderSleepChartByDay(sleep, date) {
    const hours = sleep.getSleepDataByGivenDay(date, 'hoursSlept');
    const quality = sleep.getSleepDataByGivenDay(date, 'sleepQuality');
    const dailySleep = document.querySelector('#dailyHoursSlept');
    const config = {
      type: 'bar',
      data: {
        labels: [''],
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
        indexAxis: 'y',
        responsive: true,
        ...chartOptions,
      },
    };
    dailySleepChart = new Chart(dailySleep, config);

    return dailySleepChart;
  },

  renderOuncesByWeek(hydration, date) {
    let weeklyData = hydration.getDailyOuncesByWeek(date);
    console.log(weeklyData);
    const hydrationChart = document.querySelector('#weeklyOunces');
    const config = {
      type: 'bar',
      data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [
          {
            label: `Water Intake Week of ${date}`,
            data: weeklyData,
            ...barStyle1,
          },
        ],
      },
      options: {
        ...chartOptions,
      },
    };
    weeklyHydrationChart = new Chart(hydrationChart, config);

    return weeklyHydrationChart;
  },

  renderOuncesPerDay(hydration, date) {
    const day = hydration.ouncesPerDay(date);
    const hydrationChart = document.querySelector('#dailyOunces');
    const config = {
      type: 'bar',
      data: {
        labels: [''],
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
        indexAxis: 'y',
        responsive: true,
        ...chartOptions,
      },
    };
    dailyOunces = new Chart(hydrationChart, config);

    return dailyOunces;
  },
};

// destroy and render new chart functions
const destroyCharts = () => {
  weeklySleepChart.destroy();
  dailySleepChart.destroy();
  weeklyHydrationChart.destroy();
  dailyOunces.destroy();
};

export { charts, destroyCharts };
