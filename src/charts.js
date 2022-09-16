// Import third party libraries:
import Chart from 'chart.js/auto';

// Chart styling
const fontProperties = (context) => {
  const width = context.chart.width;
  const size = Math.round(width / 28);

  return {
    family: 'Alegreya',
    size: size
  };
};

const chartPlugins = {
  legend: {
    labels: {
      font: fontProperties
    }
  } 
};

const chartOptions = {
  scales: {
    x: {
      ticks: {
        font: fontProperties
      }
    },
    y: {
      ticks: {
        font: fontProperties
      }
    }
  }, 
  plugins: {
    ...chartPlugins
  }
};

const barStyle1 = {
  backgroundColor: '#0077BB',
  hoverBackgroundColor: '#00DDDD'
};

const barStyle2 = {
  backgroundColor: '#9000EE',
  hoverBackgroundColor:'#CC77FF'
};

const charts = {
// Chart render functions
  renderSleepChartByWeek(sleep, date1, date2) {
    const weeklyHS = sleep.getDailySleepByWeek('hoursSlept', date1, date2,);
    const weeklySQ = sleep.getDailySleepByWeek('sleepQuality', date1, date2,);

    const weeklyHoursSlept = new Chart('weeklyHoursSlept', {
      type: 'bar',
      data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [{
          label: 'Hours of Sleep Per Week',
          data: weeklyHS,
          ...barStyle1
        },
        {
          label: 'Sleep Quality Per Week',
          data: weeklySQ,
          ...barStyle2
        }
      ]
      },
      options: {
        ...chartOptions, 
      }
    });

    return weeklyHoursSlept;
  },

  renderSleepChartByDay(sleep, date) {
    const hours = sleep.getSleepDataByGivenDay(date, 'hoursSlept');
    const quality = sleep.getSleepDataByGivenDay(date, 'sleepQuality');

    const sleepDayCanvas = new Chart('dailyHoursSlept', {
      type: 'bar',
      data: {
        labels: [''],
        datasets: [{
          label: `Hours Slept on ${date}`,
          data: [hours],
          barPercentage: 0.5,
          ...barStyle1,
          borderRadius: 4
        },
        {
          label: `Sleep Quality on ${date}`,
          data: [quality],
          barPercentage: 0.5,
          ...barStyle2,
          borderRadius: 4
        }
      ]},
      options: {
        indexAxis: 'y',
        responsive: true,
        ...chartOptions  
      }
    });

    return sleepDayCanvas;
  },

  renderOuncesByWeek(hydration, date) {
    let weeklyData = hydration.getDailyOuncesByWeek(date);
    const weeklyOunces = new Chart('weeklyOunces', {
      type: 'bar',
      data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [{
          label: 'Water Intake for the week',
          data: weeklyData,
          ...barStyle1
        }]
      },
      options: {
        ...chartOptions
      }
    });

    return weeklyOunces;
  },

  renderOuncesPerDay(hydration, date) {
    const day = hydration.ouncesPerDay(date);

    const dailyOunces = new Chart('dailyOunces', {
      type: 'bar',
      data: {
        labels: [''],
        datasets: [{
          label: `Daily Water Intake on ${date}`,
          data: [day],
          ...barStyle2,
          barPercentage: 0.25,
          borderRadius: 4
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        ...chartOptions
      }
    });

    return dailyOunces;
  }
};

export default charts;