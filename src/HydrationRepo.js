const Hydration = require('../src/Hydration');

class HydrationRepo {
  constructor(dataset) {
    this.data = dataset.map(data => new Hydration(data));
  }
}

if (typeof module !== 'undefined') {
  module.exports = HydrationRepo;
}