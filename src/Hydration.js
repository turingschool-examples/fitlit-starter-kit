class Hydration {
  constructor({ userID, date, numOunces }) {
    this.userId = userID;
    this.date = date;
    this.numOunces = numOunces;
  }

  // let { userID, date, numOunces } = data;

  calcAvgFluidConsumption(id) {
    // take all similar Id's as array, calculates average per day for one user for all time.
  }

  findDayFluid(id, date) {
    // takes Id and date, return fluids drank.
  }

  findWeeksFluid() {
    // gets array of last 7 days starting with a date, and then subtracting 7, and returns drink amounts for each day element as a collective array.
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}



// function showHydration() {
//   console.log(hydrationData, "this is hydro")
//   const currentHydration = hydrationData.find(hydro => {
//     console.log(hydro.userID, user.id, hydro.userID === user.id)
//     return hydro.userID === user.id
//   })
//   console.log(currentHydration);
//   $('.current-hydro').text('POOOOOOOOOOP')
// }
