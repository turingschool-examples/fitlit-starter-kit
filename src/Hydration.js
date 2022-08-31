class Hydration {
  constructor(hydrationData,) {
    this.userID = hydrationData.userID;
    this.date = hydrationData.date;
    this.numOunces = hydrationData.numOunces;
  }

    findUserDataID(waterArray,id) {
      const singleHydrationData = waterArray.filter(hydrationObj => hydrationObj.userID === id);
      if (singleHydrationData.length === 0) {
        return "Invalid user ID. Please verify user ID and try again."
      }
      console.log(singleHydrationData)
      return singleHydrationData[0].userID
    };
      

    usersDailyOunces(id) {
      let userHydration = findUserDataID(id)
      let sumOfOunces = 0;
      const dailyOunces = userHydrationData.forEach(ounce => sum += ounce.numOunces);
      console.log('sum', sum)
      return (sumOfOunces / userHydration.length).toFixed(2)
    }
}

// userAverageOunces(waterArray, id) {
//         let currentUser = this.getUserHydration(waterArray, id)
//         let totalAmount = currentUser.reduce((totalOz, dayOz) => {
//             totalOz += dayOz.numOunces;
//             return totalOz;
//         }, 0);
//         let totalAverage = parseFloat((totalAmount / currentUser.length).toFixed(0));
//         return totalAverage
//     }



export default Hydration;
