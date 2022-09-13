// ######### Imports ###########
import UserRepository from './UserRepository';
import User from './User';
import Sleep from './Sleep';
import Hydration from './Hydration';
import { fetchAll } from './apiCalls';
import './css/styles.css';
import './images/Activity.png'
import './images/Clipboard.png'
import './images/water-texture.png'
import './images/cloud-texture.png'
import './images/grid-texture.png'
import './images/blue-grid-texture.png'
import './images/road-texture.png'
import './images/milky-way.png'
import './images/galaxy.png'
import './images/constellation.png'
import './images/brain.png'

// ######### Query Selectors ###########
const userWelcome =  document.querySelector('#userName')
const userInfo = document.querySelector('#userInfo')
const userStepComp = document.querySelector('#userSteps')
const hydrationCard = document.querySelector('#userHydro')
const sleepCard = document.querySelector('#userSleep')
const userInfoName = document.querySelector('#name')
const userInfoEmail = document.querySelector('#email')
const userInfoAddress = document.querySelector('#address')
const userInfoStride = document.querySelector('#stride')
const userInfoFriends = document.querySelector('#friends')
const userStepGoal = document.querySelector('#stepGoal')
const allUserAverage = document.querySelector('#allUserAverage')
// ######### Global Variables ###########
  let singleUser;
  let usersData;
  let userRepository;
  let users;
  let sleep;
  let hydration;
  let singleHydro;
  let singleSleep;

// ######### Promises ###########
const getFetch = () => {
  fetchAll()
  .then(data => {
    users = data[0].userData;
    sleep = data[1].sleepData;
    hydration = data[2].hydrationData;
    singleUser = new User(users[getRandomUser()]);
    userRepository = new UserRepository(users);
    singleHydro = new Hydration(hydration);
    singleSleep = new Sleep(sleep);
    welcomeUser();
    displayUserData();
    displayStepGoalComp(userRepository);
    displayHydrationData(singleHydro);
    displaySleepData(singleSleep);
  })
};

// ######### Event Listeners ###########
window.addEventListener('load', getFetch);

// ######### On-Load Function ###########
function getRandomUser() {
  return Math.floor(Math.random() * users.length);
};

function welcomeUser() {
  userWelcome.innerText = `Welcome Back, ${singleUser.returnUserName()} !`;
};

function findUserName(users,singleUser) {
  const friendsArray = users.filter(user => {
    return  user[user] === singleUser.id
  })
  return friendsArray
};

function convertFriendIdToName() {
  let friendArray = []
  const friendIds = users.filter(user => {
    if(singleUser.friends.includes(user.id)) {
      return user.name;
    }
  });
  friendIds.forEach(friend => { friendArray.push(friend.name);
  });
    return friendArray;
};

function displayUserData() {
  userInfoName.innerText = singleUser.name
  userInfoEmail.innerText = singleUser.email
  userInfoAddress.innerText = singleUser.address
  userInfoStride.innerText = singleUser.strideLength
  userInfoFriends.innerText = convertFriendIdToName()
};

function displayStepGoalComp(userRepository) {
  userStepGoal.innerHTML = singleUser.dailyStepGoal
  allUserAverage.innerHTML = userRepository.getAllUserAvgStepGoals()
  // userStepComp.innerHTML = `<p class='user-step-details'>Your daily step goal: ${singleUser.dailyStepGoal}</p> <br> vs <br><p class='user-step-details'> All user average step goals:  ${userRepository.getAllUserAvgStepGoals()}</p>`
  //   userStepComp.innerHTML =` <p class='user-step-details'>Your daily step goal :${singleUser.dailyStepGoal} <br> vs <br> All user average step goals:  ${userRepository.getAllUserAvgStepGoals()}</p>`
};

function displayHydrationData(singleHydro) {
  hydrationCard.innerHTML = `<p class='user-hydro-details-1'> Today's OZ drank: ${singleHydro.usersDailyOunces(singleUser.id)}</p> <br> <p class='user-hydro-details-2'> Average OZ drank per day: ${singleHydro.getLifeTimeOunces()}</p> <br>
  <p class='user-hydro-details-3'> Weekly: ${singleHydro.getOuncesPerWeek(singleUser.id, "2020/01/22") } </p> `
};

function displaySleepData(singleSleep) {
  sleepCard.innerHTML = `
    <p class='sleep-info-1'>You slept for ${singleSleep.getHrsSleptByDate(singleUser.id)} hours last night <br>
    You received ${singleSleep.getSleepQualByDate(singleUser.id)} hours of quality sleep </p> <br>
     <p class='sleep-info-2'>Average hours slept: ${singleSleep.getAvgHrsSleptPerDay(singleUser.id)} hours <br></p>
     <p class='sleep-info-3'>Average hours of quality sleep: ${singleSleep.getAvgSleepQualPerDay(singleUser.id)} hours <br></p>
     <p class='sleep-info-4'>Hours slept (1-week): ${singleSleep.getHrsSleptPerWeek(singleUser.id, "2020/01/22")} <br><p>
     <p class='sleep-info-5'>Quality hours slept (1-week): ${singleSleep.getSleepQualPerWeek(singleUser.id, "2020/01/22")}</p>`
};
