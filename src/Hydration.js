import hydrationData from "./data/hydration-data"

class Hydration {
  constructor(id, hydrationData) {
    this.userID = id;
    this.userHydrateData = this.setUserHydrateData(hydrationData);
    this.date = hydrationData[0].date;
    this.numOunces = hydrationData[0].numOunces;
    this.data = hydrationData;
  };

  setUserHydrateData (hydrationData) {
    const userHydrate = hydrationData.filter(userHydrateData => {
      if(userHydrateData.userID === this.userID) {
        return userHydrateData;
      }
    });
    userHydrate.reverse();
    return userHydrate;
  };
  returnDailyHydrateAvg() {
    const hydrationPerDay = this.data.map(hydration => {
      return hydration.numOunces
    })
    const hydrationAvgPerDay = hydrationPerDay.reduce((totalOunces, currentOunces) => {
      return totalOunces + currentOunces
    }, 0)
    return Math.round(hydrationAvgPerDay / this.data.length)
  };
  returnOuncesByDate(thisDate) {
    const ounceByDate = this.userHydrateData.find(({date}) => date === thisDate)
    return ounceByDate.numOunces
  };
  returnOuncesByWeek(date) {
    const startDate = this.userHydrateData.findIndex(currentDate => {
      return currentDate.date === date
    });
    const weekData = this.userHydrateData.slice(startDate, startDate + 7).reverse();
    let weeklyIntake = {
      date: [],
      numOunces: []
    };
    weeklyIntake.date = weekData.map(date => date.date);
    weeklyIntake.numOunces = weekData.map(date => date.numOunces);
    return weeklyIntake;
  };
}
export default Hydration