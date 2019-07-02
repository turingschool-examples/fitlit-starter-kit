FilePath = require("../data/HydrationSub");

  class Hydration {
    constructor(userID) {
      this.userID = userID,
      this.data = FilePath
    }
  
    returnAllTimeAvg(userID) {
      let users = this.data.filter(function(user) {
          return user.userID === userID;
      });
      return Math.floor(Number(users.reduce(function(totalOunces, user) {
          return totalOunces += user.numOunces;
      }, 0) / users.length));
    }

    returnSpecificDayOz(userID, date) {
      let users = this.data.filter(function(user) {
        return user.userID === userID;
      });

      return users.reduce(function(acc, user) {
        if (user.date === date) {
          acc.push(user.numOunces);
        }
        return Number(acc);
      }, [])
    }

    returnWaterEachDay(userID) {
      this.data.reduce(function())
    }
  
  }  
  
  if (typeof module !== 'undefined') {
    module.exports = Hydration;
  }