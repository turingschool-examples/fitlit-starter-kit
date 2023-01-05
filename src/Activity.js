import { userDataForDate, weeklyData } from './helperFunctions'
class Activity {
  constructor(data) {
    this.data = data;
  }

  calculateMilesForDate(id, date, strideLength) {
    const userActivity = userDataForDate(this.data, id, date)
    if (!userActivity) {
      return 'No data found for inputs'
    }
    return (userActivity.numSteps * strideLength / 5280).toFixed(2) * 1
  }

  findMintuesActiveForDate(id, date) {
    const userActive = userDataForDate(this.data, id, date)
    if (!userActive) {
      return 'No data found for inputs'
    }
    return userActive.minutesActive
  }

  averageMinutesActiveForWeek(id, date) {
    const minutesActiveObject = weeklyData(this.data, 'minutesActive', 'Minutes Active', id, date)
    if (typeof minutesActiveObject !== 'string') {
      return minutesActiveObject.count.reduce((acc, curr, _, arr) => acc + curr / arr.length, 0).toFixed(0) * 1
    } else {
      return minutesActiveObject
    }
  }

  dailyStepGoaAchieved(id, date, stepGoal) {
    const userData = userDataForDate(this.data, id, date)
    if(!userData) {
      return 'No data found for inputs'
    }
    return userData.numSteps > stepGoal
  }

  findDatesOverStepGoal(id, stepGoal) {
    const userData = this.data.filter(user => user.userID === id)
    if(userData.length === 0) {
      'No User Found'
    }
    const datesAchivedGoal = userData.filter(el => el.numSteps > stepGoal)
    if(datesAchivedGoal.length === 0) {
      return 'No Step Goals Met'
    }
    return datesAchivedGoal.map(el => el.date)
  }
}


export default Activity;