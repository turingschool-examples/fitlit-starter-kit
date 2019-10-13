class Hydration {
  constructor(userRepo) {
    this.userId = userRepo.currentUserId;
    this.date = userRepo.day;
    this.numOunces = null;
  }

  calcAvgFluidConsumption(id, hydrationData) {
    const userOunces = hydrationData.reduce((acc, indHydro) => {
      if (indHydro.userID === id) {
        acc.push(indHydro.numOunces);
      }
      return acc;
    }, []);
    let totalOunces = 0;
    userOunces.forEach(dayOunces => totalOunces += dayOunces);
    return (totalOunces / userOunces.length);
  }

  findDayFluid(hydrationData) {
    this.numOunces = hydrationData.find(hydro => {
      return hydro.userID === this.userId && hydro.date === this.date;
    })
  }

  findWeeksFluid() {
    // gets array of last 7 days starting with a date, and then subtracting 7, and returns drink amounts for each day element as a collective array.
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
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
