// CSS File Import
import './css/styles.css';

// Image Imports
import './images/turing-logo.png';
import './images/Activity_Logo.svg';
import './images/Hydration_Logo.svg';
import './images/Sleep_Logo.svg';

// 3rd party library import
import Chart from 'chart.js/auto';

// Import API Calls
import './apiCalls'

//Query Selectors
const hydrationCard = document.querySelector(".hydration-holder");

// DOM Manipulation Functions
function displayUserCard(user) {
  const userCard = document.querySelector('.user-profile-info-js');
  userCard.innerHTML = `
    <b>Name</b> 
    <p>${user.name}</p>
    <b>Address</b> 
    <p>${user.address}</p>
    <b>Email</b> 
    <p>${user.email}</p>
  `;
}

function displayUserCardInitial(user) {
  const userCardName = document.querySelector('.user-card-name-js');
  const userInitial = user.getFirstName().charAt(0);
  userCardName.innerText = `${userInitial}`;
};

function displayStepUserVsAllUsers(user, userBase) {
  const stepUserVsAllUsers = document.querySelector('.user-steps-vs-all-js');
  stepUserVsAllUsers.innerHTML = `
    <b>Your Stride Length</b>
    <p>${user.strideLength}</p>
    <b>Your Step Goal</b> 
    <p>${user.dailyStepGoal}</p>
    <b>Average User Step Goal</b> 
    <p>${userBase.calculateAverageStepGoal()}</p>
  `;
};

function displayFriendsList(user, userBase) {
  const friendsList = document.querySelector('.user-friends-js');
  let userFriends = userBase.returnUserFriendsName(user.id);
  friendsList.innerHTML = `
    <b>Friends</b>
    <p>${userFriends.join(",  ")}</p>
  `;
}

function displayUserGreeting(user, date) {
  const userGreeting = document.querySelector('.welcome-header');
  const dayjs = require('dayjs')
  const customParseFormat = require('dayjs/plugin/customParseFormat');
  dayjs.extend(customParseFormat);
  const dateString = date;
  console.log(dateString)
  const dateToday = dayjs(dateString, 'YYYY/MM/DD');

  const formattedDateString = dateToday.format('dddd D MMMM');
  userGreeting.innerHTML = `
  <p class="welcome welcome-date">${formattedDateString}</p>
<h2 class="welcome">Hi, ${user.getFirstName()}</h2>
`;
};

function clearChartArea() {
  const chartArea = document.querySelector(".infographic");
  chartArea.innerHTML = "<canvas id='chart'></canvas>";
};

function displayhydrationCard(hydration, userID, date) {
  hydrationCard.innerHTML = `<p class="water-text"><b>Average Water Consumed</b><br> ${hydration.calculateAverageFluidPerUser(
    userID
  )} ounces </p>
   <p class="water-text"><b>Water Drank Today</b><br> ${hydration.dailyOuncesConsumed(
     userID,
     date
   )} ounces </p> 
  </p>
  `;
  const waterButton = document.querySelector(".hydration-button");
  waterButton.addEventListener("click", () => createHydrationChart(hydration, userID, date));
};

function createHydrationChart(hydration, userID, date) {
  const weeklyOunces = hydration.weeklyOuncesConsumed(userID, date);
  const labels = weeklyOunces.map(days => days.date);
  const data = weeklyOunces.map(days => days.numOunces);
  clearChartArea();
  new Chart("chart", {
    type: 'bar',
    data: {
      datasets: [{
        label: "ounces",
        backgroundColor: "#538BC7",
        borderColor: "#3C4252",
        borderWidth: 2,
        hoverBackgroundColor: "#5A73C0",
        hoverBorderColor: "#5A73C0",
        data: data,
      }],
      labels: labels,
    }
  })
};

