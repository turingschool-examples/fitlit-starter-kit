import userData from './data/users.js';
import hydration from './data/hydration.js';
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

function displayAverageDailyOunces(userId) {
  const ounces = getAverageDailyFluidOunces(userId)
  document.getElementById('averageDailyOunces').textContent = `${ounces.toFixed(2)} oz`;
}

function displaySpecificDayOunces(ounces) {
  const ouncesForMostRecent = getSpecificDay();
  document.getElementById('specificDayOunces').textContent = `${ounces.toFixed(2)} oz`
}

// function to display weekly hydration data for the random user
function displayWeeklyHydration(userId) {
  const weeklyData = getWeeklyFluidOunces(userId);
  const weeklyOuncesList = document.getElementById('weeklyOuncesList');
  weeklyOuncesList.innerHTML = `${weeklyData} Oz`;
  // weeklyData.forEach(dayData => {
  //   const listItem = document.createElement('li');
  //   listItem.textContent = `Date: ${dayData.date}, Ounces: ${dayData.numOunces}`;
  //   weeklyOuncesList.appendChild(listItem);
  // });
}

// Event listener setup function
function setupEventListeners() {
  document.querySelector('.nav-bar').addEventListener('click', (e) => {
    if(!e.target.classList.contains('home-button')){
      document.querySelector('img').classList.add('faded')
    } else {
      document.querySelector('img').classList.remove('faded')
    }
  })
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
    displaySpecificDayOunces(randomUser.id);//fetch and display
    displayWeeklyHydration(randomUser.id);//fetch and display

    // display the average daily fluid ounces for the loaded user
    const averageOunces = getAverageDailyFluidOunces(randomUser.id); 
    displayAverageDailyOunces(averageOunces);
    const mostRecentOunces = 





    // ipdate the chart with initial data
    updateChart(randomUser, userData.users); // You might need to implement or adjust this function based on your setup
  });
}

// function to update the chart with the user's step goal and the average step goal from chatgpt
function updateChart(randomUser, allUsers) {
  const averageStepGoal = getAverageStepGoal(allUsers);
  compareStepGoalToAverage(averageStepGoal);
  const avgDailyHydration = getAverageDailyFluidOunces (randomUser.id);
  const dailyHydration = 50
  const weeklyHydration = 25

  stepChart.data.datasets[0].data = [randomUser.dailyStepGoal, averageStepGoal];
  stepChart.options.scales.y.ticks.max = Math.max(randomUser.dailyStepGoal, averageStepGoal) + 500; // Adjust as necessary

  hydChart.data.datasets[0].data = [avgDailyHydration, dailyHydration, weeklyHydration];
  hydChart.options.scales.y.ticks.max = Math.max(dailyHydration) + 500; // Adjust as necessary
  
  hydChart.update();
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