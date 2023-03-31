
class Sleep{
  constructor(sleepData) {
    this.sleepData = sleepData
  }

  getAvgSleep(userID) {
    const sleepEntries = this.sleepData.filter(sleepEntry => sleepEntry.userID === userID);
    const avgSleep = sleepEntries.reduce((acc, user) => {
      return acc += user.hoursSlept
    }, 0);
    return Math.round(avgSleep/sleepEntries.length * 10) / 10;
};
  
  getAvgQuality(userID) {
    const sleepEntries = this.sleepData.filter(entry => entry.userID === userID);
    const avgQuality = sleepEntries.reduce((acc, user) => {
      return acc += user.sleepQuality
    }, 0);
    return Math.round(avgQuality/sleepEntries.length * 10) / 10;
  }

  getHoursByDay(userID, date) {
    const sleepEntries = this.sleepData.filter(entry => entry.userID === userID);
    const dailyEntry = sleepEntries.find(entry => entry.date === date)
    return dailyEntry.hoursSlept
  }

  getQualityByDay(userID, date) {
    const sleepEntries = this.sleepData.filter(entry => entry.userID === userID);
    const dailyEntry = sleepEntries.find(entry => entry.date === date)
    return dailyEntry.sleepQuality
  }
};


export default Sleep;