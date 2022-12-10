import Chart from 'chart.js/auto';
// import displayStepGoal from './scripts'

// Steps
var xValues = ["Your Steps", "Steps Remaining"];
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

var h20ChartKeys = ["Water Today", "H2O Goal"] 
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

function loadCharts(stepYValues, dailyH2OYValues) {
  makeStepCharts(stepYValues)
  makeDailyH20Charts(dailyH2OYValues)
}
export default loadCharts;
