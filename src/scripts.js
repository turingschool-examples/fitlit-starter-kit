// ######### Imports ###########
import UserRepository from './UserRepository';
import User from './User';
import Sleep from './Sleep';
import Hydration from './Hydration';
import { fetchAll } from './apiCalls';
import { postSleep } from './apiCalls';
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
import Activity from './Activity';

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
const userSleepPerNight = document.querySelector('#hoursSleptPerNight')
const userQualPerNight = document.querySelector('#qualHrsPerNight')
const userAvgSleep = document.querySelector('#avgHrsSlept')
const userAvgQualSleep = document.querySelector('#avgQualHrsSlept')
const userWeeklySleep = document.querySelector('#hrsSleptPerWeek')
const userWeeklyQualSleep = document.querySelector('#qualHrsSleptPerWeek')
const ouncesDrankToday = document.querySelector('#todayOunces')
const avgOuncesDrankPerDay = document.querySelector('#AvgOzPerDay')
const avgOuncesDrankPerWeek = document.querySelector('#AvgOzWeekly')



// ######### Global Variables ###########
  let singleUser;
  let usersData;
  let userRepository;
  let users;
  let sleep;
  let hydration;
  let activity;
  let singleHydro;
  let singleSleep;
  let singleActivity;

// ######### Promises ###########
const getFetch = () => {
fetchAll()
  .then(data => {
    users = data[0].userData;
    sleep = data[1].sleepData;
    hydration = data[2].hydrationData;
    activity = data[3].activityData;
    singleUser = new User(users[getRandomUser()]);
    console.log(singleUser)
    userRepository = new UserRepository(users);
    singleHydro = new Hydration(hydration);
    singleSleep = new Sleep(sleep);
    singleActivity = new Activity(activity);
    welcomeUser();
    displayUserData();
    displayStepGoalComp(userRepository);
    displayHydrationData(singleHydro);
    displaySleepData(singleSleep);
    postSleep(singleUser.id,newSleepInfo)
  })
};
const newSleepInfo = {hoursSlept:8,sleepQuality:2}






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
};

function displayHydrationData(singleHydro) {
  ouncesDrankToday.innerHTML = singleHydro.usersDailyOunces(singleUser.id)
  avgOuncesDrankPerDay.innerHTML = singleHydro.getLifeTimeOunces()
  avgOuncesDrankPerWeek.innerHTML = singleHydro.getOuncesPerWeek(singleUser.id, "2022/01/23")
};

function displaySleepData(singleSleep) {
  userSleepPerNight.innerText = singleSleep.getHrsSleptByDate(singleUser.id)
  userQualPerNight.innerText = singleSleep.getSleepQualByDate(singleUser.id)
  userAvgSleep.innerText = singleSleep.getAvgHrsSleptPerDay(singleUser.id)
  userAvgQualSleep.innerText = singleSleep.getAvgSleepQualPerDay(singleUser.id)
  userWeeklySleep.innerText = singleSleep.getHrsSleptPerWeek(singleUser.id, "2022/01/23")
  userWeeklyQualSleep.innerText = singleSleep.getSleepQualPerWeek(singleUser.id, "2022/01/23")
};
