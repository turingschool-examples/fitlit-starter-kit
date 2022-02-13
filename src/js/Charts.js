let colors = {
  lime: '#BAFF29',
  darkBlue: '#1A1B41',
  lightBlue: '#6290C3',
  white: '#F1FFE7',
  blueWhite: '#C2E7DA',
  transparent: 'rgba(0, 0, 0, 0)'
}

let todaysIntakeChart = (currentUser) => {
  let hydration = currentUser.hydration;
  let lastRecordDate = hydration.days[hydration.days.length - 1].date;
  let todaysIntake = hydration.getDaily(lastRecordDate)
  return {
    type: 'doughnut',
    data: {
      labels: ['Total Intake', 'Remaining Intake'],
      // caption: amount they drank / average
      datasets:[{
        label: `Today's Intake`,
        data: hydration.getAverage() > todaysIntake ? [todaysIntake, hydration.getAverage() - todaysIntake]
                 : [todaysIntake],
        backgroundColor: [
          colors.lightBlue, colors.transparent
        ],
        borderColor: [
          colors.darkBlue
        ]
      }]
    },
    options: {}
  }
};

let weeklyIntakeChart = (currentUser) => {
  let hydration = currentUser.hydration;
  let lastWeekDates = hydration.getWeekly().map(day => day.date);
  let weeklyIntake = hydration.getWeekly().map(day => day.numOunces);
  return {
    type: 'line',
    data: {
      labels: lastWeekDates,
      datasets:[{
        label: `Number of Ounces`,
        data: weeklyIntake,
        borderColor: colors.darkBlue,
        backgroundColor: colors.darkBlue
      },
      {
        label: `Average`,
        data: lastWeekDates.map(day => hydration.getAverage()),
        borderColor: colors.lightBlue,
        backgroundColor: colors.lightBlue
      }]
    },
    options: {}
  }
}

let todaysSleepHoursChart = (currentUser) => {
  let sleep = currentUser.sleep;
  let lastRecordDate = sleep.days[sleep.days.length - 1].date;
  let todaysSleepHours = sleep.getSleep(lastRecordDate)
  return {
    type: 'doughnut',
    data: {
      labels: ['Total Sleep', 'Sleep Deficiency'],
      datasets:[{
        label: `Today's Sleep`,
        data: sleep.getAverage() > todaysSleepHours ? [todaysSleepHours, sleep.getAverage() - todaysSleepHours]
                 : [todaysSleepHours],
        backgroundColor: [colors.darkBlue, colors.lime],
        borderColor: [colors.lightBlue]
      }]
    },
    options: {}
  }
}

let todaysSleepQualityChart = (currentUser) => {
  let sleep = currentUser.sleep;
  let lastRecordDate = sleep.days[sleep.days.length - 1].date;
  let todaysSleepQuality = sleep.getSleepQuality(lastRecordDate)
  return {
    type: 'doughnut',
    data: {
      labels: ['Sleep Quality', 'Sleep Quality Deficiency'],
      datasets:[{
        label: `Today's Sleep Quality`,
        data: sleep.getAverageQuality() > todaysSleepQuality ? [todaysSleepQuality, sleep.getAverageQuality() - todaysSleepQuality]
                 : [todaysSleepQuality],
        backgroundColor: [colors.lime, colors.blueWhite],
        borderColor: [colors.darkBlue]
      }]
    },
    options: {}
  }
}

let weeklySleepHoursChart = (currentUser) => {
  let sleep = currentUser.sleep;
  let lastWeekDates = sleep.getWeekSleep(sleep.days[sleep.days.length - 8].date).map(day => day.date);
  let weeklySleep = sleep.getWeekSleep(sleep.days[sleep.days.length - 8].date).map(day => day.hoursSlept);
  return {
    type: 'line',
    data: {
      labels: lastWeekDates,
      datasets:[{
        label: `Number of Hours Slept`,
        data: weeklySleep,
        borderColor: colors.darkBlue
      },
      {
        label: `Average`,
        data: lastWeekDates.map(day => sleep.getAverage()),
        borderColor: colors.lime
      }]
    },
    options: {}
  }
}

let weeklySleepQualityChart = (currentUser) => {
  let sleep = currentUser.sleep;
  let lastWeekDates = sleep.getWeekQuality(sleep.days[sleep.days.length - 8].date).map(day => day.date);
  let weeklySleepQuality = sleep.getWeekQuality(sleep.days[sleep.days.length - 8].date).map(day => day.sleepQuality);
  return {
    type: 'line',
    data: {
      labels: lastWeekDates,
      datasets:[{
        label: `Weekly Sleep Quality`,
        data: weeklySleepQuality,
        borderColor: colors.lightBlue
      },
      {
        label: `Average`,
        data: lastWeekDates.map(day => sleep.getAverageQuality()),
        borderColor: colors.lime
      }]
    },
    options: {}
  }
}

let avgSleepHoursChart = (currentUser) => {
  let sleep = currentUser.sleep;
  return {
    type: 'bar',
    data: {
      labels: ['My Average', 'FitLit Average'],
      datasets: [{
        label: '',
        data: [sleep.getAverage(),sleep.getAverageAll()],
        backgroundColor: [colors.lightBlue, colors.darkBlue],
        borderColor: [colors.darkBlue]
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }
}

let avgSleepQualityChart = (currentUser) => {
  let sleep = currentUser.sleep;
  return {
    type: 'bar',
    data: {
      labels: ['My Average'],
      datasets: [{
        label: '',
        data: [sleep.getAverageQuality()],
        backgroundColor: [colors.lime]
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }
}



export default {
  todaysIntakeChart,
  weeklyIntakeChart,
  todaysSleepHoursChart,
  todaysSleepQualityChart,
  weeklySleepHoursChart,
  weeklySleepQualityChart,
  avgSleepHoursChart,
  avgSleepQualityChart

}
