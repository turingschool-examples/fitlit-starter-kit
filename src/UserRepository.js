const User = require("./User");
const HydrationEntry = require("./HydrationEntry");
const SleepEntry = require("./SleepEntry");
const ActivityEntry = require("./ActivityEntry");


class UserRepository {
  constructor() {
    this.userData = [];
    this.hydrationData = [];
    this.sleepData = [];
    this.activityData = [];
    this.avgStepGoal = null;
  }

  // dataset constructors & initial property assignment

  populateUserData(dataset) {
    this.userData = dataset.map(user => new User(user));
  }
  
  populateHydrationData(dataset) {
    this.hydrationData = dataset.map(entry => new HydrationEntry(entry));
  }

  populateSleepData(dataset) {
    this.sleepData = dataset.map(entry => new SleepEntry(entry));
  }

  populateActivityData(dataset) {
    this.activityData = dataset.map(entry => new ActivityEntry(entry));
  }

  retrieveUserData(id) {
    return this.userData[id-1];
  }

  retrieveAvgStepGoal() {
    const stepGoalArray = this.userData.map(user => user.dailyStepGoal);
    const stepGoalSum = stepGoalArray.reduce((sum, goal) => {
      return sum + goal;
    });

    this.avgStepGoal = Math.round(stepGoalSum / this.userData.length);

    return this.avgStepGoal;
  }

  // hydrationData methods

   calculateAvgDailyWater() {
    const dailyOunces = this.hydrationData.map(entry => entry.numOunces);
    const avgDailyWater = dailyOunces.reduce((sumOz, numOz) => {
      return sumOz + numOz;
    });

    return avgDailyWater;
  }

  calculateAvgWeeklyWater(id, startDate) {
   

    const userEntries = this.hydrationData.filter(entry => entry.id === id);

    // const dates = [];

    const splitDate = startDate.split('/');

    const startYear = parseInt(splitDate[0]);
    const startMonth = parseInt(splitDate[1]);
    const startDay = parseInt(splitDate[2]);

    const dates = [];
    
    function getDates() {
      for (let i = startDay; i < startDay + 7; i++) {
        dates.push(`${startYear}/${startMonth}/${i}`);
      }
    }
    getDates();

    const weekEntries = userEntries.filter(entry => {
      entry.date === dates[0] || dates[1] || dates[2] || dates[3] || dates[4] || dates[5] || dates[6]
    });

    console.log(weekEntries);


    // const dailyOunces = entries.map(entry => entry.numOunces);

    // const avgOunces = ouncesEachDate.reduce((sumOz, numOz) => {
    //   return sumOz + numOz;
    // });

  }

  retrieveNumOuncesByDate(date) {
    /* use find() to iterate through this.hydrationLog array,
    locate specific element by date, and return numOunces */
  }


  // sleepData methods

  calculateAvgSleepQuality() {
    /* iterate through sleep.js dataset, 
    accumulate all sleepQuality values, 
    and divide by length of the array */
  }

  retrieveBestWeeklySleepers(dataset) {
    /* filter through the sleepData array 
    for any elements with sleepQuality value  > 3, 
    store element's 'name' value in new array, 
    and return array */
  }

  retrieveBestSleeper(date) {
    /* use find() to identify first element in sleepData 
    array with same data as parameter, declare let bestSleeper 
    and assign value of that sleepData[n].id, 
    then iterate through array and if 
    sleepData[i].hoursSlept > bestSleeper,
    bestSleeper = sleepData[i].id, then return bestSleeper */
  }


  // activityData methods

  retrieveMinutesActive(id, date) {
    /* retrieve minuteActive property by provided user ID and date */
  }

  calculateAvgStairsClimbedByDate(date) {
    /* filter through activity.js dataset to identify 
    all elements with provided date, accumulate value of 
    flightsOfStairs for each, divide by number of elements 
    within that date, return value */
  }

  calculateAvgStepsByDate(date) {
    /* filter through the activity.js dataset to identify 
    all elements with provided date, accumulate value of 
    numSteps for each, divide by the number of elements 
    within that date, return value */
  }

  calculateAvgMinutesActiveByDate(date) {
    /* iterate through the activity.js dataset, 
    and add minutes active from all users on a specific day, 
    and divide by the number of users */
  }
}


/*
  for each this.hydrationData element between startDate 
    and startDate + 7, accumulate numOunces, divide by 
    this.hydrationLog.length, and return */

    // "date": [string YYYY/MM/DD]
    // '2019/06/15'
    // '2019/06/16'
    // '2019/06/17'
    // '2019/06/18'
    // '2019/06/19'
    // '2019/06/20'
    // '2019/06/21'


    // let years = [];
    // let months = [];
    // let days = [];


// function getMonths() {
    //   for (let i = 0; i < 7; i++) {
    //     months.push(startMonth);
    //   }
    // }
    // getMonths();

    // function getYears() {
    //   for (let i = 0; i < 7; i++) {
    //     years.push(startYear);
    //   }
    // }
    // getYears();

    // function makeDates() {
    //   for (let i = 0; i < 7; i++) {
    //     dates.push(`${years[i]}/${months[i]}/${days[i]}`);
    //   }
    // }
    // makeDates();

    // console.log(dates);


module.exports = UserRepository;