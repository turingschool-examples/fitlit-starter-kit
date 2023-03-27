class Hydration {
  constructor(hydrationData) {
    this.id = hydrationData.userID;
    this.date = hydrationData.date;
    this.ounces = hydrationData.numOunces;
  }

}

export default Hydration;