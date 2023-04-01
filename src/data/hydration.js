class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  };
  
  getAverageOunces(userID) {
    const hydrationEntries = this.hydrationData.filter(hydrationEntry => hydrationEntry.userID === userID);
    const averageOunces = hydrationEntries.reduce((acc, user) => {
      return acc += user.numOunces
    }, 0);
    return Math.round(averageOunces/hydrationEntries.length);
  };

  getDailyOunces(userID, date) {
    const hydrationEntries = this.hydrationData.filter(hydrationEntry => hydrationEntry.userID === userID);
    const dailyEntry = hydrationEntries.find(entry => {
      return entry.date === date ;
    });
    return dailyEntry.numOunces
  };

  getWeeklyOunces(userID, date) {
    const hydrationEntries = this.hydrationData.filter(hydrationEntry => hydrationEntry.userID === userID);
    const indexOfCurrentDayEntry = hydrationEntries.indexOf(hydrationEntries.find(entry => entry.date === date))
   
    let weeklyOunces = [];
    for (let i = indexOfCurrentDayEntry; i > indexOfCurrentDayEntry - 7; i--) {
      weeklyOunces.push(hydrationEntries[i]);
    };

    const weeklyHydrationData = weeklyOunces.map(entry => ({
      date: entry.date, 
      numOunces: entry.numOunces + ' ounces drank',
      }));
    return weeklyHydrationData;
  };
};

export default Hydration;