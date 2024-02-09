import userData from './data/users.js';
import hydrationData from './data/hydration.js';
import { generateRandomUser, getAverageDailyFluidOunces, getSpecificDay, getWeeklyFluidOunces } from './scripts'
import { Chart, registerables } from 'chart.js/auto';
import { stepChart } from './chartSetup.js'
Chart.register(...registerables);

// DOM update functions
function displayWelcomeMessage(user) {
  const welcomeMessageElement = document.querySelector('.welcome-message');
  welcomeMessageElement.textContent = `Welcome back, ${user.name.split(' ')[0]}!`;
}

function displayStepGoal(user) {
  const averageStepsElement = document.querySelector('.user-step'); //add whatev we make the class
  averageStepsElement.textContent = `${user.dailyStepGoal}`;
}

function compareStepGoalToAverage(averageStepGoal) {
  const stepGoalComparisonElement = document.querySelector('.average-step');//add whatev we make the class
  stepGoalComparisonElement.textContent = `${averageStepGoal}`;
}

// function to get average step goal from userData
function getAverageStepGoal(users) {
  const totalStepGoal = users.reduce((sum, user) => sum += user.dailyStepGoal, 0);
  return totalStepGoal / users.length;
}

// account-name
function updateAccountName(user) {
  const accountName = document.querySelector('#account-name');
  accountName.textContent = `user: ${user.name}`;
}

// account-address
function updateAccountAddress(user) {
  const accountAddress = document.querySelector('#account-address');
  accountAddress.textContent = `address: ${user.address}`;
}

// account-email
function updateAccountEmail(user) {
  const accountEmail = document.querySelector('#account-email');
  accountEmail.textContent = `email: ${user.email}`;
}

// account-stride
function updateAccountStride(user) {
  const accountStride = document.querySelector('#account-stride');
  accountStride.textContent = `stride length: ${user.strideLength} ft.`;
}

//account-step
function updateAccountStep(user) {
  const accountStep = document.querySelector('#account-step');
  accountStep.textContent = `step goal: ${user.dailyStepGoal} steps`;
}

// account-friends
function updateAccountFriends(user) {
  const accountFriends = document.querySelector('#account-friends');
  accountFriends.textContent = `friends: ${friendIdsToNames(user)}`;
}

function friendIdsToNames(user) {
  var friendArr = user.friends
  var friendNames = userData.users.reduce((acc, account) => {
    if (friendArr.includes(account.id)) {
      acc.push(account.name)
    }
    return acc
  }, [])
  return friendNames.join(" - ")
}

function displayAverageDailyOunces(userId, hydrationData) {
  const ounces = getAverageDailyFluidOunces(userId, hydrationData);
  document.getElementById('averageDailyOunces').textContent = `${ounces.toFixed(2)} oz`;
}

function displaySpecificDayOunces(ounces) {
  document.getElementById('specificDayOunces').textContent = `${ounces} oz`;
}

// function to display weekly hydration data for the random user
function displayWeeklyHydration(userId, startDate, hydrationData) {
  const weeklyData = getWeeklyFluidOunces(userId, startDate, hydrationData);
  const weeklyOuncesList = document.getElementById('weeklyOuncesList');
  weeklyOuncesList.innerHTML = '';
  weeklyData.forEach(dayData => {
    const listItem = document.createElement('li');
    listItem.textContent = `Date: ${dayData.date}, Ounces: ${dayData.numOunces}`;
    weeklyOuncesList.appendChild(listItem);
    console.log('<><><>', dayData)
  });
}


// Event listener setup function
function setupEventListeners() {
  document.addEventListener('DOMContentLoaded', () => {
    const randomUser = generateRandomUser();
    displayWelcomeMessage(randomUser);
    displayStepGoal(randomUser);
    updateAccountName(randomUser);
    updateAccountAddress(randomUser);
    updateAccountEmail(randomUser);
    updateAccountStride(randomUser);
    updateAccountStep(randomUser);
    updateAccountFriends(randomUser);

    // display the average daily fluid ounces for the loaded user
    const averageOunces = getAverageDailyFluidOunces(randomUser.id);
    displayAverageDailyOunces(averageOunces);

    // listener for specific day hydration input
    document.getElementById('specificDayInput').addEventListener('change', function() {
      const selectedDate = this.value;
      const ouncesForTheDay = getSpecificDay(randomUser.id, selectedDate);
      displaySpecificDayOunces(ouncesForTheDay);
    });

    // listener for weekly hydration start date input
    document.getElementById('weeklyStartDayInput').addEventListener('change', function() {
      const startDate = this.value;
      const weeklyHydrationData = getWeeklyFluidOunces(randomUser.id, startDate);
      displayWeeklyHydration(weeklyHydrationData);
    });

    // ipdate the chart with initial data
    updateChart(randomUser, userData.users); // You might need to implement or adjust this function based on your setup
  });
}

// function to update the chart with the user's step goal and the average step goal from chatgpt
function updateChart(randomUser, allUsers) {
  const averageStepGoal = getAverageStepGoal(allUsers);
  compareStepGoalToAverage(averageStepGoal);

    stepChart.data.datasets[0].data = [randomUser.dailyStepGoal, averageStepGoal];
    stepChart.options.scales.y.ticks.min = 0; // Assuming min value is 0
    stepChart.options.scales.y.ticks.max = Math.max(randomUser.dailyStepGoal, averageStepGoal) + 10
    stepChart.update();
  }

setupEventListeners();


export {
  displayWelcomeMessage,
  displayStepGoal,
  compareStepGoalToAverage,
  updateAccountName,
  updateAccountAddress,
  updateAccountEmail,
  updateAccountStride,
  updateAccountStep,
  updateAccountFriends,
  displayAverageDailyOunces,
  displaySpecificDayOunces,
  displayWeeklyHydration,

};