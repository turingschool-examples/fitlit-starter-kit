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
  hydrationCard.innerHTML = `<p><b>Average Water Consumption:</b> ${hydration.calculateAverageFluidPerUser(
    userID
  )} ounces </p>
   <p><b>Water consumed today:</b> ${hydration.dailyOuncesConsumed(
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
    <p><b>Hours Slept:</b> ${sleep.findSleepHoursOnDate(userID, date)}</p>
    <p><b>Sleep Quality:</b> </p>
  `;
  const allTimeSleepData = document.querySelector(".all-time-sleep-data-js");
  allTimeSleepData.innerHTML = `
    <p><b>Average Hours Slept:</b> ${sleep.calculateAverageSleepHours(
      userID
    )}</p>
    <p><b>Average Sleep Quality:</b> ${sleep.calculateAverageSleepQuality(
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

// Export Statements

export {
  displayUserCard,
  displayStepUserVsAllUsers,
  displayUserGreeting,
  displayhydrationCard,
  displaySleepCard,
  displayActivityCard,
};

function displayActivityCard(activity, user, date, userID) {
 const activityCard = document.querySelector('.CHANGEME');
 activityCard.innerHTML = `
 <p><b>Miles Walked:</b> ${activity.calculateMilesWalked(date, user)} miles</p>
 <p><b>Minutes Active:</b> ${activity.dailyMinutesActive(userID, date)} minutes</b></p>
 <p><b>Step Goal Met:</b> ${activity.stepGoalMet(user, date)}</b></p>

 `
}