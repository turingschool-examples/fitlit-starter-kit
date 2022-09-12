class Hydration {
  constructor(userId, hydrationData) {
    this.id = userId;
    this.ounces = hydrationData.filter(data => data.userID === userId); 
    this.hydrationData = hydrationData;
  };
  
  ouncesPerDay(date) {
    const dailyOunces = this.ounces.find(entry => entry.date === date);

    return dailyOunces.numOunces;
  };

  getDailyOuncesByWeek(date1, date2) {
    const weekOunces = this.ounces.slice(date1, date2);

    return weekOunces.map(day => day.numOunces);
  };
  
  getAvgOunces() {
    const totalOunces = this.ounces.reduce((acc, entry) => {
      return acc += entry.numOunces;      
    }, 0);

    return Math.round(totalOunces / this.ounces.length);
  };
};

export default Hydration