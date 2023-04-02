class Activity {
  constructor(activityData) {
    this.data = activityData;
  }
 
  calculateMilesWalked(date, user) {
    const dayActivities = this.data.find(activity => activity.date === date);
    const steps = dayActivities.numSteps;
    const miles = Math.round((steps * user.strideLength)/5280);
    return miles; 
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
      return "Congratulations you met your goal!";
    }
    else {
      return `You can still meet your goal for today! Just ${user.dailyStepGoal - stepsToday.numSteps} steps left to go!`;
    }
  }
}

export default Activity;