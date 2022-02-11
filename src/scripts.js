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
import Hydration from './js/Hydration';
import UserRepository from './js/UserRepository';


const userName = document.querySelector('#userName');
const stepGoal = document.querySelector('#stepGoal');
const infoCard = document.querySelector('#infoCard');
const statsSection = document.querySelector('#statsSection');


const fetchData = () => {
  Promise.all([usersData, sleepData, activityData, hydrationData]).then(data => {
    handleData(data);
  });
}

const handleData = (data) => {
  const users = new UserRepository(data[0].userData);
  const currentUser = getRandomUser(users);
  currentUser.hydration = new Hydration(data[3].hydrationData, currentUser.id);
  console.log(users.users.find(user => user.id === currentUser.id))
  updateUser(currentUser, users);
  displayStats(currentUser);
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

const displayStats = (currentUser) => {
  console.log(currentUser.hydration.days)
  statsSection.innerHTML = `
  <article id="todaysIntake">
    <p>Your water intake for today is: ${currentUser.hydration.getDaily(currentUser.hydration.days[currentUser.hydration.days.length - 1].date)}
  </article>`
let weeklyIntake = document.createElement('article')
currentUser.hydration.getWeekly().forEach(day => weeklyIntake.innerHTML += `<p>On ${day.date} you drank: ${day.numOunces} fl oz</p>`)
  statsSection.appendChild(weeklyIntake);
}





window.onload = fetchData;
