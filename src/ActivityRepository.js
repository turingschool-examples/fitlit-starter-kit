class ActivityRepository{
  constructor(activityTestData) {
    this.activityTestData = activityTestData;
  }


  getUsers(date) {
    return this.activityTestData.filter(day => day.date === date)
  }

  findStairAverage(date) {
    var totalStairs = this.getUsers(date).reduce((acc, user) => {
      acc += user.flightsOfStairs
      // console.log(acc)
      return acc
    }, 0)
    return totalStairs / this.getUsers(date).length;
  }


} //<-----end of class 


if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}