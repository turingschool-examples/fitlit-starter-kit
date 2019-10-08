// For a user (identified by their userID -
// this is the same for all methods requiring a specific user’s data),
// the average fluid ounces consumed per day for all time
// For a user, how many fluid ounces they consumed for a specific day
//  (identified by a date)
// For a user, how many fluid ounces of water consumed each day
// over the course of a week (7 days) - return the amount for each day
//
// Class UserHydration - gets and measures hydration for single user
// Instance properties:
//   userData
//   hydrationData
//
//
// Methods:
//   avgUserFluidOncesDateAllTime()
//   userOuncesByDate()
//   userOuncesByWeek()

class UserHydration {
  constructor(user) {
  this.user = user;
  this.filteredHydration = this.hydrationDataFilter()
  }

  hydrationDataFilter() {
    let hydrationDataFilter = hydrationData.filter(hydrationObject => {
      return hydrationObject.userID === this.user.id;
    })
    return hydrationDataFilter
  }

  avgUserFluidOncesDateAllTime() {

    let avg = this.filteredHydration.reduce((avg, hydrationUserArr) => {
      return avg += hydrationUserArr.numOunces;
    }, 0)

    return parseFloat((avg / this.filteredHydration.length).toFixed(2));
  }

  userOuncesByDate(date) {


    let ouncesByDate = this.filteredHydration.find(hydrationObject => {
      return hydrationObject.date === date;
    })

    return ouncesByDate.numOunces;
  }

  userOuncesByWeek() {
    return this.filteredHydration.slice(-7).map(hydrationObject => hydrationObject.numOunces)
  }
}

if (typeof module !== 'undefined') {
module.exports = UserHydration;
}
