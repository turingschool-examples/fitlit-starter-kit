const Hydration = require('../src/Hydration');

class HydrationRepository {
  constructor(filepathway, userId) {
    this.filepathway = filepathway;
    this.userHydrationData = new Hydration(this.returnHydrationData(userId));
  }

  returnHydrationData(userId) {
    return this.filepathway.find(hydrationData => hydrationData.userID == userId);
  }

  aveOuncesEveryDay() {

  }

}

module.exports = HydrationRepository;