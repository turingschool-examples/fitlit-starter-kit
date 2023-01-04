class Activity {
  constructor(data) {
    this.data = data;
  }

  calculateMilesForDate(id, date, strideLength) {
    const userActivity = this.data.find(el => el.userID === id && el.date === date)
    console.log(userActivity)
    return (userActivity.numSteps * strideLength / 5280).toFixed(2) * 1
  }

  findMintuesActiveForDate(id, date) {
    const userActive = this.data.find(el => el.userID === id && el.date === date).minutesActive
    return userActive
  }
}

export default Activity;