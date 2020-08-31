class HydrationRepository {
  constructor(hydrationSet) {
    this.hydrationSet = hydrationSet
  }
  userHydrationData(id) {
    return this.hydrationSet.filter(dailyHydration => dailyHydration.userID === id);
  }
  averageAllTimeOunces(id) {
    let userHydration = this.userHydrationData(id)
    let allTimeOunces = userHydration.reduce((ounces, day) =>{
      ounces += day.numOunces;
      return ounces
    }, 0)
    return Math.round(allTimeOunces / userHydration.length);
  }
  dayOunces(dateSelected, id) {
    return this.hydrationSet.find(day => day.date === dateSelected && day.userID === id).numOunces;
  }
  dailyOuncesPerGivenWeek(startDate, id) {
    let allUserHydrationData = this.userHydrationData(id);
    let startingDate = this.hydrationSet.find(day => day.date === startDate);
    let firstDay = this.hydrationSet.indexOf(startingDate);
    return allUserHydrationData.slice(firstDay, firstDay + 7).map(day => ({date: day.date, ounces: day.numOunces}))
  }
}
if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}
