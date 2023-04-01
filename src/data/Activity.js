class Activity {
  constructor(activityData, userData) {
    this.activityData = activityData,
    this.userData = userData
  };

  returnDailySteps(userID, date) {
    const activityEntries = this.activityData.filter(activityEntry => activityEntry.userID === userID);
    const dailyEntry = activityEntries.find(entry => {
      return entry.date === date ;
    });
    return dailyEntry.numSteps
  };

  returnWeeklySteps(userID, startDate) {
    const activityEntries = this.activityData.filter(activityEntry => activityEntry.userID === userID);
    const indexOfCurrentDayEntry = activityEntries.indexOf(activityEntries.find(entry => {
      return entry.date === startDate
    }))
    let weeklySteps = [];

    for (let i = indexOfCurrentDayEntry; i > indexOfCurrentDayEntry - 7; i--) {
      weeklySteps.push(activityEntries[i])
    }

    const weeklyActivityData = weeklySteps.map(entry => (
      {
      date: entry.date, 
      steps: entry.numSteps + ' steps taken'
      }
      ))
      return weeklyActivityData
  };

  returnMiles(userID, date) {
    const userInfo = this.userData.find(user => user.id === userID)
    const activityEntries = this.activityData.filter(activityEntry => activityEntry.userID === userID);

    const dailyEntry = activityEntries.find(entry => {
      return entry.date === date ;
    });
    return Math.round(userInfo.strideLength * dailyEntry.numSteps / 5280)
  };

  returnMinutesActive(userID, date) {
    const activityEntries = this.activityData.filter(activityEntry => activityEntry.userID === userID);

    const dailyEntry = activityEntries.find(entry => {
      return entry.date === date ;
    });
    return dailyEntry.minutesActive
  };

  returnMetStepGoal(userID, date) {
    const userInfo = this.userData.find(user => user.id === userID)
    const activityEntries = this.activityData.filter(activityEntry => activityEntry.userID === userID);
    const dailyEntry = activityEntries.find(entry => {
      return entry.date === date ;
    });
    if(dailyEntry.numSteps >= userInfo.dailyStepGoal) {
      return true
    } else {
      return false
    };
  };
};

export default Activity