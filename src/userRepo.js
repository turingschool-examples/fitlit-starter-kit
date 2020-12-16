/* eslint-disable max-len */
'use strict'
const UserSleep = require("./userSleep");
const UserHydration = require("./userHydration");
const User = require("./user");

class UserRepo {
  // all users, all data, all the time
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

  // could dry up the three functions below. pass in parameter (fullList). take in 2 arguments (water, ID) fullList and ID
  // low hanging fruit

  filterHydrationData(id) {
    return this.hydrationData.filter(
      (hydrationItem) => hydrationItem.userID === id
    );
  }

  filterSleepData(id) {
    return this.sleepData.filter((sleepItem) => sleepItem.userID === id);
  }

  filterActivityData(id) {
    return this.activityData.filter(
      (activityItem) => activityItem.userID === id
    );
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
    let arr = [];
    let finalAnswer = [];
    let index = this.getIndex(startDate);
    for (var count = 0; count < this.users.length; count++) {
      for (let day = 0; day < 7; day++) {
        let oneUserOneDay = this.sleepData[index];
        arr.push(oneUserOneDay);
      }
      index += this.users.length;
      let userSleepNumber =
        arr.reduce((total, value) => {
          total += value.sleepQuality;
          return total;
        }, 0) / 7;
      arr = [];
      if (userSleepNumber > 3) {
        finalAnswer.push(this.sleepData[index].userID);
        userSleepNumber = 0;
      }
      index++;
    }
    return finalAnswer
  }

  findLongSleepers(date) {
    // call these in separate methods? filter and sort could be reused
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