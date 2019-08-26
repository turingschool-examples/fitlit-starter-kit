class ActivityUser{
  constructor(activityTestData) {
    this.activityTestData = activityTestData
  }

  findActivityInfo(id) {
    return this.activityTestData.filter(user => user.userID === id);
  }

  findUserInfo() {
    return user.strideLength
  }

  findStepsWalked(date, id) {
    let day = this.findActivityInfo(id).find(user => user.date === date);
    return day.numSteps
  }


  calculateMilesWalked(date, id) {
    let user = this.findActivityInfo(id).find(user => user.date === date)
    console.log('user-->', user)
    let steps = user.numSteps
    console.log('steps-->', steps)
    let strideLength = user(id).map(user => user.strideLength)
    console.log('stride length-->', strideLength)
    let stepsAndStride = Math.floor(steps * strideLength[0])
    console.log('steps and stride--->', stepsAndStride)
    let miles = 5280 / stepsAndStride
    
    return Number(miles.toFixed(2))


} 



}
if (typeof module !== 'undefined') {
  module.exports = ActivityUser;
}