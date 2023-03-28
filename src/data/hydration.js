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

    const weeklyHydrationEntries = [
      hydrationEntries[hydrationEntries.length - 1], 
      hydrationEntries[hydrationEntries.length - 2], 
      hydrationEntries[hydrationEntries.length - 3], 
      hydrationEntries[hydrationEntries.length - 4], 
      hydrationEntries[hydrationEntries.length - 5], 
      hydrationEntries[hydrationEntries.length - 6], 
      hydrationEntries[hydrationEntries.length - 7]
    ];
 
    const weeklyOunces = weeklyHydrationEntries.reduce((acc, entry) => {
        const weeklyInfo = {
        'Date': entry.date,
        'Number of Ounces Drank': entry.numOunces
      };
      acc.push(weeklyInfo);
      return acc;
    }, []);
    return weeklyOunces;
  };
};

export default Hydration;