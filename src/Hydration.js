class Hydration {
  constructor(hydrationData, id) {
    this.hydrationData = hydrationData;
    this.id = id;
  }

  findOneDayHydration() {
    return this.hydrationData.filter(user => user.userID === this.id);
    console.log("WHAT", findOneDayHydration())
  }

// calcAverageOunces(id) {
//   let perDayHydrationData = this.hydrationData.filter((data) => id === data.userID)
//   console.log("LOOOOOOOK", perDayHydrationData);
//   let perDay =
// }
}
  // Create classes and methods that can calculate:

// For a user (identified by their userID - this is the same for all methods
// requiring a specific user’s data), the average fluid ounces consumed per day
// for all time
// For a user, how many fluid ounces they consumed for a specific day
// (identified by a date)
// For a user, how many fluid ounces of water consumed each day over the course
// of a week (7 days) - return the amount for each day
// You have to decide which classes should contain each method. Think about
// whose responsibility it is to own the method.

export default Hydration;
