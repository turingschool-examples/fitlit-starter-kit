import Chart from 'chart.js/auto';

// Steps
var xValues = ["Your Steps", "Steps Remaining"];
var yValues = [55, 45];
var barColors = [
  "#b91d47",
  "#00aba9",
];
const steps = document.getElementById('stepGoal');
function makeCharts() {
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
        text: "World Wide Wine Production 2018"
      }
    }
  });
}

export default makeCharts;