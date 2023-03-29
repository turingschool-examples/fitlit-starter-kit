class UserHydration {
  constructor(userID, hydrationData) {
    this.userID = userID
    this.hydrationInfo = hydrationData.filter(user => user.userID === userID)
  }

  calculateAllTimeAverageDailyOunces() {
    const allTimeTotalOunces = this.hydrationInfo
      .reduce((acc, cur) => {
        return acc += cur.numOunces
      }, 0)

    const allTimeAverage = allTimeTotalOunces / hydrationData.length

    return allTimeAverage
  }

    calculateOuncesLastSevenDays() {
      const sevenDayOunces = [];
  
      for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
  
        const dayInfo = this.hydrationInfo.find(info => {
          const infoDate = new Date(info.date);
          return infoDate.toDateString() === date.toDateString();
        });
  
        if (dayInfo) {
          sevenDayOunces.push(dayInfo.numOunces);
        } else {
          sevenDayOunces.push(0);
        }
      }
  
      return sevenDayOunces;
    }
  }
  

  


export default UserHydration