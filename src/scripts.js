// This is the JavaScript entry file - your code begins here
// Query Selectors
let firstName = document.getElementById("firstName");

let userID = document.getElementById("userId");
let userName = document.getElementById("userName");
let userAddress = document.getElementById("userAddress");
let userEmail = document.getElementById("userEmail");
let userStrideLength = document.getElementById("userStrideLength");

let yourGoal = document.getElementById("yourGoal");
let allUsersGoals = document.getElementById("allUsersGoals");
let averageStatus = document.getElementById("averageStatus");
let userStepDifference = document.getElementById("userStepDifference");

let ouncesConsumeDaily = document.getElementById("ouncesConsumedDaily");
let ouncesConsumedWeekly = document.getElementById("ouncesConsumedWeekly");

let latestDaySleep = document.getElementById("latestDaySleep");
let latestDaySleepQuality = document.getElementById("latestDaySleepQuality");
let latestWeekSleep = document.getElementById("latestWeekSleep");
let latestWeekSleepQuality = document.getElementById("latestWeekSleepQuality");
let allTimeSleepQuality = document.getElementById("allTimeSleepQuality");
let allTimeSleepHours = document.getElementById("allTimeSleepHours");

// Event listeners
window.addEventListener("load", initializeData);

// An example of how you tell webpack to use a CSS file
import "./css/styles.css";
import User from "./User";
import UserRepository from "./UserRepository";
import { fetchAllData } from "./apiCalls";

// Global Variables
let currentSleep;
let currentHydration;

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/turing-logo.png";

console.log("This is the JavaScript entry file - your code begins here.");

// An example of how you tell webpack to use a JS file
import Hydration from "./Hydration";
import Sleep from "./Sleep";

function initializeData() {
  Promise.all([
    fetchAllData("users"),
    fetchAllData("sleep"),
    fetchAllData("hydration"),
  ]).then((data) => {
    let allUsers = data[0].userData.map((user) => {
      let currentUser = new User(user);
      return currentUser;
    });
    const userRepository = new UserRepository(allUsers);

    let userHydration = data[2].hydrationData.map((hydroUser) => {
      currentHydration = new Hydration(hydroUser);
      return currentHydration;
    });

    let allSleep = data[1].sleepData.map((sleepUser) => {
      currentSleep = new Sleep(sleepUser);
      return currentSleep;
    });

    let randomUser =
      userRepository.userData[
      Math.floor(Math.random() * userRepository.userData.length)
      ];
    renderUserInfo(randomUser, userRepository);
    renderHydrationData(userHydration, randomUser);
    renderSleepData(allSleep, randomUser);
  });
}

function renderUserInfo(newUser, allUsers) {
  firstName.innerText = ` ${newUser.getUserFirstName()}`;

  userID.innerText = ` ${newUser.id}`;
  userName.innerText = ` ${newUser.name}`;
  userAddress.innerText = ` ${newUser.address}`;
  userEmail.innerText = ` ${newUser.email}`;
  userStrideLength.innerText = ` ${newUser.strideLength}`;

  yourGoal.innerText = ` ${newUser.dailyStepGoal}`;
  allUsersGoals.innerText = ` ${allUsers.getUsersAverageStepGoals()}`;

  let status;
  let stepDifference;
  if (newUser.dailyStepGoal < allUsers.getUsersAverageStepGoals()) {
    status = "Below";
    stepDifference =
      allUsers.getUsersAverageStepGoals() - newUser.dailyStepGoal;
  } else if (newUser.dailyStepGoal > allUsers.getUsersAverageStepGoals()) {
    status = "Above";
    stepDifference =
      newUser.dailyStepGoal - allUsers.getUsersAverageStepGoals();
  } else {
    status = on;
    stepDifference = "100%";
  }

  averageStatus.innerText = ` ${status}`;
  userStepDifference.innerText = ` ${stepDifference}`;
}

function renderHydrationData(userHydration, randomUser) {
  ouncesConsumeDaily.innerText = ` ${currentHydration.mostRecentOunces(userHydration, randomUser.id).numOunces
    }`;
  ouncesConsumedWeekly.innerText = ` 
  ${currentHydration.userOuncesPerWeek(
    userHydration,
    randomUser.id
  )}`;
}

function renderSleepData(allSleep, randomUser) {
  latestDaySleep.innerText = ` ${currentSleep.mostRecentSleep(allSleep, randomUser.id).hoursSlept
    }`;
  latestDaySleepQuality.innerText = ` ${currentSleep.mostRecentSleep(allSleep, randomUser.id).sleepQuality
    }`;
  latestWeekSleep.innerText = `
  ${currentSleep.userHoursSleptForWeek(
    allSleep,
    randomUser.id
  )}`;
  latestWeekSleepQuality.innerText = ` ${currentSleep.getTotalUserQualitySleep(allSleep, randomUser.id)
    }`;
  allTimeSleepQuality.innerText = ` 
  ${currentSleep.userQualityForWeek(
    allSleep,
    randomUser.id
  )}`;
  allTimeSleepHours.innerText = ` ${currentSleep.getTotalUserAverageHoursSleep(
    allSleep,
    randomUser.id
  )}`;
}
