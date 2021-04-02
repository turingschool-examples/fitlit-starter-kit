class Hydration {
  constructor(id, data) {
    this.id = id;
    this.hydrationData = data.filter(dataPoint => dataPoint.userID === this.id);
  }

  calculateDailyWater() {
    // const totalOz = this.hydrationData.filter(dataPoint => {
    //   let ozPerDay = dataPoint.numOunces;
    //   console.log(ozPerDay);
    // });
    const totalOzDrank = this.hydrationData.reduce((total, num) => {
      return total +num.numOunces;
    }, 0);
    const totalDays = this.hydrationData.length;
    const avgOzDrank = totalOzDrank / totalDays;
    return avgOzDrank;
  }
}

if (typeof module !== "undefined") {
  module.exports = Hydration;
}
