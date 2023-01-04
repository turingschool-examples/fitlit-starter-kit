import { userDataForDate } from './helperFunctions'
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
}

export default Activity;