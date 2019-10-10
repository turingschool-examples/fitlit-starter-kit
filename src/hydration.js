class Hydration {
  constructor(id) {
    this.userID = id;
  }
  calculateAvgOunces(id, hydrationData) {
    let ozDrank = 0;
    let days = 0;
    hydrationData.forEach(function(elem) {
      if (elem.userID === id) {
        ozDrank += elem.numOunces;
        days++;
      }
    });
    return Math.floor(ozDrank / days);
  }
  findOzByDay(id, date, hydrationData) {
    let hydrationFind = hydrationData.find(function(elem) {
      if (elem.userID === id && elem.date === date) {
        return elem;
      }
    });
    return hydrationFind.numOunces;
  }
  findOzByWeek(id, date, hydrationData) {
    let week = [];
    let user = hydrationData.filter(function(elem) {
      return elem.userID === id;
    });
    let userIndex = user.findIndex(function(elem) {
      return elem.date === date;
    })
    for (let i = userIndex; i < (userIndex + 7); i++) {
      week.push(user[i].numOunces);
    }
    return week;
  }
}

 if (typeof module !== 'undefined') {
   module.exports = Hydration;
 }
