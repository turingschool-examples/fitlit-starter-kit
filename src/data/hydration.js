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
};




export default Hydration;