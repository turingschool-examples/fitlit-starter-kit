// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


// An example of how you tell webpack to use a JS file
import {
  usersData,
  sleepData,
  activityData,
  hydrationData
} from './apiCalls';

import UserRepository from './js/UserRepository';


const userName = document.querySelector('#userName');
const stepGoal = document.querySelector('#stepGoal');
const infoCard = document.querySelector('#infoCard');


const fetchData = () => {
  Promise.all([usersData, sleepData, activityData, hydrationData]).then(data => {
    handleData(data);
  });
}

const handleData = (data) => {
  const users = new UserRepository(data[0].userData);
  const currentUser = getRandomUser(users);
  updateUser(currentUser, users);
}

const getRandomUser = (users) => {
  return users.getUser(Math.floor(Math.random() * users.users.length));
}

const updateUser = (currentUser, users) => {
  let friends = `Friends: `
  userName.innerText = `Welcome ${currentUser.getName()}`;
  stepGoal.innerText = `Your step goal: ${currentUser.dailyStepGoal} / Average: ${users.averageStepGoal()}`
  currentUser.friends.forEach(friend => {
    friends += `${users.getUser(friend).getName()}, `
  });
  friends = friends.slice(0, -2)
  infoCard.innerHTML = `
    <p>Name: ${currentUser.name}</p>
    <p>Id: ${currentUser.id}</p>
    <p>Address: ${currentUser.address}</p>
    <p>Email: ${currentUser.email}</p>
    <p>Stride Length: ${currentUser.strideLength}</p>
    <p>${friends}</p>`;
}




window.addEventListener('load', fetchData);
