class Hydration {
  constructor(data) {
    this.data = data;
  }
  calcAvgWaterConsumption(id) {
    const result = this.data
      .filter((waterLog) => waterLog.userID === id)
      .reduce(
        (total, waterLog, _, arr) => total + waterLog.numOunces / arr.length,
        0
      );
    return Math.round(result);
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
