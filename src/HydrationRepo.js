const Hydration = require('../src/Hydration');

class HydrationRepo {
  constructor(dataset) {
    this.data = dataset.map(data => new Hydration(data));
    this.userData;
  }

  filterUserData(userId) {
    this.userData = this.data.filter(oneDataPiece => oneDataPiece.id === userId);    
  }

  calculateAvgOzOverTime(userId) {    
    this.filterUserData(userId);
    const totalHydration = this.userData.reduce((total, oneDaysData) => oneDaysData.numOunces + total, 0);
    return Math.round(totalHydration / this.userData.length);
  }

  returnWaterConsumed(userId, date) {        
    this.filterUserData(userId);
    const end = this.userData.findIndex(element => element.date === date);    
    const waterConsumed = [];
    for (let i = end - 7; i < end; i++) {
      waterConsumed.push(this.userData[i].numOunces);
    }

    return waterConsumed;
  }

  returnAvgWaterConsumed(userId, date) {
    const waterConsumed = this.returnWaterConsumed(userId, date);
    const totalWaterConsumed = waterConsumed.reduce((total, oz) => total + oz, 0);
    return Math.floor(totalWaterConsumed / waterConsumed.length);
  }
}

if (typeof module !== 'undefined') {
  module.exports = HydrationRepo;
}