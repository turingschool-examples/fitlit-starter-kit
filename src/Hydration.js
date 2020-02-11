class Hydration {
  constructor(hydrationData, userID) {
    this.hydrationData = hydrationData;
    this.userID = userID;
  }

  fluidConsumedByDate(date) {
    const fluid = this.hydrationData.find(data => {
      return data.date === date;
    })
     return fluid.numOunces;
  }

  fluidConsumededWeekly(weekStart) {
    weekStart = new Date(weekStart)
    let weekEnd = this.addDays(weekStart, 6);

    let data = this.hydrationData.filter(function(obj) {
      var date = new Date(obj.date);
      return date >= weekStart && date <= weekEnd;
    });

    let fluidConsumedOverTheWeek = this.hydrationData.filter(fluid => {
      return fluid.numOunces;
    })
    // console.log(fluidConsumedOverTheWeek)
    // return fluidConsumedOverTheWeek
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

  addDays(date, daysToAdd) {
    var newDate = new Date(date.valueOf());
    newDate.setDate(newDate.getDate() + daysToAdd);
    return newDate;
  }
}

if(typeof module !== 'undefined') {
  module.exports = Hydration;
}
