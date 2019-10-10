class Hydration {
    constructor(hydrationData, userId) {
      this.currentHydrationData = hydrationData;
      this.userID = userId;
      this.currentUserHydrationData;
    }

    findCurrentUserHydrationData() {
      this.currentUserHydrationData = this.currentHydrationData.filter((userInfo) => userInfo.userID === this.userID);
      return this.currentUserHydrationData;
    }

    calculateAvgDailyAmtDrankByUserIdAllTime(id) {
      let weekHydrationData = this.currentHydrationData.filter(user => {
        return user.userID === id
      });
      let avgOunces = weekHydrationData.reduce((acc, day) => {
        acc += day.numOunces;
        return acc
      }, 0)/weekHydrationData.length;

      return Math.round(avgOunces)
    }

    calculateAmtDrankByUserSpecificDate(id, date) {
      const userOnSpecificDate = this.currentHydrationData.find(user => {
        return (user.userID === id && user.date === date)
      });

      return userOnSpecificDate.numOunces
    }

    returnDrinkAmtEachDayOverWeekByUser(id) {
      let weekHydrationData = this.currentHydrationData.filter(user => {
        return user.userID === id
      });

      let sevenDayData = weekHydrationData.map(day => {
        return day.numOunces
      });
      return sevenDayData.slice(-7)
    }
}

if (typeof module !== 'undefined') {
    module.exports = Hydration;
  };
