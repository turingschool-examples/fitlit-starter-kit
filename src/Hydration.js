class Hydration {
  constructor() {

  }
  returnAllTimeHydration(hydrationData, id){
    return hydrationData.filter(dailyHydration => dailyHydration.userID === id);
  }
}


if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
