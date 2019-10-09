class Hydration {
    constructor(hydrationData, userId) {
      this.currentHydrationData = hydrationData;
      this.userID = userId;
      this.date = hydrationData.date;
      this.numOunces = hydrationData.numOunces;
    }

    calculateAvgDailyAmtDrankByUserIdAllTime(id) {
      const weekHydrationData = this.currentHydrationData.filter(user => {
        return user.userID === id
      });

      let avgOunces = weekHydrationData.reduce((acc, day) => {
        acc += day.numOunces;
        return acc
      }, 0)/weekHydrationData.length;
      return Math.round(avgOunces)
    }

    calculateAmtDrankByUserSpecificDate() {

    }

    returnDrinkAmtEachDayOverWeekByUser() {

    }
}

if (typeof module !== 'undefined') {
    module.exports = Hydration;
  };
