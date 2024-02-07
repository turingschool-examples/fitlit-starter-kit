import userData from './data/users.js';
import hydrationData from './data/hydration.js';
import { generateRandomUser } from './scripts'
import { Chart, registerables } from 'chart.js/auto';
Chart.register(...registerables);

// ------------- * Event Listeners *
// document.addEventListener("DOMContentLoaded", () => {
//   displayWelcomeMessage(userObject)
  
  // displayUserInfo(userObject)
  // compareStepGoal(userObject)
// })



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
  accountStride.textContent = `${user.strideLength}ft`;
}

//account-step
function updateAccountStep(user) {
  const accountStep = document.querySelector('#account-step');
  accountStep.textContent = `${user.dailyStepGoal}ft`;
}

// account-friends
function updateAccountFriends(user) {
  const accountFriends = document.querySelector('#account-friends');
  accountFriends.textContent = `${friendIdsToNames(user)}`;
}


// function friendIdsToNames(user) {
//   const friendNames = user.map(id => {
//     const friend = users.find(user => user.id === id);
//     return friend 
//   })
// }

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


// Event listener setup function
function setupEventListeners() {
  document.addEventListener('DOMContentLoaded', () => {

    const randomUser = generateRandomUser();
    displayWelcomeMessage(randomUser);
    displayStepGoal(randomUser)
    updateAccountName(randomUser)
    updateAccountAddress(randomUser)
    updateAccountEmail(randomUser)
    updateAccountStride(randomUser)
    updateAccountStep(randomUser)
    updateAccountFriends(randomUser)

    const averageStepGoal = getAverageStepGoal(userData.users);
    compareStepGoalToAverage(averageStepGoal);

    myChart.data.datasets[0].data = [randomUser.dailyStepGoal, averageStepGoal];
    myChart.options.scales.y.ticks.min = 0; // Assuming min value is 0
    myChart.options.scales.y.ticks.max = Math.max(randomUser.dailyStepGoal, averageStepGoal) + 10
    myChart.update();

  });

  });

  // document.querySelector('.home-button').addEventListener('click', WhatEverWeWantLikehandleHomeButtonClick);
}


setupEventListeners();

const ctx = document.getElementById('stepChart').getContext('2d');

// Set custom height and width for the chart
ctx.canvas.height = 100; // Set the height here
ctx.canvas.width = 500; // Set the width here

// Define chart data
const stepChartData = {
  labels: ['Your step goal', 'Average step goal'],
  datasets: [{
    label: '',
    data: [],
    backgroundColor: [
      '#1a1a1a',
      '#1a1a1a',
    ],
    borderColor: [
      '#1a1a1a',
      '#1a1a1a',
    ],
    borderWidth: 1
  }]
};

// Define chart options
const options = {
  indexAxis: 'y', // This sets the orientation to horizontal
  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        color: 'black' // Change font color here
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: 'black' // Change font color here
      }
    }
  },
  plugins: {
    legend: {
      display: false // Hide legend
    }
  }
};

// Create the horizontal bar chart
const myChart = new Chart(ctx, {
  type: 'bar', // Set chart type to bar
  data: stepChartData,
  options: options
});

// Export all the functions you need to expose
export {
  displayWelcomeMessage,
  displayStepGoal,
  compareStepGoalToAverage,
  // ... any other functions you wish to export
};