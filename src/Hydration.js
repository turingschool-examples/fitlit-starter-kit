class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

findAUser(id) {
  return this.hydrationData.filter(aUser => aUser.userID === id)

}

calcAverageOunces(id) {
  let totalOunces = 0
  let perDayHydration = this.hydrationData.filter((data) => id === data.userID)
  perDayHydration.forEach((hydration) => (totalOunces += hydration.numOunces));
  let avgOunces = totalOunces/perDayHydration.length
  return avgOunces;
}

findByDate(dateSelected) {
return this.hydrationData.find(data => data.date === dateSelected).numOunces;
}

selectWeek(id) {
  let user = this.findAUser(id)
  return user.slice(-7);
}

findWeeklyOunces() {
  this.selectWeek()
  let displaySevenDays = []
  this.hydrationData.forEach((day) => {
  displaySevenDays.push(day.numOunces);
  });

  // this.hydrationData.filter((day) => day.numOunces)
  // .forEach((day) => displaySevenDays.push(day.numOunces));
  console.log('>>>>>>', displaySevenDays);
  return displaySevenDays;
}
}
  // Create classes and methods that can calculate:

// For a user (identified by their userID - this is the same for all methods
// requiring a specific user’s data), the average fluid ounces consumed per day
// for all time

// For a user, how many fluid ounces of water consumed each day over the course
// of a week (7 days) - return the amount for each day


export default Hydration;
