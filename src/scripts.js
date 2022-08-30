// Import CSS and Images
import "./css/styles.css";
import "./images/lighting.png";
import "./images/sandals.png";
import "./images/water-bottle.png";
import "./images/logo_transparent.png";
import "./images/avatar-male.png";
//Import fetch
import { promiseAll } from "./apiCalls.js";
//Import Classes
import User from "./User";
import UserRepository from "./UserRepository";

//Global Variables
let user;
let userRepository;
let allUsers;
let userData;
let hydrationData;
let sleepData;
// Query Selectors
const userDetails = document.querySelector(".user-card");
const friendsList = document.querySelector(".friends-card");
const stepDetails = document.querySelector(".step-card");

// EVent Listeners
window.addEventListener("load", promiseAll);

promiseAll().then((responses) => {
  userData = responses[0];
  user = new User(userData.userData[getRandomIndex(userData.userData)]);
  allUsers = userData.userData.map((user) => new User(user));
  userRepository = new UserRepository(allUsers);
  hydrationData = responses[1].hydrationData;
  sleepData = responses[2].sleepData;
  displayDashboard();
});

function getRandomIndex(userData) {
  return Math.floor(Math.random() * userData.length);
}

function displayDashboard() {
  displayUserDetails();
  displayFriends();
  displaySteps();
}

function displayUserDetails() {
  userDetails.innerHTML = "";
  userDetails.innerHTML += `
    <h3 class="user-name">Hi, ${user.getFirstName()}!</h3>
    <p class="email">Email: ${user.email} </p>
    <p class="address">Address: ${user.address} </p>
    <p class ="stride-length">Stride Length (ft): ${user.strideLength} </p>
    <p class ="step-goal">Daily Step Goal: ${user.dailyStepGoal}</p>`;
}

function displayFriends() {
  friendsList.innerHTML = "";
  const foundFriends = user.friends.map((friend) =>
    userRepository.findUserData(friend)
  );
  const firstNames = foundFriends.map((friend) => friend.getFirstName());
  firstNames.forEach(
    (friend) =>
      (friendsList.innerHTML += `<section class="friend">
    <img
    src="./images/avatar-male.png"
    alt="male avatar"
    height="50px"
    width="50px"
  />
  <section>${friend}</section>
  </section>`)
  );
}

function displaySteps() {
  stepDetails.innerHTML = "";
  const averageSteps = userRepository.findAverageStepGoal();
  const comparison = Math.round((user.dailyStepGoal / averageSteps) * 100);
  stepDetails.innerHTML += `<section class='step-comparison-message'><p>Average Step Goal for All Users: ${userRepository.avgUserStepGoal}.</p>
  <p>Your step goal is: ${user.dailyStepGoal}.</p>
  <p>Your daily step goal is ${comparison}% compared to all average users.</p></section>`;
}
