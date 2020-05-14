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
    let checkDate = new Date(date);
    let newCheckDate = checkDate.getFullYear() +"/"+ 
      ("0" + (checkDate.getMonth() + 1)).slice(-2) +"/"+ 
      checkDate.getDate();

    if (date === newCheckDate) {
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
    let checkDate = new Date(date);
    let newCheckDate = checkDate.getFullYear() +"/"+ 
      ("0" + (checkDate.getMonth() + 1)).slice(-2) +"/"+ 
      checkDate.getDate();

    if (date === newCheckDate) {
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
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
