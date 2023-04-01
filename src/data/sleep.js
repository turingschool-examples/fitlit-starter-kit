class Sleep{
  constructor(sleepData) {
    this.sleepData = sleepData;
  };

  getAvgSleep(userID) {
    const sleepEntries = this.sleepData.filter(sleepEntry => sleepEntry.userID === userID);
    const avgSleep = sleepEntries.reduce((acc, user) => {
      return acc += user.hoursSlept;
    }, 0);
    return Math.round(avgSleep/sleepEntries.length * 10) / 10;
  };
  
  getAvgQuality(userID) {
    const sleepEntries = this.sleepData.filter(entry => entry.userID === userID);
    const avgQuality = sleepEntries.reduce((acc, user) => {
      return acc += user.sleepQuality;
    }, 0);
    return Math.round(avgQuality/sleepEntries.length * 10) / 10;
  };

  getHoursByDay(userID, date) {
    const sleepEntries = this.sleepData.filter(entry => entry.userID === userID);
    const dailyEntry = sleepEntries.find(entry => entry.date === date);
    return dailyEntry.hoursSlept;
  };

  getQualityByDay(userID, date) {
    const sleepEntries = this.sleepData.filter(entry => entry.userID === userID);
    const dailyEntry = sleepEntries.find(entry => entry.date === date);
    return dailyEntry.sleepQuality;
  };

  getWeekSleep(userID, startDate) {
    const sleepEntries = this.sleepData.filter(entry => entry.userID === userID);
    const indexOfCurrentDayEntry = sleepEntries.indexOf(sleepEntries.find(entry => {
      return entry.date === startDate;
    }))
    let weeklySleep = [];

    for (let i = indexOfCurrentDayEntry; i > indexOfCurrentDayEntry - 7; i--) {
      weeklySleep.push(sleepEntries[i]);
    };

    const weeklySleepData = weeklySleep.map(entry => ({
      date: entry.date, 
      hoursSlept: entry.hoursSlept + ' hours slept',
      sleepQuality: ' a sleep quality rating of ' + entry.sleepQuality
      }));
      return weeklySleepData;
  };
};


export default Sleep;
