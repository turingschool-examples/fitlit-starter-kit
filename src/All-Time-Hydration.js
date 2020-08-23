class AllTimeHydration {
  constructor() {

  }
  returnAllTimeHydration(hydrationData, id){
    return hydrationData.filter(dailyHydration => dailyHydration.userID === id);
  }
}


if (typeof module !== 'undefined') {
  module.exports = AllTimeHydration;
}
