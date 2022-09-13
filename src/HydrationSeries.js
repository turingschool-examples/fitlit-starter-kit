class HydrationSeries {
    constructor(userHydrationData) {
      this.data = userHydrationData || [];
    }
  
calAverageFluid() {
    const average = this.data.reduce((acc, fluid) => {
      acc += fluid.numOunces;
      return acc;
    }, 0);
    return Math.round(average / this.data.length);
  }

  getDayFluid(date) {
    const userDayFluids = this.data.filter((entry) => entry.date === date)
    const sum = userDayFluids.reduce((acc, fluids) => {
      acc += fluids.numOunces;
      return acc;
    }, 0);
    return sum;
  }

  getWeeklyFluids(endDate) {
    const endDateObj = new Date(endDate);
    const dayDate = new Date(endDate);
    dayDate.setDate(endDateObj.getDate() - 7);
    let weeklyFluids = [{}, {}, {}, {}, {}, {}, {}];
    let index = 0;
    weeklyFluids.forEach((emptyFluid) => {
      dayDate.setDate(dayDate.getDate() + 1);
      let entryDate = `${dayDate.getFullYear()}/${String(
        dayDate.getMonth() + 1
      ).padStart(2, "0")}/${String(dayDate.getDate()).padStart(2, "0")}`;
      let fluidEntry = this.data.find((entry) => entry.date === entryDate);
      if (fluidEntry) {
        weeklyFluids[index] = { date: entryDate, numOunces: fluidEntry.numOunces};
      } else {
        weeklyFluids[index] = { date: entryDate, numOunces: 0.0 };
      }
      index++;
    })
    return weeklyFluids;
  }
}

export default HydrationSeries;