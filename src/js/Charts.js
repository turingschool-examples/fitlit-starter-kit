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
          'blue', 'green'
        ],
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
        borderColor: 'blue'
      },
      {
        label: `Average`,
        data: lastWeekDates.map(day => hydration.getAverage()),
        borderColor: 'black'
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
      labels: ['Total Sleep', 'Missing Sleep'],
      datasets:[{
        label: `Today's Sleep`,
        data: sleep.getAverage() > todaysSleepHours ? [todaysSleepHours, sleep.getAverage() - todaysSleepHours]
                 : [todaysSleepHours],
        backgroundColor: [
          'blue', 'green'
        ],
      }]
    },
    options: {}
  }
}
//
// let todaysSleepHoursQualityChart = (currentUser) => {
//
// }
//
// let weeklySleepHoursChart = (currentUser) => {
//
// }
//
// let weeklySleepHoursQualityChart = (currentUser) => {
//
// }
//
// let avgSleepHoursChart = (currentUser) => {
//
// }
//
// let avgSleepHoursQualityChart = (currentUser) => {
//
// }



export default {
  todaysIntakeChart, weeklyIntakeChart, todaysSleepHoursChart
}
