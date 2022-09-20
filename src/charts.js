// Import third party libraries:
import Chart from 'chart.js/auto';

// Global charts
let weeklySleepChart;
let dailySleepChart;
let weeklyHydrationChart;
let dailyOuncesChart;
let weeklyNumStepsChart;
let weeklyMinutesActiveChart;
let weeklyFlightsClimbedChart;
let dailyMilesChart;
let dailyNumStepsChart;
let dailyMinutesActiveChart;
let dailyFlightsClimbedChart;

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
  borderColor: '#0077BB',
  borderWidth: 2.5,
  backgroundColor: '#0077BB9d',
  hoverBackgroundColor: '#00DDDD9d',
};

const barStyle2 = {
  borderColor: '#9000EE',
  borderWidth: 2.5,
  backgroundColor: '#9000EE6d',
  hoverBackgroundColor: '#CC77FF',
};

// const barStyle3 = {
  //   backgroundColor: '#9000EE',
  //   hoverBackgroundColor: '#CC77FF',
  // };
  
  // const barStyle4 = {
    //   backgroundColor: '#9000EE',
    //   hoverBackgroundColor: '#CC77FF',
    // };
    
    // const barStyle5 = {
      //   backgroundColor: '#9000EE',
      //   hoverBackgroundColor: '#CC77FF',
      // };

const iterateThruWeek = (week, key) => {
  return week.map((day) => day[key]);
};
      
