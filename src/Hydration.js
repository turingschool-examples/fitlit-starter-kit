import * as dayjs from 'dayjs'
class Hydration {
  constructor(data) {
    this.data = data
      .map((water) => {
        water.date = dayjs(water.date, 'YYYY/MM/DD')
        return water
      })
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

  findWeeklyHydration() {
    return this.data.map(water => water.numOunces).slice(0,7)
  }

  sortData() {
    this.data = this.data
      .sort((a,b) => a.date - b.date)
    this.data.map((water) => {
      water.date = dayjs(water.date, 'YYYY/MM/D').format('YYYY/MM/DD')
      return water
    })
  }
}

export default Hydration;