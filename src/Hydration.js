class Hydration {
  constructor(userId, hydrationData) {
    this.id = userId;
    this.ounces = hydrationData.filter((data) => data.userID === userId);
    this.hydrationData = hydrationData;
  };
  
  ouncesPerDay(date) {
    const dailyOunces = this.ounces.find(entry => entry.date === date);

    if (dailyOunces) {
    return dailyOunces.numOunces;
    } else {
      return 'This date could not be found.';
    }
  };

  getDailyOuncesByWeek(date) {
    const start = this.ounces.findIndex((data) => data.date === date);
    const week = this.ounces
      .slice(start, start + 7)
      .map((entry) => {
        return {
          date: entry.date,
          numOunces: entry.numOunces,
          
        };
      })
      .filter((entry) => {
        const getEachDate = entry.date.split('/');
        const chosenDate = date.split('/');

        if (
          getEachDate[0] === chosenDate[0] &&
          getEachDate[1] === chosenDate[1]
        ) {
          
          return entry;
        }
      });
      return week;
  };

  getAvgOunces() {
    const totalOunces = this.ounces.reduce((acc, entry) => {
      return (acc += entry.numOunces);
    }, 0);

    return Math.round(totalOunces / this.ounces.length);
  }
}

export default Hydration;
