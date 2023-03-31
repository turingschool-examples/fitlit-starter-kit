// CSS File Import
import './css/styles.css';

// Image Imports
import './images/turing-logo.png';
import './images/barbell.png';
import './images/sleep.png';
import './images/water.png';

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
    <p><b>Name:</b> ${user.name}</p>
    <p><b>Address:</b> ${user.address}</p>
    <p><b>Email:</b> ${user.email}</p>
    <p><b>Stride Length:</b> ${user.strideLength}</p>
    <p><b>Daily Step Goal</b> ${user.dailyStepGoal}</p>
    <p><b>Friends:</b> ${user.friends}</p>
  `;
}

function displayStepUserVsAllUsers(user, userBase) {
  const stepUserVsAllUsers = document.querySelector('.user-steps-vs-all-js');
  stepUserVsAllUsers.innerHTML = `
    <p><b>Your Step Goal:</b> ${user.dailyStepGoal}</p>
    <p><b>Average Step Goal:</b> ${userBase.calculateAverageStepGoal()}</p>
  `;
}

function displayUserGreeting(user) {
  const userGreeting = document.querySelector('.welcome-header');
  userGreeting.innerHTML = `
<h2>Hi, ${user.getFirstName()}</h2>
`;
}

function clearChartArea() {
  const chartArea = document.querySelector(".infographic");
  chartArea.innerHTML = "<canvas id='chart'></canvas>";
}

function displayhydrationCard(hydration, userID, date) {
  hydrationCard.innerHTML = `<p class="water-text"><b class="water-header">Average Water Consumption</b> ${hydration.calculateAverageFluidPerUser(
    userID
  )} ounces </p>
   <p class="water-text"><b class="water-header">Water consumed today</b> ${hydration.dailyOuncesConsumed(
     userID,
     date
   )} ounces </p> 
    <button class="hydration-button">Weekly Water</button>
  </p>
  `;
  const waterButton = document.querySelector(".hydration-button");
  waterButton.addEventListener("click", () => createHydrationChart(hydration, userID, date));
}

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
}

function displaySleepCard(sleep, userID, date) {
  const latestSleepData = document.querySelector(".latest-sleep-data-js");
  latestSleepData.innerHTML = `
    <p class="sleep-text"><b>Hours Slept</b><br>${sleep.findSleepHoursOnDate(userID, date)}</p>
    <p class="sleep-text"><b class="sleep-header">Sleep Quality</b><br>${sleep.findSleepQualityOnDate(userID, date)}</p>
  `;
  const allTimeSleepData = document.querySelector(".all-time-sleep-data-js");
  allTimeSleepData.innerHTML = `
    <p class="sleep-text"><b class="sleep-header">Average Hours Slept</b><br>${sleep.calculateAverageSleepHours(
      userID
    )}</p>
    <p class="sleep-text"><b class="sleep-header">Average Sleep Quality</b><br>${sleep.calculateAverageSleepQuality(
      userID
    )}</p>
  `;
  const hoursSleptButton = document.querySelector("#hours-slept-button");
  hoursSleptButton.addEventListener("click", () =>
    createHoursSleptChart(sleep, userID, date)
  );
  const qualitySleptButton = document.querySelector(
    "#weekly-sleep-quality-button"
  );
  qualitySleptButton.addEventListener("click", () =>
    createSleepQualityChart(sleep, userID, date)
  );
}

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
}

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
}

function displayActivityCard(activity, user, date, userID) {
  const activityCard = document.querySelector('.activity-card');
  activityCard.innerHTML = `
  <p class="activity-text"><b class="activity-header">Miles Walked</b><br>${activity.calculateMilesWalked(date, user)} miles</p>
  <p class="activity-text"><b class="activity-header">Minutes Active</b><br>${activity.dailyMinutesActive(userID, date)} minutes</b></p>
  <p class="activity-text"><b class="activity-header">Step Goal Met</b><br>${activity.stepGoalMet(user, date)}</b></p>
 
  `
 };

// Export Statements

export {
  displayUserCard,
  displayStepUserVsAllUsers,
  displayUserGreeting,
  displayhydrationCard,
  displaySleepCard,
  displayActivityCard,
};