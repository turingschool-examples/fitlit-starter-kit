class Activity {
  constructor(currentUser, activityData) {
    this.currentUser = currentUser;
    this.usersActivity = activityData.filter(data => data.userID === currentUser.id);
    this.activityData = activityData;
  };

  getMinutesActiveByDate(date) {
    const minutesActive = this.usersActivity
      .find(data => data.date === date);

    return minutesActive.minutesActive;
  };

  getAvgMinutesActivePerWeek(date) {
    const start = this.usersActivity.findIndex(data => data.date === date);
    const weeklyData = this.usersActivity.slice(start, start + 7);

    const averageMinutes = weeklyData.reduce((average, data) => {
      return average += data.minutesActive;
    }, 0);

    return Math.round(averageMinutes / weeklyData.length);
  };

  getStepGoalByDay(date) {
    const lessMessage = this.usersActivity
      .find(data => data.date === date && this.currentUser.dailyStepGoal > data.numSteps);
    const equalMessage = this.usersActivity
      .find(data => data.date === date && this.currentUser.dailyStepGoal === data.numSteps);
    const moreMessage = this.usersActivity
      .find(data => data.date === date && this.currentUser.dailyStepGoal < data.numSteps);   

    if(lessMessage) {
      return `Your steps for today are ${lessMessage.numSteps}. You have not yet reached your step goal of ${this.currentUser.dailyStepGoal} steps for today.`;
    };

    if(equalMessage) {
      return `Your steps for today are ${equalMessage.numSteps}. You have reached your step goal of ${this.currentUser.dailyStepGoal} steps for today!`;
    };
    
    if(moreMessage) {
      return `Your steps for today are ${moreMessage.numSteps}. You have exceeded your step goal of ${this.currentUser.dailyStepGoal} steps for today!!`;
    };
  };

  getDaysThatExceedStepGoal() {
    const exceededStepGoal = this.usersActivity
      .filter(data => this.currentUser.dailyStepGoal < data.numSteps)
      .map(data => `{date: ${data.date}, steps: ${data.numSteps}}`);

    return exceededStepGoal;
  };

  getHighestFlightsClimbed() {
    const climbingRecord = this.usersActivity
      .sort((first, last) => last.flightsOfStairs - first.flightsOfStairs)
      .map(data => `{date: ${data.date}, flights: ${data.flightsOfStairs}}`)
    return climbingRecord[0];
  };

  getAllUsersAverages(type, date) {
    const typeAverage = this.activityData.reduce((sum, data) => {
      const typeData = this.activityData
        .filter(data => data.date === date);

        sum += data[type];
      return sum / typeData.length;
    }, 0);

    return Math.round(typeAverage);
  };
};

export default Activity;