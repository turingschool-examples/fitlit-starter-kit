class SleepRepo {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  getSleepById(id) {
    return this.sleepData.filter(sleep => sleep.userID === id);
  }

  // calculateAvgOuncesPerDay(id) {
  //   let userHydrationData = this.getHydrationById(id);
  //   let totalUserOunces = userHydrationData.reduce((sum, hydration) => {
  //     sum += hydration.numOunces;
  //     return sum;
  //   }, 0);
  //   let roundedOunces = Math.round(totalUserOunces / userHydrationData.length);
  //   return roundedOunces;
  // }
}

export default SleepRepo;
