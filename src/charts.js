import Chart from 'chart.js/auto';

//Global Variables
const barColors = ["orange", "#00aba9",];
const xValues = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
const labels = ['All-Time Avg. Sleep Quality (1-5)', 'All-Time Avg. Sleep Duration'];

//Global Functions
function makeStepCharts(yValues) {
  new Chart('stepGoal', {
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

function makeDailyH20Charts(yValues) {
  new Chart('dailyHydration', {
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

function dailySleepChart(yValues) {
  new Chart('dailySleep', {
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

function dailySleepQualityChart(yValues) {
  new Chart('dailySleepQuality', {
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

function sleepHistoryBarGraph(userSleepHistory, userQualityHistory) {
  new Chart('sleepHistory', {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        label: 'Hours Slept',
        data: userSleepHistory,
        borderColor: "orange",
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

function hydrationBarGraph(hydrationByDay) {
  new Chart('weeklyHydration', {
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

function allTimeSleepQuality(allTimeSleep) {
  new Chart('allTimeSleepHistory', {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: 'Sleep History',
        data: allTimeSleep,
        backgroundColor: [
          'blue',
          'orange'
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

function loadCharts(
  stepYValues,
  dailyH2OYValues,
  sleepYValues,
  qualityYValues,
  userSleepHistory,
  userQualityHistory,
  hydrationByDay,
  allTimeSleep) {
  makeStepCharts(stepYValues)
  makeDailyH20Charts(dailyH2OYValues)
  dailySleepChart(sleepYValues)
  dailySleepQualityChart(qualityYValues)
  sleepHistoryBarGraph(userSleepHistory, userQualityHistory)
  hydrationBarGraph(hydrationByDay)
  allTimeSleepQuality(allTimeSleep)
}

export default loadCharts;