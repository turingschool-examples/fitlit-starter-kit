


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

export default {
  todaysIntakeChart,
}
