// ######### Imports ###########
import UserRepository from './UserRepository';
import User from './User';
import Sleep from './Sleep';
import Hydration from './Hydration';
import { fetchAll } from './apiCalls';
import './css/styles.css';
import './images/turing-logo.png'
import './images/Activity.png'
import './images/sleeping.png'
import './images/Hydrate.png'
import './images/activity2.png'
import './images/Clipboard.png'
import './images/water.png'
import './images/realWater.png'
import './images/water-texture.png'
import './images/cloud-texture.png'
import './images/grid-texture.png'
import './images/blue-grid-texture.png'
import './images/road-texture.png'

// ######### Query Selectors ###########
const userWelcome =  document.querySelector('#userName')
const userInfo = document.querySelector('#userInfo')
const userStepComp = document.querySelector('#userSteps')
const hydrationCard = document.querySelector('#userHydro')
const sleepCard = document.querySelector('#userSleep')

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
    // console.log('data', data)
    users = data[0].userData;
    // console.log('users', users)
    sleep = data[1].sleepData;
    hydration = data[2].hydrationData;
    singleUser = new User(users[getRandomUser()]);
    // console.log('singleUser',singleUser)
    userRepository = new UserRepository(users);
    singleHydro = new Hydration(hydration);
    singleSleep = new Sleep(sleep);
    // console.log("single sleep", singleSleep.findUserDataID(singleUser.id))
    welcomeUser();
    displayUserData();
    displayStepGoalComp(userRepository);
    displayHydrationData(singleHydro);
    displaySleepData(singleSleep);
     convertFriendIdToName();

  })
}

//findFriends function
//***find 1 friend and pass in 1 id***
//call the function mutilple times for each friend
//forEach over the friends
//grab friend id's and pass the id in as an arguement
//iterate over the users data & use a filter/find to find the ID's that match
//maybe have a nested loop for multiple friendsArray
//if user id = friend id, return object


// ######### Event Listeners ###########
window.addEventListener('load', getFetch);

function findUserName(users,singleUser) {
  const friendsArray = users.filter(user => {
      return  user[user] === singleUser.id
    })
      return friendsArray
}

// ######### On-Load Function ###########
function getRandomUser() {
    return Math.floor(Math.random() * users.length);

}

function welcomeUser() {
    userWelcome.innerText = `Welcome Back, ${singleUser.returnUserName()} !`;
   
}

function convertFriendIdToName() {
  const friendsArray = []   
        singleUser.friends.forEach(friend => {
          console.log('blahblah',users)
          const matchingIds = users.filter(user => {
            console.log('is it friend',friend)
            return user.id === friend
          })
         matchingIds.forEach(user =>  user.push(user.name))
        //  console.log('name',user.name)
          friendsArray.push(user.name)
        })
        console.log('did it work?',friendsArray)
        return friendsArray    
  
  }


function displayUserData() {
    userInfo.innerHTML = `<ul class='user-data-details'>
  <li> Name: ${singleUser.name}</li>
  <li> Email: ${singleUser.email}</li>
  <li> Address: ${singleUser.address}</li>
  <li>Stride ${singleUser.strideLength}</li>
  <li>Step Goals  ${singleUser.dailyStepGoal}
  <li>Friends  ${singleUser.friends}
</ul>`
}

function displayStepGoalComp(userRepository) {
  userStepComp.innerHTML = `<p class='user-step-details'>Your daily step goal: ${singleUser.dailyStepGoal}</p> <br> vs <br><p class='user-step-details'> All user average step goals:  ${userRepository.getAllUserAvgStepGoals()}</p>`
    userStepComp.innerHTML =` <p class='user-step-details'>Your daily step goal :${singleUser.dailyStepGoal} <br> vs <br> All user average step goals:  ${userRepository.getAllUserAvgStepGoals()}</p>`
}

function displayHydrationData(singleHydro) {
  hydrationCard.innerHTML = `<p class='user-hydro-details-1'> Today's OZ drank: ${singleHydro.usersDailyOunces(singleUser.id)}</p> <br>  <br> <p class='user-hydro-details-2'> Average OZ drank per day: ${singleHydro.getLifeTimeOunces()}<br>
  <p class='user-hydro-details-3'> Weekly: ${singleHydro.getOuncesPerWeek(singleUser.id, "2020/01/22") } `

}

function displaySleepData(singleSleep) {
  sleepCard.innerHTML = `
  <p class='sleep-info-1'>Last night, you slept for ${singleSleep.getHrsSleptByDate(singleUser.id)} hours and
  received ${singleSleep.getSleepQualByDate(singleUser.id)} hours of quality sleep </p> <br>
   <p class='sleep-info-2'>Average hours slept: ${singleSleep.getAvgHrsSleptPerDay(singleUser.id)} hours <br></p>
   <p class='sleep-info-3'>Average hours of quality sleep: ${singleSleep.getAvgSleepQualPerDay(singleUser.id)} hours <br></p>
   <p class='sleep-info-4'>Hours slept (1-week): ${singleSleep.getHrsSleptPerWeek(singleUser.id, "2020/01/22")} <br><p>
   <p class='sleep-info-5'>Quality hours slept (1-week): ${singleSleep.getSleepQualPerWeek(singleUser.id, "2020/01/22")}</p>
  `
}
