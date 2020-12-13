const Hydration = require('../src/Hydration');

class HydrationRepo {
  constructor(dataset) {
    this.data = dataset.map(data => new Hydration(data));
  }

  calculateAvgOzOverTime(userId) {    
    const filtered = this.data.filter(dataPiece => dataPiece.id === userId);    
    const totalHydration = filtered.reduce((total, oneDaysData) => oneDaysData.numOunces + total, 0);
    return Math.round(totalHydration / filtered.length);
  }

  returnWaterConsumed(userId, date) {        
    const allUserData = this.data.filter(userData => userData.id === userId);
    const start = allUserData.findIndex(element => element.date === date);    
    const waterConsumed = [];
    for (let i = start; i < start + 7; i++) {
      waterConsumed.push(allUserData[i].numOunces);
    }

    return waterConsumed;
  }
}

if (typeof module !== 'undefined') {
  module.exports = HydrationRepo;
}