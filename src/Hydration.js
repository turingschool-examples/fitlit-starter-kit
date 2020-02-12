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

  fluidConsumededWeekly(weekStart, id) {
    weekStart = new Date(weekStart)
    let weekEnd = this.addDays(weekStart, 6);

    let data = this.hydrationData.filter(function(obj) {
      var date = new Date(obj.date);
      return date >= weekStart && date <= weekEnd;
    });

    let fluidConsumedOverTheWeek = this.hydrationData.filter(fluid => {
      return fluid.userID === id;
    })
     return fluidConsumedOverTheWeek.filter(day => {
       // console.log(weekStart)
       // console.log(day.date === weekStart);
      return day.date === "2019/06/15";
    })
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
