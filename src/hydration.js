class Hydration {
  constructor(id) {
    this.userID = id;
  }
  calculateAvgOunces(id, hydrationData) {
    let ozDrank = 0;
    let days = 0;
    hydrationData.forEach(function(elem) {
      if (elem.userID === id) {
        ozDrank = ozDrank += elem.numOunces;
        days++;
      }
    });
    return Math.floor(ozDrank / days);
  }
}

 if (typeof module !== 'undefined') {
   module.exports = Hydration;
 }
