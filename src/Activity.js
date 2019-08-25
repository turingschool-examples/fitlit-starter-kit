class Activity {
  constructor(data, user) {
    this.userData = data;
    this.strideLength = user.strideLength;
    this.stepGoal = user.dailyStepGoal;
  }

  changeTimeFormat(date) {
    const newDateFormat = new Date(date)
    return newDateFormat.getTime();
  }

  getStatsFromDay(date, property) {
    return this.userData.find(day => day.date === this.changeTimeFormat(date))[property];
  }

  getMiles(date, property) {
   return parseFloat(((this.getStatsFromDay(date, property) * this.strideLength) / 5280).toFixed(2))
  }

  getWeek(givenDate) {
    const arrayOfDates = this.userData.map(day => day.date);
    const index = (((arrayOfDates.length - arrayOfDates.findIndex(date => this.changeTimeFormat(givenDate) === date)) * -1) - 6);
    const weeklyArr = this.userData.slice(index, (index + 7)).reverse();
    return weeklyArr;
  }

  getWeeklyAvg(givenDate, property) {
    const weekArr = this.getWeek(givenDate)
    const weekTotal = weekArr.reduce((total, day) => {
      total += day[property];
      return total
    }, 0)
    // return weekTotal / 7
    return parseInt((weekTotal / 7))
  }

  checkStepGoal(date) {
    const currentSteps = this.getStatsFromDay(date, 'numSteps');
    if (currentSteps >= this.stepGoal) {
      return `"Way to go! You reached your setp goal of ${this.stepGoal} steps!" - Coach Scott`
    } 
    return `"You can do it, you're ${this.stepGoal - currentSteps} steps away from your goal!" - Coach Matt`
  }

  findDaysOverStepGoal() {
    return this.userData.filter( day => {
      if (day.numSteps >= this.stepGoal) {
        return day
      }
    }).map( day => {
      return { 'date': new Date(day.date).toString().slice(0, 10), 'steps': day.numSteps}
    })
  }

  everest() {
    return this.userData.sort((day1, day2) => {
      return day2.flightsOfStairs - day1.flightsOfStairs
    })[0]
  }

}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}