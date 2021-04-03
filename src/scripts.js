// global variables

let userRepository;
let currentUser;
let dateToday = "2019/09/22";

const mainPage = document.querySelector('#mainPage');
const headerBanner = document.querySelector('#headerBanner');
const headerMessage = document.querySelector('#headerMessage');

const homeGrid = document.querySelector('#homeGrid');
const userInfo = document.querySelector('#userInfo');
const userName = document.querySelector('#name');
const address = document.querySelector('#address');
const email = document.querySelector('#email');
const stride = document.querySelector('#stride');
const picture = document.querySelector('#picture');
const stepGoal = document.querySelector('#stepGoal');
const userStepGoal = document.querySelector('#userStepGoal');
const avgStepGoal = document.querySelector('#avgStepGoal');

const hydrationGrid = document.querySelector('#hydrationGrid');
const dailyWater = document.querySelector('#dailyWater');
const weeklyWater = document.querySelector('#weeklyWater');

const sleepGrid = document.querySelector('#sleepGrid');
const dailySleep = document.querySelector('#dailySleep');
const weeklySleep = document.querySelector('#weeklySleep');
const qualitySleep = document.querySelector('#qualitySleep');

const activityGrid  = document.querySelector('#activityGrid');
const dailySteps = document.querySelector('#dailySteps');
const dailyActivity = document.querySelector('#dailyActivity');
const weeklySteps = document.querySelector('#weeklySteps');
const compareUsers = document.querySelector('#compareUsers');

const navBar = document.querySelector('#navBar');
const homeButton = document.querySelector('#homeButton');
const hydrationButton = document.querySelector('#hydrationButton');
const sleepButton = document.querySelector('#sleepButton');
const activityButton = document.querySelector('#activityButton');

// event listeners
homeButton.addEventListener('click', viewHome);
hydrationButton.addEventListener('click', viewHydration);
sleepButton.addEventListener('click', viewSleep);
activityButton.addEventListener('click', viewActivity);
window.addEventListener('load', loadPage);


// data model functions
function loadPage() {
  userRepository = new UserRepository;
  userRepository.populateUserData(userData);
  userRepository.populateHydrationData(hydrationData);
  userRepository.populateSleepData(sleepData);
  userRepository.populateActivityData(activityData);
  currentUser = userRepository.userData[0];
  console.log(currentUser.name);
  userName.innerText = currentUser.name;
  address.innerText = currentUser.address;
  email.innerText = currentUser.email;
  stride.innerText = currentUser.stride;
  homeUserDisplay();
}

// DOM functions

function homeUserDisplay() {
  const firstName = currentUser.returnFirstName();
  headerMessage.innerText = `Welcome ${firstName}`;
  userStepGoal.innerText = `Your goal is ${currentUser.dailyStepGoal} steps`;
  const allUserAvgStepGoal = userRepository.retrieveAvgStepGoal();
  avgStepGoal.innerText = `The average user's goal is ${allUserAvgStepGoal}`;
}

function displayUserHydration() {
  const dailyOz = userRepository.retrieveNumOuncesByDate(currentUser.id, dateToday);
  dailyWater.innerText = `You've had ${dailyOz} ounces of water today!`;
  let startDate = "2019/06/15";
  const weeklyOz = userRepository.calculateAvgWeeklyWater(currentUser.id, startDate);
  weeklyWater.innerText = `You've had ${weeklyOz} ounces of water on average during the week of ${startDate}`;
}

function viewHome() {
  homeGrid.classList.remove('hidden');
  hydrationGrid.classList.add('hidden');
  sleepGrid.classList.add('hidden');
  activityGrid.classList.add('hidden');
};

function viewHydration() {
  homeGrid.classList.add('hidden');
  hydrationGrid.classList.remove('hidden');
  sleepGrid.classList.add('hidden');
  activityGrid.classList.add('hidden');
  displayUserHydration();
};

function viewSleep() {
  homeGrid.classList.add('hidden');
  hydrationGrid.classList.add('hidden');
  sleepGrid.classList.remove('hidden');
  activityGrid.classList.add('hidden');
};

function viewActivity() {
  homeGrid.classList.add('hidden');
  hydrationGrid.classList.add('hidden');
  sleepGrid.classList.add('hidden');
  activityGrid.classList.remove('hidden');
};

// NEW CODE