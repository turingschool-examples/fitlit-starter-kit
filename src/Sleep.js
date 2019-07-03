class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  consumerInfo(id) {
    return this.sleepData.filter(obj => obj.userID === id);
  }

  
}

if (typeof module !== 'undefined') {
  module.exports = Sleep; 
}

