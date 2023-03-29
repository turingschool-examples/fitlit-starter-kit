import sleepTestData from '../../test/sleep-test-data';

class Sleep{
  constructor(sleepInfo) {
    this.userID = sleepInfo.userID;
    this.date = sleepInfo.date;
    this.hoursSlept = sleepInfo.hoursSlept;
    this.sleepQuality = sleepInfo.sleepQuality;
    // this.sleepData = sleepData
  }
}


export default Sleep;