if (typeof module !== "undefined") {
hydrationFilePath = require("../data/HydrationSub");
} else {
  hydrationFilePath = hydrationData;
}

  class Hydration {
    constructor(userID) {
      this.userID = userID,
      this.data = hydrationFilePath;
    }
  
    returnAllTimeAvg(userID) {
      let users = this.data.filter(function(user) {
          return user.userID === userID;
      });
      return Math.floor(Number(users.reduce(function(totalOunces, user) {
          return totalOunces += user.numOunces;
      }, 0) / users.length));
    }

    returnSpecificDayOz(date) {
      let users = this.data.filter(user => {
        return user.userID === this.userID;
      });
      return users.reduce(function(acc, user) {
        if (user.date === date) {
          acc += user.numOunces;
        }
        return Number(acc);
      }, 0);
    }

    returnWaterEachDay(userID) {
      return this.data.reduce(function(totalDays, user) {
        if (totalDays.length < 8 && user.userID === userID) {
          totalDays.push(user.numOunces);
        };
        return totalDays;
      }, []);
    }

    returnWeekInfo(startDate, endDate) {
      let firstIndex = this.data.findIndex(el => {
        return el.date === startDate;
      });
      let allDates = this.data.reduce((dates, user) => {
        dates.push(user.date)
        return dates
      }, [])
      let lastIndex = allDates.lastIndexOf(endDate);
      return this.data.slice(firstIndex, lastIndex)
    }

    returnWeeklyHydration(startDate, endDate) {
      let correctWeek = this.returnWeekInfo(startDate, endDate);
      let correctUserData = correctWeek.filter(user => {
        return user.userID === this.userID
      })
      return correctUserData.map(user => {
        return user.numOunces;
      })
    }
  
  }  
  
  if (typeof module !== 'undefined') {
    module.exports = Hydration;
  }