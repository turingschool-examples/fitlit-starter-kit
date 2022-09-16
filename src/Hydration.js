class Hydration {
  constructor(userId, hydrationData) {
    this.id = userId;
    this.ounces = hydrationData.filter((data) => data.userID === userId);
    this.hydrationData = hydrationData;
  };
  
  ouncesPerDay(date) {
    const dailyOunces = this.ounces.find(entry => entry.date === date);

    return dailyOunces.numOunces;
  };

  getDailyOuncesByWeek(minDate) {
    const start = this.ounces.findIndex((data) => data.date === minDate);
    const weekOunces = this.ounces
      .slice(start, start + 7)
      .map((day) => day.numOunces);

    return weekOunces;
  }

  getAvgOunces() {
    const totalOunces = this.ounces.reduce((acc, entry) => {
      return (acc += entry.numOunces);
    }, 0);

    return Math.round(totalOunces / this.ounces.length);
  }
}

export default Hydration;
