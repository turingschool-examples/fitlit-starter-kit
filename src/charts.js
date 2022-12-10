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
  

function loadCharts(stepYValues, dailyH2OYValues, yValues) {
  makeStepCharts(stepYValues)
  makeDailyH20Charts(dailyH2OYValues)
  dailySleepChart(yValues)
}
export default loadCharts;
