const dayjs = require('dayjs')

class Activity {
  constructor(activityData) {
    this.data = activityData;
  }
  
  dailyMinutesActive(user, date) {
    const activeTime = this.data.find((entry) => {
      return entry.userID === user && entry.date === date
    });
    return activeTime.minutesActive;
  };
}

export default Activity;