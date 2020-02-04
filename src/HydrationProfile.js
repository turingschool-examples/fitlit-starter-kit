class HydrationProfile {
  constructor(udserID) {
//entries
  }

  calculateAllTimeOzAvg() {
// Create an array of all of the ounces and reduce that to calculate avg
  }

  findOzConsumed(date) {
// Filter entries array for specific date
// Reduce those ounces to one return value
  }

  calculateWeekAvg(startDate) {
// Filter for date startDate < x < startDate + 7 (a week later)
// Reduce to get avg
  }
}

if (typeof module !== 'undefined') {
  module.exports = HydrationProfile;
}
