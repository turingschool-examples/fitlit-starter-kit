class Hydration {
  constructor(userRepo) {
    this.userId = userRepo.currentUserId;
    this.date = userRepo.day;
    this.numOunces = null;
  }

  calcAvgFluidConsumption(hydrationData) {
    const userOunces = hydrationData.reduce((acc, indHydro) => {
      if (indHydro.currentUserId === this.userId) {
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
      return hydro.currentUserId === this.userId && hydro.day === this.date;
    }).numOunces;
  }

  findWeeksFluid(hydrationData) {
    let userWater = hydrationData.filter(hydro => hydro.currentUserId === this.userId);
    let lastDay = userWater.find(hydro => hydro.day === this.date);
    let lastDayIndex = userWater.indexOf(lastDay);
    let weekWater = userWater.slice(lastDayIndex - 6, lastDayIndex + 1);
    return weekWater;
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
