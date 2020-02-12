class Hydration {
  constructor(hydrationData, userID) {
    this.hydrationData = hydrationData;
    this.userID = userID;
  }

  fluidConsumedByDate(date, userID) {
    let theFluid = this.hydrationData.filter(data => {
      return data.date === date;
    })
    let filteredUser = theFluid.find(user => {
      return user.userID === userID
    });
    return filteredUser.numOunces;
  }

  fluidConsumededWeekly(id, date) {
    let filteredUser = this.hydrationData.filter(user => user.userID === id);
    let todayIndex = filteredUser.findIndex(user => user.date === date);
    let weeklyOunces = filteredUser.slice(todayIndex - 6, todayIndex + 1).map(user => user.numOunces)
    console.log(date, todayIndex)
    return weeklyOunces;
  }



  fluidConsumedALlTime(id){
     let allTime = this.hydrationData.reduce((acc, all) => {
      if(all.userID === id) {
        acc += all.numOunces;
      }
    return acc
    }, 0)
    return allTime;
  }

  // addDays(date, daysToAdd) {
  //   var newDate = new Date(date.valueOf());
  //   newDate.setDate(newDate.getDate() + daysToAdd);
  //   return newDate;
  // }
}

if(typeof module !== 'undefined') {
  module.exports = Hydration;
}
