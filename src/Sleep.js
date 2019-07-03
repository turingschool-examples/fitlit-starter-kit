class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  consumerInfo(id) {
    return this.sleepData.filter(obj => obj.userID === id);
  }

  averageQualitySleep(id) {
    let userSleepData = this.consumerInfo(id).map(obj => obj.sleepQuality);
    let avgSleepQuality = userSleepData.reduce((acc, quality) => {
      return acc + quality;
    }, 0);
    return Math.round(avgSleepQuality / userSleepData.length);
    
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep; 
}

