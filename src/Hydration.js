class Hydration {
   constructor(hydrationData) {
     this.userID = hydrationData.userID;
     this.date = hydrationData.date;
     this.numOunces = hydrationData.numOunces;
   }

   returnNumOunces() {
     return this.numOunces;
   }

 }

 if (typeof module !== 'undefined') {
   module.exports = Hydration;
 }
