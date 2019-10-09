class Hydration {
  constructor(id) {
    this.userID = id;
  }
  calculateAvgOunces(id, hydrationData) {
    let ozDrank;
    let days;
    hydrationData.forEach(function(elem) {
      if (elem.id === id) {
        ozDrank = ozDrank + elem.numOunces;
        days++;
      }
    return Math.floor(ozDrank / days);
  });
  }
}

 if (typeof module !== 'undefined') {
   module.exports = Hydration;
 }