const charts = {
  renderOuncesByWeek(hydration, date) {
    const hydrationChart = document.querySelector('.weekly-ounces');
    const weeklyData = hydration.getDailyOuncesByWeek(date);

    const config = {
      type: 'bar',
      data: {
        labels: iterateThruWeek(weeklyData, 'date'),
        datasets: [
          {
            label: `Water Intake for the Week of ${date}`,
            data: iterateThruWeek(weeklyData, 'numOunces'),
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
    const hydrationChart = document.querySelector('.daily-ounces');
    const day = hydration.ouncesPerDay(date);

    const config = {
      type: 'bar',
      data: {
        labels: [''],
        datasets: [
          {
            label: `Your Daily Water Intake on ${date}`,
            data: [day],
            ...barStyle1,
            catagoryPercentage: 0.15,
            barPercentage: 0.3,
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

    dailyOuncesChart = new Chart(hydrationChart, config);
  
    return dailyOuncesChart;
  },

  renderSleepChartByWeek(sleep, date) {
    const sleepChart = document.querySelector('.weekly-hours-slept');
    const week = sleep.getDailySleepByWeek(date);
    
    const weeklySleepData = {
      labels: iterateThruWeek(week, 'date'),
      datasets: [
        {
          label: `Hours of Sleep for the Week of ${date}`,
          data: iterateThruWeek(week, 'hoursSlept'),
          ...barStyle1,
        },
        {
          label: `Sleep Quality Week of ${date}`,
          data: iterateThruWeek(week, 'sleepQuality'),
          ...barStyle2,
        },
      ],
    };

    const config = {
      type: 'bar',
      data: weeklySleepData,
      options: {
        ...chartOptions,
      },
    };

    weeklySleepChart = new Chart(sleepChart, config);

    return weeklySleepChart;
  },

  renderSleepChartByDay(sleep, date) {
    const hours = sleep.getSleepDataByGivenDay(date, 'hoursSlept');
    const quality = sleep.getSleepDataByGivenDay(date, 'sleepQuality');
    const dailySleep = document.querySelector('.daily-hours-slept');

    const config = {
      type: 'bar',
      data: {
        labels: [''],
        datasets: [
          {
            label: `Your Hours Slept on ${date}`,
            data: [hours],
            ...barStyle1,
            catagoryPercentage: 0.3,
            barPercentage: 0.6,
            borderRadius: 4,
          },
          {
            label: `Your Sleep Quality on ${date}`,
            data: [quality],
            ...barStyle2,
            catagoryPercentage: 0.3,
            barPercentage: 0.6,
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

  renderNumStepsByWeek(activity, date) {
    let weeklyData = activity.getWeeklyActivity(date);
    const activityChart = document.querySelector('.weekly-num-steps');

    const config = {
      type: 'bar',
      data: {
        labels: iterateThruWeek(weeklyData, 'date'),
        datasets: [
          {
            label: `Steps Taken for the Week of ${date}`,
            data: iterateThruWeek(weeklyData, 'numSteps'),
            ...barStyle1,
          },
        ],
      },
      options: {
        ...chartOptions,
      },
    };

    weeklyNumStepsChart = new Chart(activityChart, config);
  
    return weeklyNumStepsChart;
  },

  renderMinutesActiveByWeek(activity, date) {
    let weeklyData = activity.getWeeklyActivity(date);
    const activityChart = document.querySelector('.weekly-minutes-active');

    const config = {
      type: 'bar',
      data: {
        labels: iterateThruWeek(weeklyData, 'date'),
        datasets: [
          {
            label: `Minutes Active for the Week of ${date}`,
            data: iterateThruWeek(weeklyData, 'minutesActive'),
            ...barStyle1,
          },
        ],
      },
      options: {
        ...chartOptions,
      },
    };

    weeklyMinutesActiveChart = new Chart(activityChart, config);
  
    return weeklyMinutesActiveChart;
  },

  renderFlightsClimbedByWeek(activity, date) {
    let weeklyData = activity.getWeeklyActivity(date);
    const activityChart = document.querySelector('.weekly-flights-climbed');

    const config = {
      type: 'bar',
      data: {
        labels: iterateThruWeek(weeklyData, 'date'),
        datasets: [
          {
            label: `Flights of Stairs Climbed for the Week of ${date}`,
            data: iterateThruWeek(weeklyData, 'flightsOfStars'),
            ...barStyle1,
          },
        ],
      },
      options: {
        ...chartOptions,
      },
    };

    weeklyFlightsClimbedChart = new Chart(activityChart, config);
  
    return weeklyFlightsClimbedChart;
  },

  renderMilesPerDay(activity, date) {
    const activityChart = document.querySelector('.miles-by-day');
    const day = activity.getDailyMilesByDate(date);

    const config = {
      type: 'bar',
      data: {
        labels: [''],
        datasets: [
          {
            label: `Your Total Miles Walked on ${date}`,
            data: [day],
            ...barStyle1,
            catagoryPercentage: 0.15,
            barPercentage: 0.3,
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

    dailyMilesChart = new Chart(activityChart, config);
  
    return dailyMilesChart;
  },

  renderNumStepsPerDay(activity, allUsers, date) {
    const currentUserDay = activity.getDailyActivityByDate('numSteps', date);
    const allUsersAvg = allUsers.getAllUsersAverages('numSteps', date)
    const activityChart = document.querySelector('.steps-by-day');

    const config = {
      type: 'bar',
      data: {
        labels: [''],
        datasets: [
          {
            label: `Your Steps Taken on ${date}`,
            data: [currentUserDay],
            ...barStyle1,
            catagoryPercentage: 0.3,
            barPercentage: 0.6,
            borderRadius: 4,
          },
          {
            label: `Average Steps Taken for All User's on ${date}`,
            data: [allUsersAvg],
            ...barStyle2,
            catagoryPercentage: 0.3,
            barPercentage: 0.6,
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

    dailyNumStepsChart = new Chart(activityChart, config);
  
    return dailyNumStepsChart;
  },

  renderMinutesActivePerDay(activity, allUsers, date) {
    const currentUserDay = activity.getDailyActivityByDate('minutesActive', date);
    const allUsersAvg = allUsers.getAllUsersAverages('minutesActive', date)
    const activityChart = document.querySelector('.minutes-by-day');

    const config = {
      type: 'bar',
      data: {
        labels: [''],
        datasets: [
          {
            label: `Your Minutes Active on ${date}`,
            data: [currentUserDay],
            ...barStyle1,
            catagoryPercentage: 0.3,
            barPercentage: 0.6,
            borderRadius: 4,
          },
          {
            label: `Average Minutes Active for All User's on ${date}`,
            data: [allUsersAvg],
            ...barStyle2,
            catagoryPercentage: 0.3,
            barPercentage: 0.6,
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

    dailyMinutesActiveChart = new Chart(activityChart, config);
  
    return dailyMinutesActiveChart;
  },

  renderFlightsClimbedPerDay(activity, allUsers, date) {
    const currentUserDay = activity.getDailyActivityByDate('flightsOfStairs', date);
    const allUsersAvg = allUsers.getAllUsersAverages('flightsOfStairs', date)
    const hydrationChart = document.querySelector('.flights-by-day');

       const config = {
      type: 'bar',
      data: {
        labels: [''],
        datasets: [
          {
            label: `Your Flights of Stairs Climbed on ${date}`,
            data: [currentUserDay],
            ...barStyle1,
            catagoryPercentage: 0.3,
            barPercentage: 0.6,
            borderRadius: 4,
          },
          {
            label: `Average Flights of Stairs Climbed for All User's on ${date}`,
            data: [allUsersAvg],
            ...barStyle2,
            catagoryPercentage: 0.3,
            barPercentage: 0.6,
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

    dailyFlightsClimbedChart = new Chart(hydrationChart, config);
  
    return dailyFlightsClimbedChart;
  },
};

const destroyCharts = () => {
  weeklySleepChart.destroy();
  dailySleepChart.destroy();
  weeklyHydrationChart.destroy();
  dailyOuncesChart.destroy();
  weeklyNumStepsChart.destroy();
  weeklyMinutesActiveChart.destroy();
  weeklyFlightsClimbedChart.destroy();
  dailyMilesChart.destroy();
  dailyNumStepsChart.destroy();
  dailyMinutesActiveChart.destroy();
  dailyFlightsClimbedChart.destroy();
};

export { charts, destroyCharts };
