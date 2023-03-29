class Activity {
  constructor(activityData) {
    this.data = activityData;
  }
  
  dailyMinutesActive(userID, date) {
    const activeTime = this.data.find((entry) => {
      return entry.userID === userID && entry.date === date
    });
    return activeTime.minutesActive;
  };

  stepGoalMet(user, date) {
    const stepsToday = this.data.find((entry) => {
      return entry.date === date && user === user
    });
    console.log(stepsToday.numSteps);
    if(user.dailyStepGoal <= stepsToday.numSteps) {
      return true;
    }
    else {
      return false;
    }
  }
}

export default Activity;