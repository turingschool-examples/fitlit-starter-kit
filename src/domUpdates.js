//import userData from './data/users.js';
//import hydration from './data/hydration.js';
import { generateRandomUser, getAverageDailyFluidOunces, getSpecificDay, getWeeklyFluidOunces, account, hydration, sleep, activity, } from './scripts'
import { Chart, registerables } from 'chart.js/auto';
import { stepChart, wklyHydChart, hydChart } from './chartSetup'
Chart.register(...registerables);


function setupEventListeners() {

  document.querySelector('.nav-bar').addEventListener('click', (e) => {
    if(!e.target.classList.contains('home-button')){
      setTimeout(() => {
        document.querySelector('img').classList.add('faded')
      }, 250);
    } else {
      setTimeout(() => {
        document.querySelector('img').classList.remove('faded')
      }, 250);
    }
  }) 
  window.onload = function () {
    //console.log('sfsjf', randomUser)
    // const randomUser = generateRandomUser();
    // display the average daily fluid ounces for the loaded user
    displayWelcomeMessage(randomUser);
    displayStepGoal(randomUser);
    updateAccountName(randomUser);
    updateAccountAddress(randomUser);
    updateAccountEmail(randomUser);
    updateAccountStride(randomUser);
    updateAccountStep(randomUser);
    updateAccountFriends(randomUser);
    displaySpecificDayOunces(randomUser.id);//fetch and display
    //displayWeeklyHydration(randomUser.id);//fetch and display
  
    const averageOunces = getAverageDailyFluidOunces(randomUser.id); 
    displayAverageDailyOunces(averageOunces);
    // const mostRecentOunces = 
  
    // ipdate the chart with initial data
    updateChart(randomUser, userData.users); // You might need to implement or adjust this function based on your setup
  };
}


// DOM update functions
function displayWelcomeMessage(user) {
  const welcomeMessageElement = document.querySelector('.welcome-message');
  welcomeMessageElement.textContent = `Welcome back, ${user.name.split(' ')[0]}!`;
}

function displayStepGoal(user) {
  const averageStepsElement = document.querySelector('.user-step');
  averageStepsElement.textContent = `${user.dailyStepGoal}`;
}

function compareStepGoalToAverage(averageStepGoal) {
  const stepGoalComparisonElement = document.querySelector('.average-step');
  stepGoalComparisonElement.textContent = `${averageStepGoal}`;
}

function updateAccountName(user) {
  const accountName = document.querySelector('#account-name');
  accountName.textContent = `user: ${user.name}`;
}

function updateAccountAddress(user) {
  const accountAddress = document.querySelector('#account-address');
  accountAddress.textContent = `address: ${user.address}`;
}

function updateAccountEmail(user) {
  const accountEmail = document.querySelector('#account-email');
  accountEmail.textContent = `email: ${user.email}`;
}

function updateAccountStride(user) {
  const accountStride = document.querySelector('#account-stride');
  accountStride.textContent = `stride length: ${user.strideLength} ft.`;
}

function updateAccountStep(user) {
  const accountStep = document.querySelector('#account-step');
  accountStep.textContent = `step goal: ${user.dailyStepGoal} steps`;
}

function updateAccountFriends(user) {
  const accountFriends = document.querySelector('#account-friends');
  accountFriends.textContent = `friends: ${friendIdsToNames(user)}`;
}

function displayAverageDailyOunces(averageOunces) {
  document.getElementById('averageDailyOunces').textContent = `${averageOunces.toFixed(2)} oz`;
}

function displaySpecificDayOunces(userId) {
  const ouncesForMostRecent = getSpecificDay(userId);
  document.getElementById('specificDayOunces').textContent = `${ouncesForMostRecent.toFixed(2)} oz`;
}

function displayWeeklyHydration(userId) {
  const weeklyOuncesList = document.getElementById('weeklyOuncesList');
  if (!weeklyOuncesList) {
    console.error('Weekly ounces list element not found.');
    return;
  }
  const weeklyData = getWeeklyFluidOunces(userId);

  // Clear the list before adding new items
  weeklyOuncesList.innerHTML = '';

  // Iterate over each day's data and append it to the list
  weeklyData.forEach(dayData => {
    const listItem = document.createElement('li');
    listItem.textContent = `Date: ${dayData.date}, Ounces: ${dayData.numOunces}`;
    weeklyOuncesList.appendChild(listItem);
  });
}
// Export all functions at the bottom as per your instructions
export {
  setupEventListeners,
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
  displayWeeklyHydration
};
/*function handleFetchedData(randomUser, account, hydration, sleep, activity) {
  
 const randomuser = generateRandomUser(account);//
 displayWelcomeMessage(randomUser)
 displayStepGoal(randomUser)
} */

// Event listener setup function


/*function handleFetchedData(account, hydration, sleep, activity) {
  // Here, use the fetched data to call your display/update functions
  // For example, if you have a function to display user info:
  const randomUser = generateRandomUser(account); // Assuming generateRandomUser is defined and properly imports 'account' data
  displayWelcomeMessage(randomUser);
  displayStepGoal(randomUser);
  updateAccountName(randomUser);
  updateAccountAddress(randomUser);
  updateAccountEmail(randomUser);
  updateAccountStride(randomUser);
  updateAccountStep(randomUser);
  updateAccountFriends(randomUser);
  // Call more functions as needed with the appropriate data
} */






// function to update the chart with the user's step goal and the average step goal from chatgpt
function updateChart(randomUser, allUsers) {
  const averageStepGoal = getAverageStepGoal(allUsers);
  compareStepGoalToAverage(averageStepGoal);
  const avgDailyHydration = getAverageDailyFluidOunces (randomUser.id);
  const dailyHydration = displaySpecificDayOunces (randomUser.id)
  const weeklyHydration = displayWeeklyHydration(randomUser.id)
  
  stepChart.data.datasets[0].data = [randomUser.dailyStepGoal, averageStepGoal];
  stepChart.options.scales.y.ticks.max = Math.max(randomUser.dailyStepGoal, averageStepGoal) + 500; // Adjust as necessary

  hydChart.data.datasets[0].data = [avgDailyHydration,dailyHydration];
  hydChart.options.scales.x.ticks.max = Math.max(avgDailyHydration,dailyHydration) + 10; // Adjust as necessary

  wklyHydChart.data.datasets[0].data = weeklyHydration;
  wklyHydChart.options.scales.x.ticks.max = Math.max(weeklyHydration) + 10; // Adjust as necessary
  
  hydChart.update();
  wklyHydChart.update();
  stepChart.update();
}

// setupEventListeners();
