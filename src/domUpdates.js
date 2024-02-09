import userData from './data/users.js';
import hydrationData from './data/hydration.js';
import { generateRandomUser, getAverageDailyFluidOunces, getSpecificDay, getWeeklyFluidOunces } from './scripts'
import { Chart, registerables } from 'chart.js/auto';
import { stepChart, hydChart } from './chartSetup'
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
  accountName.textContent = `${user.name}`;
}

// account-address
function updateAccountAddress(user) {
  const accountAddress = document.querySelector('#account-address');
  accountAddress.textContent = `${user.address}`;
}

// account-email
function updateAccountEmail(user) {
  const accountEmail = document.querySelector('#account-email');
  accountEmail.textContent = `${user.email}`;
}

// account-stride
function updateAccountStride(user) {
  const accountStride = document.querySelector('#account-stride');
  accountStride.textContent = `${user.strideLength} ft.`;
}

//account-step
function updateAccountStep(user) {
  const accountStep = document.querySelector('#account-step');
  accountStep.textContent = `${user.dailyStepGoal} steps`;
}

// account-friends
function updateAccountFriends(user) {
  const accountFriends = document.querySelector('#account-friends');
  accountFriends.textContent = `${friendIdsToNames(user)}`;
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

function displayAverageDailyOunces(ounces) {
  document.getElementById('averageDailyOunces').textContent = `${ounces.toFixed(2)} oz`;
}

function displaySpecificDayOunces(ounces) {
  document.getElementById('specificDayOunces').textContent = `${ounces} oz`;
}

// function to display weekly hydration data for the random user
function displayWeeklyHydration(userId, startDate) {
  const weeklyData = getWeeklyFluidOunces(userId, startDate);
  const weeklyOuncesList = document.getElementById('weeklyOuncesList');
  weeklyOuncesList.innerHTML = '';
  weeklyData.forEach(dayData => {
    const listItem = document.createElement('li');
    listItem.textContent = `Date: ${dayData.date}, Ounces: ${dayData.numOunces}`;
    weeklyOuncesList.appendChild(listItem);
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
    //displayAverageDailyOunces(randomUser);// not pushing?
    //displaySpecificDayOunces(randomUser); // pushing [object Object]?
    //displayWeeklyHydration(randomUser); // not pushing?

    // display the average daily fluid ounces for the loaded user
    const averageOunces = getAverageDailyFluidOunces(randomUser.id); // Assuming getAverageDailyFluidOunces now correctly accesses hydration data internally
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
      displayWeeklyHydration(randomUser.id, startDate); // Ensure this function is called with the correct arguments
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
  stepChart.options.scales.y.ticks.max = Math.max(randomUser.dailyStepGoal, averageStepGoal) + 500; // Adjust as necessary
  stepChart.update();
  hydChart.data.datasets[0].data = [randomUser.dailyStepGoal, averageStepGoal];
  hydChart.options.scales.y.ticks.min = 0; // Assuming min value is 0
  hydChart.options.scales.y.ticks.max = Math.max(randomUser.dailyStepGoal, averageStepGoal) + 500; // Adjust as necessary
  hydChart.update();
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