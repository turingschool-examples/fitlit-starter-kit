// CSS File Import
import './css/styles.css';

// Image Imports
import './images/turing-logo.png';

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

function displayhydrationCard(hydration, userID, date) {
  hydrationCard.innerHTML = `<p><b>Average Daily Water Consumption:</b> ${hydration.calculateAverageFluidPerUser(
    userID
  )} ounces </p>
   <p><b>Water consumed today:</b> ${hydration.dailyOuncesConsumed(
     userID,
     date
   )} ounces </p> 
  <p><b>Water consumed this week: </b> <br>${hydration.weeklyOuncesConsumed(userID, date).map(day => {
    return `${day.date}: ${day.numOunces} ounces<br>`;
  })} </p>
  `;
}

function displayLatestSleepData(sleep, userID, date) {
  const latestSleepData = document.querySelector('.latest-sleep-data-js');
  latestSleepData.innerHTML = `
    <p><b>Hours Slept:</b> ${sleep.findSleepHoursOnDate(userID, date)}</p>
    <p><b>Sleep Quality:</b> </p>
  `;
};

function displayAllTimeSleepData(sleep, userID) {
  const allTimeSleepData = document.querySelector('.all-time-sleep-data-js');
  allTimeSleepData.innerHTML = `
    <p><b>Average Hours Slept:</b> ${sleep.calculateAverageSleepHours(userID)}</p>
    <p><b>Average Sleep Quality:</b> ${sleep.calculateAverageSleepQuality(userID)}</p>
  `;
};

function displayActivityCard() {

}


// Export Statements

export { displayUserCard, displayStepUserVsAllUsers, displayUserGreeting, displayhydrationCard, displayLatestSleepData, displayAllTimeSleepData, displayActivityCard}
