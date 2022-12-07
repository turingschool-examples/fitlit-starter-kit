class Hydration {
  constructor(currentUser, data) {
    this.userHydrationInfo = data.hydrationData.filter(
      (day) => day.userID === currentUser.id
    );
  }
  givenDayHydration(date) {
    return this.userHydrationInfo.find((hydration) => hydration.date === date)
      .numOunces;
  }
  weekHydration() {
    return this.userHydrationInfo
      .slice(-7)
      .map((day) => (day = { date: day.date, numOunces: day.numOunces }));
  }
}

export default Hydration;
