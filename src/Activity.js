class Activity {
  constructor(data, stride) {
    this.data = data;
    this.userStride = stride;
  };

  getDailyActivityInfo(date, infoType) {
    if (infoType === 'minutesActive' || infoType === 'numSteps') {
      return this.data.find(activity => activity.date === date)[infoType];
    } else {
      return `${infoType} is not a valid argument!`;
    };
  };

  calculateMiles(date) {
    return parseFloat(((this.getDailyActivityInfo(date, 'numSteps') * this.userStride) / 5280).toFixed(2))
  };

  getLatestWeek() {
    return this.data.map(activity => activity.numSteps).slice(0,7);
  };
};

export default Activity;