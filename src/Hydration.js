class Hydration {
  constructor(id, data) {
    this.id = id;
    this.hydrationData = data.filter(userData => userData.id === this.id);
  }

  calculateDailyWater(id) {
    console.log("hydrationData >>>", this.hydrationData);
    // need to grab the id out of the hydration data objects; there will be many
    // use .filter to search through by idea
    // need to get the out first? probably.. think I need to add a method for this? the id will need to be reused
  }
}

if (typeof module !== "undefined") {
  module.exports = Hydration;
}
