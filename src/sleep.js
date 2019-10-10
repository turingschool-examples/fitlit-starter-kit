class Sleep {
  constructor(id) {
    this.userID = id;
  }
  calculateAvgSleep(id, key, sleepData) {
    let sleep = 0;
    let days = 0;
    sleepData.forEach(function(elem) {
      if (elem.userID === id) {
        sleep += elem[key];
        days++;
      }
    });
    return Math.round((sleep / days) * 100) / 100;
  }
  showSleep(id, date, key, sleepData) {
    let data;
    sleepData.forEach(function(elem) {
      if (elem.userID === id && elem.date === date) {
        data = elem[key];
      }
    });
    return data;
  }
  showAllUserSleepQual(sleepData) {
    let sleepQualTotal = 0;
    let users = 0;
    sleepData.forEach(function(elem) {
      sleepQualTotal += elem.sleepQuality;
      users++;
    });
    return Math.round((sleepQualTotal / users) * 100) / 100;
  }
  findSleepWeek(id, date, key, sleepData) {
    let week = [];
    let user = sleepData.filter(function(elem) {
      return elem.userID === id;
    });
    let userIndex = user.findIndex(function(elem) {
      return elem.date === date;
    });
    for (let i = userIndex; i < (userIndex + 7); i++) {
      week.push(user[i][key]);
    }
    return week;
  }

  // Not Finished
  findBestSleepers(week, sleepData) {
    let userList = [];
    let userIndex = sleepData.findIndex(function(elem) {
      return elem.date === week;
    });
    for (let i = userIndex; i < (userIndex + 50 *7); i++) {
      userList.push({ 'userID': sleepData[i].userID, 'weeklySleep': sleepData[i].sleepQuality});
      }
    console.log(userList);
    return userList;
  }

  //

  findSleepiestUsers(date, sleepData) {
    let userList = [];
    sleepData.forEach(function(elem) {
      if (elem.date === date) {
        userList.push(elem);
      }
    });
    userList.sort((a, b) => b.hoursSlept - a.hoursSlept);
    let topFiveUsers = userList.slice(0, 5);
    let topIDs = [];
    topFiveUsers.forEach(function(elem) {
      topIDs.push(elem.userID);
    });
    return topIDs;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
