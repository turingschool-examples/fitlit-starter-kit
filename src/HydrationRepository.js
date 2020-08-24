class HydrationRepository {
  constructor() {
    this.userHydration;
  }
  userHydrationData(hydrationData, id) {
    this.userHydration = hydrationData.filter(dailyHydration => dailyHydration.userID === id);
    return this.userHydration;
  }
  averageAllTimeOunces() {
    let allTimeOunces = this.userHydration.reduce((ounces, day) =>{
      ounces += day.numOunces;
      return ounces 
    }, 0)
    return Math.round(allTimeOunces / this.userHydration.length);
  }
  dayOunces(dateSelected) {
    return this.userHydration.find(day => day.date === dateSelected).numOunces;
  }
  dailyOuncesPerGivenWeek(startDate) {         
    let startingDate = this.userHydration.find(day => day.date === startDate);
    let firstDay = this.userHydration.indexOf(startingDate);
    return this.userHydration.slice(firstDay, firstDay + 7).map(day => day.numOunces)
  }

}
if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}
  