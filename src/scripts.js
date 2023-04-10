// CSS File Import
import './css/styles.css';

// Image Imports
import './images/Activity_Logo.svg';
import './images/Hydration_Logo.svg';
import './images/Sleep_Logo.svg';
import './images/Site_Logo.svg';

// 3rd party library import
import Chart from 'chart.js/auto';

// Import API Calls
import './apiCalls';

//Query Selectors
const hydrationCard = document.querySelector(".hydration-holder");

// DOM Manipulation Functions
function displayUserCard(user) {
  const userCard = document.querySelector('.user-profile-info-js');
  userCard.innerHTML = `
    <p class="bold-text">Name</p> 
    <p>${user.name}</p>
    <p class="bold-text">Address</p> 
    <p>${user.address}</p>
    <p class="bold-text">Email</p> 
    <p>${user.email}</p>
  `;
}

// User Functions
function displayUserCardInitial(user) {
  const userCardName = document.querySelector('.user-card-name-js');
  const userInitial = user.getFirstName().charAt(0);
  userCardName.innerText = `${userInitial}`;
};

function displayStepUserVsAllUsers(user, userBase) {
  const stepUserVsAllUsers = document.querySelector('.user-steps-vs-all-js');
  stepUserVsAllUsers.innerHTML = `
    <p class="bold-text">Your Stride Length</p>
    <p>${user.strideLength}</p>
    <p class="bold-text">Your Step Goal</p> 
    <p>${user.dailyStepGoal}</p>
    <p class="bold-text">Average User Step Goal</p> 
    <p>${userBase.calculateAverageStepGoal()}</p>
  `;
};

function displayFriendsList(user, userBase) {
  const friendsList = document.querySelector('.user-friends-js');
  let userFriends = userBase.returnUserFriendsName(user.id);
  friendsList.innerHTML = `
    <p class="bold-text">Friends</p>
    <p>${userFriends.join(",  ")}</p>
  `;
}

function displayUserGreeting(user, date) {
  const userGreeting = document.querySelector('.welcome-header');
  const dayjs = require('dayjs')
  const customParseFormat = require('dayjs/plugin/customParseFormat');
  dayjs.extend(customParseFormat);
  const dateString = date;
  const dateToday = dayjs(dateString, 'YYYY/MM/DD');

  const formattedDateString = dateToday.format('dddd D MMMM');
  userGreeting.innerHTML = `
  <p class="welcome welcome-date">${formattedDateString}</p>
  <h2 class="welcome">Hi, ${user.getFirstName()}</h2>
`;
};

// Hydration Function
function displayhydrationCard(hydration, userID, date) {
  hydrationCard.innerHTML = `
    <p class="bold-text water-text">Average Water Consumed</p> 
    <p class="water-text">${hydration.calculateAverageFluidPerUser(userID)} ounces </p>
    <p class="bold-text water-text">Water Drank Today</p> 
    <p class="water-text">${hydration.dailyOuncesConsumed(userID,date)} ounces </p>
  `;
  const waterButton = document.querySelector("#hydrationButton");
  waterButton.addEventListener("click", () => createHydrationChart(hydration, userID, date));
};

// Sleep Functions
function displaySleepCard(sleep, userID, date) {
  const latestSleepData = document.querySelector(".latest-sleep-data-js");
  latestSleepData.innerHTML = `
    <p class="bold-text sleep-text">Hours Slept</p>
    <p class="sleep-text">${sleep.findSleepHoursOnDate(userID, date)}</p>
    <p class="bold-text sleep-text">Sleep Quality</p>
    <p class="sleep-text">${sleep.findSleepQualityOnDate(userID, date)}</p>
  `;
  const allTimeSleepData = document.querySelector(".all-time-sleep-data-js");
  allTimeSleepData.innerHTML = `
    <p class="bold-text sleep-text">Average Hours Slept</p>
    <p class="sleep-text">${sleep.calculateAverageSleepHours(userID)}</p>
    <p class="bold-text sleep-text">Average Sleep Quality</p>
    <p class="sleep-text">${sleep.calculateAverageSleepQuality(userID)}</p>
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

// Activity Function
function displayActivityCard(activity, user, date) {
  const activityCard = document.querySelector('.activity-card-js');
  activityCard.innerHTML = `
  <p class="bold-text activity-text">Miles Walked</p>
  <p class="activity-text"> ${activity.calculateMilesWalked(date, user)} miles</p>
  <p class="bold-text activity-text">Minutes Active</p>
  <p class="activity-text"> ${activity.dailyMinutesActive(user.id, date)} minutes</p>
  <p class="bold-text activity-text">Step Goal</p>
  <p class="activity-text">${activity.stepGoalMet(user, date)}</p>
  `;
  const activityButton = document.querySelector("#activityButton");
  activityButton.addEventListener("click", () => createActivityChart(activity, user.id, date));

};

// Chart Functions
function clearChartArea() {
  const chartArea = document.querySelector(".infographic");
  chartArea.classList.remove("chart-placeholder");
  chartArea.innerHTML = "<canvas id='chart'></canvas>";
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
        backgroundColor: "#F57630",
        borderColor: "#3C4252",
        borderWidth: 2,
        hoverBackgroundColor: "#F68C52",
        hoverBorderColor: "#3C4252",
        data: data,
      }],
      labels: labels,
    }
  })
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
        borderColor: "a25e9b",
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
          backgroundColor: "#F57630",
          borderColor: "#3C4252",
          borderWidth: 2,
          hoverBackgroundColor: "#F68C52",
          hoverBorderColor: "#3C4252",
          data: data,
        },
      ],
      labels: labels,
    },
  });
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
        backgroundColor: "#F57630",
        borderColor: "#3C4252",
        borderWidth: 2,
        hoverBackgroundColor: "#F68C52",
        hoverBorderColor: "#3C4252",
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