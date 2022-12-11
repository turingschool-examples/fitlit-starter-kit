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
      data: userSleepHistory,
      borderColor: "red",
      fill: false
    }, 
    { 
      data: userQualityHistory,
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});
}

function loadCharts(stepYValues, dailyH2OYValues, sleepYValues, qualityYValues, userSleepHistory, userQualityHistory) {
  makeStepCharts(stepYValues)
  makeDailyH20Charts(dailyH2OYValues)
  dailySleepChart(sleepYValues)
  dailySleepQualityChart(qualityYValues)
  sleepHistoryBarGraph(userSleepHistory, userQualityHistory)
}
export default loadCharts;
