class Hydration {
  constructor(hydrationData, id) {
    this.hydrationData = hydrationData;
    this.id = id;
  }

  // findOneDayHydration() {
  //   return this.hydrationData.filter((data) => id === data.userID);
  // }

calcAverageOunces(id) {
  let perDayHydrationData = this.hydrationData.filter((data) => id === data.userID)
  console.log("LOOOOOOOK", perDayHydrationData);
  let perDay =
}

findByDate() {

}

findWeeklyOunces() {
// needs  to be an array displaying 7 days of info  
}
}
  // Create classes and methods that can calculate:

// For a user (identified by their userID - this is the same for all methods
// requiring a specific user’s data), the average fluid ounces consumed per day
// for all time
// For a user, how many fluid ounces they consumed for a specific day
// (identified by a date)
// For a user, how many fluid ounces of water consumed each day over the course
// of a week (7 days) - return the amount for each day


export default Hydration;
