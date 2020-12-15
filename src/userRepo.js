/* eslint-disable max-len */
'use strict'
const UserSleep = require("./userSleep");
const UserHydration = require("./userHydration");
const moment = require("./moment");

class UserRepo { // all users, all data, all the time
  constructor(userData, sleepData, hydrationData, activityData) {
    this.users = userData;
    this.sleepData = sleepData;
    this.hydrationData = hydrationData;
    this.activityData = activityData;
    // this.sleepData.map(item => moment(date, "YYYY-MM-DD").format("YYYY-MM-DD"));
  }

  // iterate through imported data and item.date = new Moment item.date

  getAllUserAvgItem(fullList, date, keyName) {
    let dayOfItemData = fullList.filter(day => day.date === date)
    let listOfItems = dayOfItemData.map(item => item[keyName])
    let totalItem = listOfItems.reduce((total, value) => {
      return (total += value);
    }, 0)
    return totalItem / listOfItems.length
  }

  getAUser(id) {
    return this.users.find(user => user.id === id);
  }

  filterHydrationData(id) {
    return this.hydrationData.filter(hydrationItem => hydrationItem.userID === id);
  }

  filterSleepData(id) {
    return this.sleepData.filter(sleepItem => sleepItem.userID === id);
  }

  filterActivityData(id) {
    return this.activityData.filter(activityItem => activityItem.userID === id);
  }

  findSleepDataWeek(date) {

    // this.sleepData.filter((day) => day.date === myDate);
    // console.log(this.sleepData.filter(day => day.date === date));
    // console.log(myDate);
  }

  // filter out by day to get the next 6 days of sleep data for all users

  findGoodSleepers() { // need to test this

  }

  //grabbing everyones sleep data for a week - maybe its own function

  // filter out for the week to grab all the data for a given startdate for the week
  // after we have users for one week, for each user their sleepQual number added up divide by 7
  // to get each persons average.
  // filter out those with sleep quality greater than 3 then
  // return an array of users ID


  // an array of sleepData objects
  // output is an array of users who have a sleep quality greater than 3 for a given week
  // Methods: 
  // find - find the index of the specific date to get the week data

  // get the average of all users sleep quality
  // filter out the users by their sleep quality > 3
  // now we have an array of users with a sleep quality better than three
  // iterate over that array by the startdate
  // splice the array once the date hits + 7 
  // 

  findLongSleepers(date) {
    let todaysSleep = this.sleepData.filter((item) => item.date === date)
    let bestSleeper = todaysSleep.sort((a, b) => b.hoursSlept - a.hoursSlept)
    return todaysSleep.reduce((total, value) => {
      if (
        (bestSleeper[0].hoursSlept === value.hoursSlept &&
          !total.includes(value.userID))
      ) {
        total.push(value.userID);
      }
      return total
    }, [])
  }

}
if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}