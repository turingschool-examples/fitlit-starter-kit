/**
 * Folks often use line breaks on imports to note
 * different kinds of things you are using
 * 
 * Bear in mind this is just my style and someone else
 * might tell you to crunch it all together 🤓
 */

// Classes
import UserRepository from './UserRepository';
import User from './User';

// Business logic
import {
  userData,
  userSleepData,
  userActivityData,
  userHydrationData
} from './fetch.js';

//charts
import {
  generateStepGoalChart,
  generateWeekWaterChart,
  generateDayWaterChart,
  generateWeekSleepChart,
  generateAvgSleepChart,
} from './charts';

// Generic utilities
import { getLatestDate, generateRandomIndex } from './utils';

// Assets
import './css/styles.css';
import './images/turing-logo.png';
import './images/user.png';


window.addEventListener('load', laodPage);


// Get Chart Data
const getSleepComparison = (currentUser, sleepData, date) => {
  const hours = currentUser
    .findHoursSleptByWeek(sleepData, date)[6].hoursSlept;
  const quality = currentUser
    .findHoursSleptByWeek(sleepData, date)[6].sleepQuality;
  const avgHours = currentUser
    .calculateAvgDailySleep(sleepData);
  const avgQuality = currentUser
    .calculateAvgSleepQuality(sleepData);

  return {
    date,
    hoursSleptOnDate: hours,
    sleepQualityOnDate: quality,
    hoursSleptAvg: avgHours,
    sleepQualityAvg: avgQuality
  }
}

/**
 * A little easier to read if you have all this
 * green text and there's some intrepolation like
 * Name: ${user.name}
 * to see it on a new line since the Name belnds into 
 * the tags on a one liner
 */

const generateHeaderContent = (user) => {
  return `
    <div class="welcome-box">
      <img
        src="./images/user.png"
        alt="user-icon"
        class="header
        header-image"
      >
      <h1 class="welcome header">
        Welcome, ${user.displayFirstName()}
      </h1>
    </div>
    <div class="user-info-box">
      <p class="user-info">
        Name: ${user.name}
      </p>
      <p class="user-info">
        Address: ${user.address}
      </p>
      <p class="user-info">
        Email: ${user.email}
      </p>
    </div>
  `
}

/**
 * 
 * Using objects to store data is a bit more declarative than arrays.
 * You get to say what the keys are and give them descriptive names instead 
 * of referencing a non-descript index
 */

const parseData = (data) => {
  return {
    userData: data[0].userData,
    sleepEntries: data[1].sleepData,
    activityData: data[2].activityData,
    hydrationData: data[3].hydrationData,
  }
}

/**
 * The way this reads is kind of what I was alluding to when we spoke
 * last weekend.  It separates things like we're doing x y and z.
 * You can use line breaks and such to organize different "chunks"
 * of logic to tell the story
 */

const injectHtml = (data) => {
  /**
   * Can pull the query selectors into here
   * And pass them into the chart functions
   * to reduce global vars
   */

  // Query selectors
  const header = document.querySelector('#header')
  const stepGoalChart = document.querySelector('#activityChart')
  const sleepChartWeek = document.querySelector('#sleepChartWeek')
  const sleepChartAvg = document.querySelector('#sleepChartAvg')
  const waterChartWeek = document.querySelector('#waterChartWeek')
  const waterChartDay = document.querySelector('#waterChartDay')
  
  /**
 * destructuring syntax below
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */

  // Parse data
  const {
    userData,
    sleepEntries,
    hydrationData,
  } = parseData(data); // parseData returns object which can be destructured

  /**
   * opther way to do above
   * 
   * const data = parseData(data);
   * const userData = data.userData
   * ...
   */

  // Init classes
  const allUsers = new UserRepository(userData);

  // You could just reference the data here
  // Some of those classed seem to just store state

  // Get random user
  const randomIndex = generateRandomIndex(userData);
  const currentUser = new User(userData[randomIndex]);
  
  // Get latest date
  const date = getLatestDate(sleepEntries, currentUser);
  
  // Get chart data
  const ouncesByWeek = currentUser
    .findOuncesByWeek(hydrationData, date)
  const ouncesByDate = currentUser
    .findOuncesByDate(hydrationData, date)
  const currentUserSleepDataByDate = currentUser
    .findHoursSleptByWeek(sleepEntries, date);
  const sleepComparisonData = getSleepComparison(
    currentUser,
    sleepEntries,
    date
  );
  
  // Set HTML
  header.innerHTML = generateHeaderContent(currentUser);
  stepGoalChart.innerHTML = generateStepGoalChart(
    currentUser,
    allUsers,
    stepGoalChart
  );
  waterChartDay.innerHTML = generateDayWaterChart(
    ouncesByDate,
    waterChartDay
  );
  waterChartWeek.innerHTML = generateWeekWaterChart(
    ouncesByWeek,
    waterChartWeek
  );
  sleepChartWeek.innerHTML = generateWeekSleepChart(
    currentUserSleepDataByDate,
    sleepChartWeek
  );
  sleepChartAvg.innerHTML = generateAvgSleepChart(
    sleepComparisonData,
    sleepChartAvg
  );
}

/**
 * 
 * It's okay to use es6 fucntions and mix if it makes sense for what 
 * you're doing.  They behave differently.  Here, We want to show
 * at the top of the file that we are going to loadPage on an loading \
 * event listener in this case
 */
function laodPage() {
  return Promise.all([
    userData(),
    userSleepData(),
    userActivityData(),
    userHydrationData()
  ])
    .then(data => {
      injectHtml(data);
    })
    // Some stricter linters like AirBnB's
    // React like the precision of console.error
    // There's a few others too that set log levels
    .catch(error => console.error(error))
}
