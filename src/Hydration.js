class Hydration {
  constructor(hydrationData) {
   this.hydrationData = hydrationData
    // this.userID = hydrationData.userID;
    // this.date = hydrationData.date;
    // this.numOunces = hydrationData.numOunces;
  
  }

    findUserDataID(id) {
      const singleHydrationData = this.hydrationData.filter(hydrationObj => hydrationObj.userID === id);
      return singleHydrationData;
    };
      

    usersDailyOunces(id) {
      let userHydration = findUserDataID(id)
      let sumOfOunces = 0;
      const dailyOunces = userHydrationData.forEach(ounce => sum += ounce.numOunces);
      console.log('sum', sum)
      return (sumOfOunces / userHydration.length).toFixed(2)
    }

    weeklyOunces(waterArray) {
      const hydrationDate = waterArray.filter(hydrationObj => hydrationObj.date === date);
    console.log('hydration dates?',hydrationDate)
      return hydrationDate
    
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