function displaySleepCard(sleep, userID, date) {
  const latestSleepData = document.querySelector(".latest-sleep-data-js");
  latestSleepData.innerHTML = `
    <p class="sleep-text"><b>Hours Slept</b><br>${sleep.findSleepHoursOnDate(userID, date)}</p>
    <p class="sleep-text"><b>Sleep Quality</b><br>${sleep.findSleepQualityOnDate(userID, date)}</p>
  `;
  const allTimeSleepData = document.querySelector(".all-time-sleep-data-js");
  allTimeSleepData.innerHTML = `
    <p class="sleep-text"><b>Average Hours Slept</b><br>${sleep.calculateAverageSleepHours(
      userID
    )}</p>
    <p class="sleep-text"><b>Average Sleep Quality</b><br>${sleep.calculateAverageSleepQuality(
      userID
    )}</p>
  `;
  const hoursSleptButton = document.querySelector("#hoursSleptButton");
  hoursSleptButton.addEventListener("click", () =>
    createHoursSleptChart(sleep, userID, date)
  );
  const qualitySleptButton = document.querySelector(
    "#weeklySleepQualityButton"
  );
  qualitySleptButton.addEventListener("click", () =>
    createSleepQualityChart(sleep, userID, date)
  );
};

function createHoursSleptChart(sleep, userID, date) {
  const weeklyHours = sleep.calculateWeeklyHoursSlept(userID, date);
  const labels = weeklyHours.map(days => days.date);
  const data = weeklyHours.map(days => days.hoursSlept);
  clearChartArea();
  new Chart("chart", {
    type: "line",
    data: {
      datasets: [{
        label: "Hours Slept",
        backgroundColor: "#F16433",
        borderColor: "A25E9B",
        borderWidth: 2,
        hoverBackgroundColor: "#5A73C0",
        hoverBorderColor: "#5A73C0",
        data: data,
      }, ],
      labels: labels,
    },
  });
};

function createSleepQualityChart(sleep, userID, date) {
  const weeklyHours = sleep.calculateWeeklySleepQuality(userID, date);
  const labels = weeklyHours.map((days) => days.date);
  const data = weeklyHours.map((days) => days.sleepQuality);
  clearChartArea();
  new Chart("chart", {
    type: "bar",
    data: {
      datasets: [
        {
          label: "Sleep Quality",
          backgroundColor: "#A25E9B",
          borderColor: "#A25E9B",
          borderWidth: 2,
          hoverBackgroundColor: "#F16433",
          hoverBorderColor: "#5A73C0",
          data: data,
        },
      ],
      labels: labels,
    },
  });
};

function displayActivityCard(activity, user, date, userID) {
  const activityCard = document.querySelector('.activity-card-js');
  activityCard.innerHTML = `
  <p class="activity-text"><b>Miles Walked</b><br>${activity.calculateMilesWalked(date, user)} miles</p>
  <p class="activity-text"><b>Minutes Active</b><br>${activity.dailyMinutesActive(userID, date)} minutes</b></p>
  <p class="activity-text"><b>Step Goal</b><br>${activity.stepGoalMet(user, date)}</b></p>
  </p> 
  `;
  const activityButton = document.querySelector(".activity-button");
  activityButton.addEventListener("click", () => createActivityChart(activity, userID, date));

};

function createActivityChart(activity, userID, date) {
  const weeklyMinutes = activity.weeklyMinutes(userID, date);
  const labels = weeklyMinutes.map(days => days.date);
  const data = weeklyMinutes.map(days => days.minutesActive);
  clearChartArea();
  new Chart("chart", {
    type: 'bar',
    data: {
      datasets: [{
        label: "minutes",
        backgroundColor: "#FDC504",
        borderColor: "#3C4252",
        borderWidth: 2,
        hoverBackgroundColor: "#5A73C0",
        hoverBorderColor: "#5A73C0",
        data: data,
      }],
      labels: labels,
    }
  })
};

// Export Statements

export {
  displayUserCard,
  displayStepUserVsAllUsers,
  displayUserGreeting,
  displayhydrationCard,
  displaySleepCard,
  displayActivityCard,
  displayFriendsList,
  displayUserCardInitial,
};