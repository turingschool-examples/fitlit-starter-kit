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

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    }, 
    { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});


function loadCharts(stepYValues, dailyH2OYValues, sleepYValues, qualityYValues ) {
  makeStepCharts(stepYValues)
  makeDailyH20Charts(dailyH2OYValues)
  dailySleepChart(sleepYValues)
  dailySleepQualityChart(qualityYValues)
}
export default loadCharts;
