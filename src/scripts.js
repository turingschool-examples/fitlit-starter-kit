import './css/styles.css';
import { userDataFetch } from './apiCalls';

let users, hydration, sleep, activity

import User from "../src/data/User.js"
import Hydration from "../src/data/Hydration.js"
import Sleep from "../src/data/sleep.js"

let welcomeMessage = document.querySelector("#headerWelcome");
let userName = document.querySelector("#userName");
let userEmail = document.querySelector("#userEmail");
let userAddress = document.querySelector("#userAddress");
let userStrideLength = document.querySelector("#userSL");
let userDailyStepGoal = document.querySelector("#userDSG");
let stepGoalComparison = document.querySelector("#stepGoalComp");
let userFriends = document.querySelector("#userFriends");
let dailyWater = document.querySelector("#dailyWater");
let weeklyWater = document.querySelector("#weeklyWater");
let dailySleep = document.querySelector("#dailySleep");
let weeklySleep = document.querySelector("#weeklySleepHours")

let date = new Date();
let currentDate = date.getFullYear() + "/" + ("0" + (date.getMonth()+1)).slice(-2) + "/"+ ("0" + date.getDate()).slice(-2);
let newUser;

window.addEventListener('load', function () {
  Promise.all([userDataFetch('users'), userDataFetch('hydration'), userDataFetch('sleep'), userDataFetch('activity')])
  .then(data => {
    users = new User (data[0].users)
    hydration = new Hydration(data[1].hydrationData)
    sleep = new Sleep(data[2].sleepData)
    activity = data[3].activityData
    generateRandomUser();
    displayWelcomeMessage();
    displayInfoCard();
    displayWaterConsumed();
    displayWeeklyWaterConsumption();
    displayDailySleep();
    displayWeeklySleep()
  })
});

function generateRandomUser() {
  newUser = users.getUserData(Math.floor(Math.random() * users.users.length));
};

function displayWelcomeMessage() {
  welcomeMessage.innerText = `Welcome, ${users.getUserFirstName(newUser.id)}!`
};

function displayInfoCard() {
    userName.innerText = newUser.name;
    userEmail.innerText = newUser.email;
    userAddress.innerText = newUser.address;
    userStrideLength.innerText = `Stride Length: ${newUser.strideLength}`;
    userDailyStepGoal.innerText = `Daily Step Goal: ${newUser.dailyStepGoal}`;
    userFriends.innerText = `Friends: ${newUser.friends}`;
    displayStepGoalComparison();
};

function displayStepGoalComparison() {
    const userStepGoal = newUser.dailyStepGoal;

    if (userStepGoal > users.getAverageStepGoal()) {
        stepGoalComparison.innerText = `Great job!!! Your step goal is above average.  You are KICKING ASS.`;
    } else if (userStepGoal < users.getAverageStepGoal()) {
        stepGoalComparison.innerText = `You can do it!!! Your step goal is below average.  TRY HARDER.`;
    } else {
        stepGoalComparison.innerText = `You are right on track with the average step goal.  Way to be just AVERAGE.`
    };
};

function displayWaterConsumed() {
  const currentDayEntry = hydration.getDailyOunces(newUser.id, currentDate);

  if (currentDayEntry) {
    dailyWater.innerText = `You have consumed ${currentDayEntry} ounces of water today.`
  } else {
    dailyWater.innerText = 'Drink more water you thirsty bitch!'
  }
};

function displayWeeklyWaterConsumption() {
  for (let i = 0; i < 7; i++) {
    weeklyWater.innerText += hydration.getWeeklyOunces(newUser.id)[i]
  }
};

function displayDailySleep() {
  const currentDayEntry = sleep.getHoursByDay(newUser.id, currentDate);

  if (currentDayEntry) {
    dailySleep.innerText = `You slept ${currentDayEntry} hours last night.`
  } else {
    dailySleep.innerText = 'You need to get more sleep!'
  }
};

function displayWeeklySleep() {
  
  const weeklySleepEntries = sleep.getWeekSleep(newUser.id, currentDate);
  console.log(Object.values(weeklySleepEntries)) 
  weeklySleepEntries.forEach(entry => {
   weeklySleep.innerText += `${entry.date}: ${entry.hoursSlept}
   `
  })
  
};