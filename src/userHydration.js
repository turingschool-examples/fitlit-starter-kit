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

    const allTimeAverage = allTimeTotalOunces / this.hydrationInfo.length

    return allTimeAverage
  }

    calculateSingleDayOunces(day) {
      const allDays = this.hydrationInfo.filter(dayInfo => dayInfo.date === day);
      const totalOunces = allDays.reduce((acc, cur) => {
        return acc += cur.numOunces;
      }, 0);
  
      return totalOunces;
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