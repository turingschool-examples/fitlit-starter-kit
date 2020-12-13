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

  returnWaterConsumed(userId, dates) {    
    
  }
}

if (typeof module !== 'undefined') {
  module.exports = HydrationRepo;
}