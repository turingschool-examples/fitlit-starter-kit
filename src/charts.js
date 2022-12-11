import Chart from 'chart.js/auto';
// import displayStepGoal from './scripts'

// Steps
// var yValues = displayStepGoal();
var barColors = [
  "#b91d47",
  "#00aba9",
];
const steps = document.getElementById('stepGoal');
function makeStepCharts(yValues) {
  new Chart(steps, {
    type: "doughnut",
    data: {
      labels: ["Your Steps", "Steps Remaining"],
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Today"
      }
    }
  });
}

const dailyHydration = document.getElementById('dailyHydration')
function makeDailyH20Charts(yValues) {
  new Chart(dailyHydration, {
    type: "doughnut",
    data: {
      labels: ["Water Today", "H20 Goal"],
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Today"
      }
    }
  });
}

const dailySleep = document.getElementById('dailySleep')
function dailySleepChart(yValues) {
  new Chart(dailySleep, {
    type: "doughnut",
    data: {
      labels: ["Hours Slept"],
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Today"
      }
    }
  })
}

const dailySleepQuality = document.getElementById('dailySleepQuality')
function dailySleepQualityChart(yValues) {
  new Chart(dailySleepQuality, {
    type: "doughnut",
    data: {
      labels: ["Quality of Sleep"],
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Today"
      }
    }
  })
}

var xValues = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];

const sleepHistory = document.getElementById('sleepHistory')
function sleepHistoryBarGraph(userSleepHistory, userQualityHistory) {
  new Chart("sleepHistory", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        label: 'Hours Slept',
        data: userSleepHistory,
        borderColor: "red",
        fill: false
      },
      {
        label: 'Sleep Quality',
        data: userQualityHistory,
        borderColor: "blue",
        fill: false
      }]
    },
    options: {
      legend: { display: false }
    }
  });
}

var xValues = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];

const hydrationHistory = document.getElementById('weeklyHydration')
function hydrationBarGraph(hydrationByDay) {
  new Chart("weeklyHydration", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        label: 'Hydration by Day',
        data: hydrationByDay,
        borderColor: "blue",
        fill: false
      },]
    },
    options: {
      legend: { display: false }
    }
  });
}

const labels = ['All-Time Avg. Sleep Quality (1-5)', 'All-Time Avg. Sleep Duration']

let allTimeSleepData = document.getElementById('allTimeSleepHistory')
function allTimeSleepQuality(allTimeSleep) {
  new Chart("allTimeSleepHistory", {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: 'Sleep History',
        data: allTimeSleep,
        backgroundColor: [
          'blue',
          'red'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
        ],
        borderWidth: 1
      }]
    }
  })
}

function loadCharts(stepYValues, dailyH2OYValues, sleepYValues, qualityYValues, userSleepHistory, userQualityHistory, hydrationByDay, allTimeSleep) {
  makeStepCharts(stepYValues)
  makeDailyH20Charts(dailyH2OYValues)
  dailySleepChart(sleepYValues)
  dailySleepQualityChart(qualityYValues)
  sleepHistoryBarGraph(userSleepHistory, userQualityHistory)
  hydrationBarGraph(hydrationByDay)
  allTimeSleepQuality(allTimeSleep)
}
export default loadCharts;
