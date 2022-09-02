class Hydration {
  constructor(hydrationData) {
   this.hydrationData = hydrationData
  }

    findUserDataID(id) {
      const singleHydrationData = this.hydrationData.filter(hydrationObj => hydrationObj.userID === id);
      return singleHydrationData;
    };
      

    usersDailyOunces(id) {
      let userHydroOunces = this.findUserDataID(id);
      const ouncesByDate = userHydroOunces.map((userDate) => userDate.date).pop();
      const todayOunces = userHydroOunces.find((HydroObj) => HydroObj.date === ouncesByDate)
      return todayOunces.numOunces;
    }

  getOuncesPerWeek(id, date) {
    let userHydroData = this.findUserDataID(id);
    const userHydroDates = userHydroData.map(userHydro => userHydro.date);
    const userIndexOfDate = userHydroDates.indexOf(date);
    const userSevenDays = userHydroData.slice(userIndexOfDate - 6, userIndexOfDate + 1)
    const usersAvgHydro = userSevenDays.reduce((avgHydro, userHydro) => {
      avgHydro += userHydro.numOunces / 7;
      return avgHydro;
    }, 0)

    return usersAvgHydro.toFixed(1);
  }
  getLifeTimeOunces() {
   
    let lifetimeOunces  = this.hydrationData.reduce((avg, userOunces) => {
      avg += userOunces.numOunces / this.hydrationData.length
      return avg;
    }, 0)
    return lifetimeOunces.toFixed(1);
  }
  }







export default Hydration;
