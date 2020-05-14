class Hydration {
  constructor(id, hydrationData) {
    this.userHydration = this.getUserHydration(id, hydrationData);
  }

  getUserHydration(id, hydrationData) {
    return hydrationData.filter(hydration => {
      return hydration.userID === id;
    })
  }

  getDailyWater(date) {
    let newDate = this.checkDate(date);
    if (date === newDate) {
      let dailyHydration = this.userHydration.filter(hydration => {
        return hydration.date === date;
      })
      
      return dailyHydration.reduce((acc, hydration) => {
        acc += hydration.numOunces;
        return acc;
      }, 0)
    } else { return 'You must pass a valid date'}
  }

  getWeeklyWater(date) {
    let newDate = this.checkDate(date);
    if (date === newDate) {
    let hydrationDate = this.userHydration.find(hydration => {
      return hydration.date === date
    })

    let firstDate = this.userHydration.indexOf(hydrationDate);
    return this.userHydration
      .slice(firstDate, firstDate+7)
      .map(hydration => hydration.numOunces);
    } else { return 'You must pass a valid date'}
  }

  getAvgWater() {
    let avg = this.userHydration.reduce((acc, hydration) => {
      return acc += hydration.numOunces / this.userHydration.length
    }, 0)

    return Math.ceil(avg);
  }

  checkDate(date) {
    let isDate = new Date(date);
    let newIsDate = isDate.getFullYear() +"/"+ 
      ("0" + (isDate.getMonth() + 1)).slice(-2) +"/"+ 
      ("0" + isDate.getDate()).slice(-2);
    return newIsDate;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
