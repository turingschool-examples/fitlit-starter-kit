class Activity {
  constructor(data, user) {
    this.name = user.name
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

  returnIncreasedStepDays(date) {
    let newDate = this.changeTimeFormat(date)
    let index = this.userData.findIndex(day => day.date === newDate);
    let currentData = this.userData.slice(0, index + 1);
    return currentData.reduce((acc, day, i, array) => {
      if (i !== 0 && i !== array.length - 1) {
        if (day.numSteps > array[i - 1].numSteps && day.numSteps < array[i + 1].numSteps) {
          acc.push(array[i - 1], array[i], array[i + 1])
        }
      }
      return acc;
    }, [])
  }

  findFourteeners() {
    let totalFlights = this.userData.reduce((total, day) => {
      total += day.flightsOfStairs
      return total
    }, 0)
    let fourteeners = (totalFlights * 12) / 140000
    if (fourteeners < 1) {
      return `You're on your way. Keep Climbing!`
    }
    return parseInt(fourteeners)
  }


}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}