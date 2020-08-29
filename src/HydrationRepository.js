class HydrationRepository {
  constructor(hydrationSet) {
    this.hydrationSet = hydrationSet
  }
  userHydrationData(id) {
    return this.hydrationSet.filter(dailyHydration => dailyHydration.userID === id);

  }
  averageAllTimeOunces(id) {
    //change getUserData
    let getUserData = this.userHydrationData(id)
    let allTimeOunces = getUserData.reduce((ounces, day) =>{
      ounces += day.numOunces;
      return ounces
    }, 0)
    return Math.round(allTimeOunces / getUserData.length);
  }
  dayOunces(dateSelected, id) {
    console.log(id)
    return this.hydrationSet.find(day => day.date === dateSelected && day.userID === id).numOunces;
  }
  dailyOuncesPerGivenWeek(startDate) {
    let startingDate = this.hydrationSet.find(day => day.date === startDate);
    let firstDay = this.hydrationSet.indexOf(startingDate);
    return this.hydrationSet.slice(firstDay, firstDay + 7).map(day => day.numOunces)
  }

}
if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}
