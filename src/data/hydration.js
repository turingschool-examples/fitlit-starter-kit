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

  getWeeklyOunces(userID) {
    let date = new Date();
    let currentDate = date.getFullYear() + "/" + ("0" + (date.getMonth()+1)).slice(-2) + "/"+ ("0" + date.getDate()).slice(-2);
    const hydrationEntries = this.hydrationData.filter(hydrationEntry => hydrationEntry.userID === userID);
   
    const indexOfCurrentDayEntry = hydrationEntries.indexOf(hydrationEntries.find(entry => entry.date === currentDate))
   
    let weeklyOunces = [];
    for (let i = indexOfCurrentDayEntry; i > indexOfCurrentDayEntry - 7; i--) {
      weeklyOunces.push(`${hydrationEntries[i].date}: ${hydrationEntries[i].numOunces}  ounces
      `)
    }

    return weeklyOunces;
  };
};

export default Hydration;