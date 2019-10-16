class Hydration {
  constructor(hydrationData, userId) {
    this.currentHydrationData = hydrationData;
    this.userID = userId;
    this.currentUserHydrationData;
  }

  findCurrentUserHydrationData() {
    this.currentUserHydrationData = this.currentHydrationData.filter((userInfo) =>
      userInfo.userID === this.userID);
      return this.currentUserHydrationData;
  }

  calculateAvgDailyAmtDrankByUserIdAllTime() {
    let avgOunces = this.currentUserHydrationData.reduce((acc, day) => {
      acc += day.numOunces;
      return acc
    }, 0) / this.currentUserHydrationData.length;

      return Math.round(avgOunces)
  }

  calculateAmtDrankByUserSpecificDate(date) {
    const userOnSpecificDate = this.currentUserHydrationData.find(user => {
      return (user.date === date)
    });

    return userOnSpecificDate.numOunces
  }

  returnDrinkAmtEachDayOverWeekByUser() {
    let sevenDayData = this.currentUserHydrationData.map(day => {
      return day.numOunces
    });
    
    return sevenDayData.slice(-7)
  }
}

if (typeof module !== 'undefined') {
    module.exports = Hydration;
  }
