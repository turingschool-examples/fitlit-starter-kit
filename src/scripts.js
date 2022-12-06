import "./css/styles.css";
import User from "./User";
import UserRepository from "./UserRepository";
import returnDataPromises from "./apiCalls";

//// query selectors
const userInfoCard = document.querySelector(".user-info");
const stepsWidgetCard = document.querySelector(".steps-widget")
const welcomeTitle = document.querySelector('.welcome-user-title');

////Global Variables
let userData;
let sleepData;
let hydrationData;
let userRepository;
let currentUser;

function loadhandler() {
  userRepository = new UserRepository(userData);
  randomizeCurrentUser()
  displayCurrentUserInfo()
  compareAndDisplayStepsGoal()
  updateWelcomeText()
}

function fetchApiCalls() {
  returnDataPromises().then(data => {
    userData = data[0].userData.map((user) => new User(user));
    sleepData = data[1]
    hydrationData = data[2]
    console.log(hydrationData)
    loadhandler()
  })
}

function generateRandomIndex() {
  return Math.floor(Math.random() * userData.length);
}

function randomizeCurrentUser () {
  currentUser = userRepository.users[generateRandomIndex()];
}

function displayCurrentUserInfo () {
  userInfoCard.innerText = `Name: ${currentUser.name}
  Address: ${currentUser.address}
  Email: ${currentUser.email}
  Stride Length: ${currentUser.strideLength} feet
  Daily Step Goal: ${currentUser.dailyStepGoal} steps`;
}

function compareAndDisplayStepsGoal() {
  let sortedUserRepository = userRepository.users
  sortedUserRepository.sort((a,b) => {return b.dailyStepGoal - a.dailyStepGoal})
  let numberRanked = sortedUserRepository.indexOf(currentUser)+1
  displayStepsGoalComparison(numberRanked)
}

function displayStepsGoalComparison(numberRanked) {
  stepsWidgetCard.innerHTML = `
  <h1 class="step-goal-widget-title">Your step goal</h1>
  <p class="steps-widget-info">
    Your step goal is: ${currentUser.dailyStepGoal}.<br>
    The average step goal of all users is ${userRepository.returnAverageDailyStepGoal()}. <br>
    You step goal ranks ${numberRanked} highest out of ${userRepository.users.length}. <br>
  </p>
  `
}

function updateWelcomeText() {
  welcomeTitle.innerText = `Welcome ${currentUser.getFirstName()}`;
}

///// event listeners
window.addEventListener("load", () => {
  fetchApiCalls()
});
