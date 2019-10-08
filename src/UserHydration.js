class UserHydration {
  constructor(user, hydrationData) {
  this.user = user;
  this.hydrationData = hydrationData;
  this.filteredHydration = this.hydrationDataFilter();
  }

  hydrationDataFilter() {
    let hydrationDataFilter = this.hydrationData.filter(hydrationObject => {
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
