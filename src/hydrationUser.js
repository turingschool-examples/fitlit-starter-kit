class Hydration {
  constructor(waterData) {
    this.waterData = waterData;
  }
    
  findUser(id) {
    return this.waterData.filter(user => {
      return user.userID === id;
    });   
  }

  getUserIndex(id, day) {
    let targetData = this.findUser(id);
    return targetData.findIndex(object => {
      return object.date === day;
    });
  }
    
  dailyHydration(id, date) {
    return this.findUser(id).find(user => user.date === date).numOunces;
  }

  allTimeHydration(id) {
    let userAvg = this.findUser(id).map(element => {
      return element.numOunces
    }).reduce((acc, currentVal) => {
      return acc += currentVal
    }, 0) / this.findUser(id).length;
    return userAvg;
  }

  weeklyHydration(id, day) {
    let targetUserData = this.findUser(id);
    let index = this.getUserIndex(id, day)
    let weekData = targetUserData.slice(index - 6, index + 1).map(arr => {
      return ` ${arr.date}  :  ${arr.numOunces} `;
    })
    return weekData;

  }

  getIncreasingWater(id) {
    let userInfo = this.findUser(id)
    let trend = userInfo.reduce((acc, day, index) => {
      if (index < 2) {
        return acc;
      }
    
      if (day.numOunces > userInfo[index - 1].numOunces && 
        userInfo[index - 1].numOunces > userInfo[index - 2].numOunces) {
        {acc.push(day.date)}
      }
      return acc
    }, [])
    return trend
  }

    
}
    




if (typeof module !== 'undefined') {
  module.exports = Hydration;
}