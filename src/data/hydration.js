import hydrationTestData from '../../test/hydration-test-data';

class Hydration {
  constructor(hydrationInfo) {
    this.userID = hydrationInfo.userID;
    this.date = hydrationInfo.date;
    this.numOunces = hydrationInfo.numOunces;
  };
  
  getAverageOunces(userID) {
    const hydrationEntries = hydrationTestData.filter(hydrationEntry => hydrationEntry.userID === userID);

    const averageOunces = hydrationEntries.reduce((acc, user) => {
      return acc += user.numOunces
    }, 0);
    return Math.round(averageOunces/hydrationEntries.length);
  };

  getDailyOunces(userID, date) {
    const hydrationEntries = hydrationTestData.filter(hydrationEntry => hydrationEntry.userID === userID);

    const dailyEntry = hydrationEntries.find(entry => {
      return entry.date === date 
    });
    return dailyEntry.numOunces
  };

  getWeeklyOunces(userID) {
    const hydrationEntries = hydrationTestData.filter(hydrationEntry => hydrationEntry.userID === userID);
    const reverse = hydrationEntries.reverse()

    const weeklyHydrationEntries = [
      reverse[0], 
      reverse[1], 
      reverse[2], 
      reverse[3], 
      reverse[4], 
      reverse[5], 
      reverse[6]
    ];
    

    const weeklyOunces = weeklyHydrationEntries.map(entry => ({
      'Date': entry.date,
      'Number of Ounces Drank': entry.numOunces
    }))
    
    return weeklyOunces;
  };
};

export default Hydration;