class Hydration {
  constructor(usersRepository, hydrationDataSet) {
    this.userID = usersRepository.id;
    this.userHydrationData = hydrationDataSet;
  }

  calculateAverageFluidIntakeForUser() {
    let userOunceIntakes = [];

    this.userHydrationData.filter(hydrationData => {
      if (hydrationData.userID === this.userID) {
        userOunceIntakes.push(hydrationData.numOunces);
      }
    })

    let totalOunces = userOunceIntakes.reduce((acc, ounce) => {
      acc += ounce;
      return acc;
    }, 0)

    return Math.trunc(totalOunces / userOunceIntakes.length);
  }

  calculateFluidIntakeForDay(date) {
    let userHydrationData = this.userHydrationData.filter(hydrationData =>
      hydrationData.userID === this.userID)
      .find(hydrationData => hydrationData.date === date);

    return userHydrationData.numOunces;
  }

  calculateDailyIntakeForWeek(dateRange) {
    let userWeekIntake = [];
    let userHydrationData = this.userHydrationData.filter(hydrationData =>
      hydrationData.userID === this.userID);

    dateRange.forEach(date => {
      userHydrationData.map(data => {
        if (date === data.date) {
          userWeekIntake.push({date: data.date, intake: data.numOunces});
        }
      })
    })

    return userWeekIntake;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
