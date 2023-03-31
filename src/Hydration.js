import * as dayjs from 'dayjs'
class Hydration {
  constructor(data) {
    this.data = data
      .map((water) => {
        water.date = dayjs(water.date, 'YYYY/MM/DD')
        .format('YYYY/MM/DD')
        return water;
      });
  }
  
  findAvgDailyHydration() {
    if (this.data.length === 0) {
      return 'No Hydration Data Found';
    }
    const dailyAvg = this.data.reduce((total, water) => {
      total.ounces += water.numOunces;
      total.count += 1;
      return total;
    }, { ounces: 0, count: 0 });
    return Math.round(dailyAvg.ounces / dailyAvg.count);
  }

  getHydrationSpecificDay(date) {
    if (this.data.length === 0) {
      return 'No Hydration Data Found';
    }
    const consumptionByDate = this.data.find(specficDate => specficDate.date === date);
    return consumptionByDate.numOunces;
  }

  findWeeklyHydration() {
    return this.data.map(water => water.numOunces).slice(0,7);
  }
}

export default Hydration;