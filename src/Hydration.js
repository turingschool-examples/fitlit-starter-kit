import User from '../src/user';


class Hydration {
    constructor(hydrationData) {
      console.log(hydrationData)
      this.currentUser = hydrationData.userID;
      this.date = hydrationData.date;
      this.ounces = hydrationData.numOunces

      

    }
    getAverageOunces(userData) {
      const avgOunces = userData.forEach(day => {
        
      });

    }
}

export default Hydration