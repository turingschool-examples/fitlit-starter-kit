import hydrationData from "./data/hydration";

class Hydration {
  constructor(data) {
    this.data = data;
  }
  checkID(id) {
    if(!this.data.find((user) => user.id === id)) {
      return 'User Not Found'
    }
  }

  calcAvgWaterConsumption(id) {
    const result = this.data
      .reduce(
        (total, waterLog) => {
          if(waterLog.userID === id) {
            total.ounces += waterLog.numOunces
            total.count +=1
            return total 
          }
          return total
  },{ounces: 0, count: 0});
    return Math.round(result.ounces / result.count);
  }

  consumeBydate(id, date) {
    return this.data.find(
      (waterLog) => waterLog.userID === id && waterLog.date === date
    ).numOunces;
  }

  returnWeeklyWaterConsumption(id, date) {
    const userData = this.data.filter((waterLog) => waterLog.userID === id);
    const ounces = userData.map((el) => el.numOunces);
    const dates = userData.map((el) => el.date);
    const index = userData.findIndex(
      (el) => el.date === date && el.userID === id
    );
    if (!ounces[index + 6]) {
      return {
        count: ounces.slice(-7),
        label: "Water Consumption",
        dates: dates.slice(-7),
      };
    }
    return {
      count: ounces.slice(index, index + 7),
      label: "Water Consumption",
      dates: dates.slice(index, index + 7),
    };
  }
}

export default Hydration;
