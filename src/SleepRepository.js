if (typeof module !== "undefined") {
dataFilePath = require('../data/sleepSub2');
User = require('../src/User');
}

class SleepRepository {
  constructor (userID) {
    this.userID = userID,
    this.data = dataFilePath
  }

  getAvgSleepQuality() {
    return (this.data.reduce(function(sleepQual, currentUser) {
      return sleepQual += currentUser.sleepQuality;
    }, 0) / this.data.length).toFixed(1);
  };

  getSleptMostOnDay(sleepDate) {
    let dateOfSleep = this.data.filter(el => el.date === sleepDate);
    let maxSleep = 0;
    var sleepChamp = [];
    dateOfSleep.forEach(user => {
      if (user.hoursSlept > maxSleep) {
        maxSleep = user.hoursSlept;
        sleepChamp[0] = user.userID;
      } else if (user.hoursSlept === maxSleep) {
        sleepChamp.push(user.userID);
      }
    });

    const user = new User("../data/UserSub.js");
    return user.getUserNameFromID(sleepChamp[0]);
  };

  getHoursSleptForWeek(userID, sleepDate) {
    let daysSlept = this.data.filter(el => el.userID === userID);
    let todayIndex = daysSlept.indexOf(daysSlept.find(el => el.date === sleepDate)) + 1;
    let fixFirstDayIndex = todayIndex - 7 > 0 ? todayIndex - 7 : 0;
    let sleepDays = daysSlept.slice(fixFirstDayIndex, todayIndex);
    return sleepDays.map(sleeper => sleeper.hoursSlept);
  };

  getSleepQualityForWeek(userID, sleepDate) {
    let daysSlept = this.data.filter(el => el.userID === userID);
    let todayIndex = daysSlept.indexOf(daysSlept.find(el => el.date === sleepDate)) + 1;
    let fixFirstDayIndex = todayIndex - 7 > 0 ? todayIndex - 7 : 0;
    let sleepDays = daysSlept.slice(fixFirstDayIndex, todayIndex);
    console.log(`todayIndex is: ${todayIndex}`);
    return sleepDays.map(sleeper => sleeper.sleepQuality);
  };

  getSleepQualityAvgOverThree(sleepDate) {
    let averages = [], ids = [], finalIds = [];
    this.data.forEach((userData, i) => {
      let total = 0,  days = 0, index;
      //console.log(`userData is ${userData.date}`)
      this.data.forEach((el, i) => {
        if (userData.date === sleepDate) {index = i;}
      });
     
      console.log(`index is ${index}`)
      this.data.forEach((el, i) => {
        if (i >= index && i <= index + 6) {
          total += this.data[i].sleepQuality;
          days++;
          console.log(`userDate is ${this.data[i].date}`)
        }
      });

      averages.push(parseFloat((total / days).toFixed(1)));
      ids.push(userData.userID);
    });

    averages.forEach((el, i) => {
      if (averages[i] >= 3) {
        finalIds.push(averages[i]);
      }
    });

    return finalIds;
  }




  // getSleepQualityAvgOverThree(sleepDate) {
  //   let todayIndex = this.data.indexOf(this.data.find(el => el.date === sleepDate)) + 1;
  //   let fixFirstDayIndex = todayIndex - 7 > 0 ? todayIndex - 7 : 0;
  //   let sleepQuality = this.data.slice(fixFirstDayIndex, todayIndex);
  //   console.log(`sleepQuality is: ${sleepQuality/*[3].name/*[0].sleepQuality*/}`);
  //   let avgOverThree = [];
  //   this.data.forEach((el, i) => {
  //  // console.log(el.userID, i, sleepQuality)
  //   if ((sleepQuality.reduce((a, b) => { 
  //     return a + b.sleepQuality}, 0)) / sleepQuality.length >= 3) {
  //       avgOverThree.push(el.userID)
  //     }
  // });
  // return avgOverThree;
  // }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}