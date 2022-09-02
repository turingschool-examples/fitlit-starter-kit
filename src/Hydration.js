class Hydration {
    constructor(userId, hydrationData) {
      this.id = userId;
      this.ounces = hydrationData.filter(data => data.userID === userId); 
      this.hydrationData = hydrationData;
    };
    
    ouncesPerDay(date) {
      let dailyOunces = this.ounces.find(entry => {
        
        return entry.date === date;
        
      })
      
      
      return dailyOunces.numOunces;
    };
    
    getDailyOuncesByWeek(userInfo, date1, date2) {
      let weekById = userInfo.reduce((userDays, entry) => {
        if (this.id === entry.userID) {
          userDays.push(entry);
        }
          return userDays;
      }, [])
        return weekById.slice(date1, date2);
    };
    
    getAvgOunces(userInfo) {
      const totalOunces = userInfo.reduce((acc, entry) => {
        if (this.id === entry.userID) {
          acc += entry.numOunces;
        }
        return acc;      
      }, 0);   
      return Math.round(totalOunces / this.ounces.length);
    };
};

export default Hydration