import sleepTestData from '../../test/sleep-test-data';

class Sleep{
  constructor(sleepInfo) {
    this.userID = sleepInfo.userID;
    this.date = sleepInfo.date;
    this.hoursSlept = sleepInfo.hoursSlept;
    this.sleepQuality = sleepInfo.sleepQuality;
    // this.sleepData = sleepData
  }
  
  getAvgSleep(userID) {
    const sleepEntries = sleepTestData.filter(entry => entry.userID === userID);
    const avgSleep = sleepEntries.reduce((acc, user) => {
      return acc += user.hoursSlept
    }, 0);
    return Math.round(avgSleep/sleepEntries.length * 10) / 10;
};
  
  getAvgQuality(userID) {
    const sleepEntries = sleepTestData.filter(entry => entry.userID === userID);
    const avgQuality = sleepEntries.reduce((acc, user) => {
      return acc += user.sleepQuality
    }, 0);
    return Math.round(avgQuality/sleepEntries.length * 10) / 10;
  }
}


export default Sleep;