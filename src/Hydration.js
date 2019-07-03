class Hydration {
  constructor(userData) {
    this.userData = userData;
    // console.log('class this', this.userData)
  }

  returnUserHydrationAverage() {
    return this.userData.reduce((acc, record) => {
      acc += record.numOunces;
      return acc;
    }, 0) / this.userData.length;
  }

  returnOuncesGivenDate(date) {
    return this.userData.find(record => record.date === date).numOunces;
  }

  returnOuncesGivenDateWeek(date) {
    let daySeven = this.userData.findIndex(record => record.date === date);
    let dayOne = daySeven -= 6;
  
    return this.userData.reduce((acc, record, index) => {
      if(record[index] >= dayOne && <= daySeven) {
        acc.push(record.numOunces);
      }
      return acc;
    }, [])
    // console.log(records)
  }
}

module.exports = Hydration;