/* eslint-disable max-len */
'use strict'
// const UserSleep = require("./userSleep");
// const UserHydration = require("./userHydration");
// const User = require("./user");

class UserRepo {
  constructor(userData, sleepData, hydrationData, activityData) {
    this.users = userData;
    this.sleepData = sleepData;
    this.hydrationData = hydrationData;
    this.activityData = activityData;
    this.allUsers = [];
  }

  getAllUserAvgItem(fullList, date, keyName) {
    let dayOfItemData = fullList.filter((day) => day.date === date);
    let listOfItems = dayOfItemData.map((item) => item[keyName]);
    let totalItem = listOfItems.reduce((total, value) => {
      return (total += value);
    }, 0);
    return totalItem / listOfItems.length;
  }

  getAUser(id) {
    return this.users.find((user) => user.id === id);
  }

  filterHydrationData(id) {
    return this.hydrationData.filter((hydrationItem) => hydrationItem.userID === id);
  }

  filterSleepData(id) {
    return this.sleepData.filter((sleepItem) => sleepItem.userID === id);
  }

  filterActivityData(id) {
    return this.activityData.filter((activityItem) => activityItem.userID === id);
  }

  getTotalNumUsers() {
    return this.users.length;
  }

  calculateAvgSleepItem(keyName) {
    let fullList = this.userSleepData.map((sleepItem) => sleepItem[keyName]);
    return this.getAverage(fullList);
  }

  getIndex(startDate) {
    let index = this.sleepData.findIndex((item) => item.date === startDate);
    return index;
  }

  findGoodSleepers(startDate) {
    let eachSleeper = [];
    let goodSleepers = [];
    let index = this.getIndex(startDate);
    this.users.forEach(user => {
      for (let day = 0; day < 7; day++) {
        let oneUserOneDay = this.sleepData[index];
        eachSleeper.push(oneUserOneDay);
      }
      index += this.users.length;
      let userSleepNumber =
        eachSleeper.reduce((total, value) => {
          total += value.sleepQuality;
          return total;
        }, 0) / 7;
      eachSleeper = [];
      if (userSleepNumber > 3) {
        goodSleepers.push(this.sleepData[index].userID);
        userSleepNumber = 0;
      }
      index++;
    })
    return goodSleepers
  }

  findLongSleepers(date) {
    let todaysSleep = this.sleepData.filter((item) => item.date === date);
    let bestSleeper = todaysSleep.sort((a, b) => b.hoursSlept - a.hoursSlept);
    return todaysSleep.reduce((total, value) => {
      if (
        bestSleeper[0].hoursSlept === value.hoursSlept &&
        !total.includes(value.userID)
      ) {
        total.push(value.userID);
      }
      return total;
    }, []);
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}