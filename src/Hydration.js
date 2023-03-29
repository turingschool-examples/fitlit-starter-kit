class Hydration {
  constructor(data) {
    this.data = data;
  }
  // acc = total currentValue = water
  findAvgDailyHydration(userID) {
    const userHydrationData = this.data.filter(water => water.userID === userID);
    if (userHydrationData.length === 0) {
      return 'No User Found';
    }
    const dailyAvg = userHydrationData.reduce((total, water) => {
      total.ounces += water.numOunces;
      total.count += 1;
      return total;
    }, { ounces: 0, count: 0 });
    return Math.round(dailyAvg.ounces / dailyAvg.count);
  }

  getHydrationSpecificDay(date) {
    const userHydrationData = this.data.filter(specficDate => specficDate.date === date);
    if (userHydrationData.length === 0) {
      return `No hydration data on ${date}`
    }
    const consumptionByDate = this.data.find(specficDate => specficDate.date === date);
    return consumptionByDate.numOunces
  }

  findWeeklyHydration(date) {
    const hydrationData = this.data.filter(data => data.date >= date);
    const weekData = hydrationData.slice(0, Math.min(hydrationData.length,7));
    return weekData.map(data => data.numOunces);
  }
}

export default Hydration;