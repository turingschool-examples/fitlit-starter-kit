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


// ######### Query Selectors ###########
const userWelcome =  document.querySelector('#userName')
const userInfo = document.querySelector('#userInfo')
const userStepComp = document.querySelector('#userSteps')
const hydrationCard = document.querySelector('#userSteps')
// ######### Global Variables ###########
  let singleUser;
  let usersData;
  let userRepository;
  let users;
  let sleep;
  let hydration;
// let hydrationData;
// let sleepData;


// ######### Promises ###########
const getFetch = () => {
  fetchAll()
  .then(data => {
    console.log('data', data)
    users = data[0].userData;
    console.log('users', users)
    sleep = data[1].sleepData;
    hydration = data[2].hydrationData;
    singleUser = new User(users[getRandomUser()]);
    userRepository = new UserRepository(users);
    welcomeUser();
    displayUserData();
    displayStepGoalComp(userRepository);

  })

}





// ######### Event Listeners ###########
window.addEventListener('load', getFetch);

function findUserName(users,singleUser) {

  const friendsArray = users.filter(user => {
      return  user[user] === singleUser.id


    })

   return friendsArray
}


// function convertFriendIDToName(userRepository) {
//  singleUser.friends.forEach(element => {
//          element =
//     })
// }







// ######### On-Load Function ###########
function getRandomUser() {
    return Math.floor(Math.random() * users.length);

}

function welcomeUser() {
    userWelcome.innerText = `Welcome Back, ${singleUser.returnUserName()} !`;
}

function displayUserData() {
    userInfo.innerHTML = `<ul>
  <li>${singleUser.name}</li>
  <li>${singleUser.email}</li>
  <li>${singleUser.address}</li>
  <li>Stride ${singleUser.strideLength}</li>
  <li>Step Goals  ${singleUser.dailyStepGoal}
  <li>Friends  ${singleUser.friends}
</ul>`

   //maybe we can use a function to conver the friends id into an array of names
}

function displayStepGoalComp(userRepository) {
    userStepComp.innerHTML = `Your daily step goal :${singleUser.dailyStepGoal} vs All user average  ${userRepository.getAllUserAvgStepGoals()}`
}
