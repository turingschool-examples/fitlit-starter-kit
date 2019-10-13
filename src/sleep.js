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
  showAllUserSleep(key, sleepData) {
    let sleepKeyTotal = 0;
    let users = 0;
    sleepData.forEach(function(elem) {
      sleepKeyTotal += elem[key];
      users++;
    });
    return Math.round((sleepKeyTotal / users) * 100) / 100;
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
  findBestSleepers(week, sleepData) {
    let userList = [];
    let finalArr = [];
    let userIndex = sleepData.findIndex(function(elem) {
      return elem.date === week;
    });
    for (let i = userIndex; i < (userIndex + 50 * 7); i++) {
      userList.push({ 'userID': sleepData[i].userID, 'weeklySleep': sleepData[i].sleepQuality});
      }
    let userSleepData = function() {
      return userList.reduce((acc, user) => {
        if(!acc[user.userID]) {
          acc[user.userID] = [];
        }
        acc[user.userID].push(user.weeklySleep);
        return acc;
      }, [])
    };
    let averageQual = userSleepData().forEach(function(elem, i) {
      return finalArr.push({'userID': i,  'data':     elem.reduce((acc, val) => acc + val, 0)
      });
    });
    finalArr.forEach(elem => elem.data = Math.round((elem.data / 7) * 100) / 100);
    finalArr.sort((a, b) => b.data - a.data);
    let finalIndex = finalArr.findIndex(function(elem) {
      return elem.data <= 3;
    });
    return finalArr.slice(0, finalIndex);
  }

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
