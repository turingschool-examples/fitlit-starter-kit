class Activity {
  constructor(activityData) {
    this.activityData = activityData;
  }

  calculateMilesToday(userID, date, strideLength) {
    let currentUser = this.activityData.filter(data => data.userID === userID);
    let distance = currentUser.find(stride => stride.date === date).numSteps * strideLength;
    return Number((distance / 5280).toFixed(2));
 }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}