// CSS File Import
import './css/styles.css';

// Image Imports
import './images/turing-logo.png';

// JS File Imports

import UserRepository from './UserRepository';
import User from './User';

//Global variables
let hydration;
let user;
const userID = 1;

// Fetch APIs
fetch("https://fitlit-api.herokuapp.com/api/v1/users")
  .then(response => response.json())
  .then(userData => {
    const userBase = new UserRepository(userData.users);
    console.log(userBase)
    user = new User(userBase.getUser(userID));
    displayUserCard(user);
    displayStepUserVsAllUsers(user, userBase);
    displayUserGreeting(user);
})

fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
  .then((response) => response.json())
  .then((data) => {
    hydration = new Hydration(data.hydrationData);
    console.log(user.id, "user");
    displayhydrationCard(hydration);
  });

// Functions
function displayUserCard(user) {
  const userCard = document.querySelector('.user-info-card-js');
  userCard.innerHTML = `
    <p><b>Name:</b> ${user.name}</p>
    <p><b>Address:</b> ${user.address}</p>
    <p><b>Email:</b> ${user.email}</p>
    <p><b>Stride Length:</b> ${user.strideLength}</p>
    <p><b>Daily Step Goal</b> ${user.dailyStepGoal}</p>
    <p><b>Friends:</b> ${user.friends}</p>
  `;
}

function displayStepUserVsAllUsers(user, userBase) {
  const stepUserVsAllUsers = document.querySelector('.step-user-vs-all-users-js');
  stepUserVsAllUsers.innerHTML = `
    <p><b>Your Step Goal:</b> ${user.dailyStepGoal}</p>
    <p><b>Average Step Goal:</b> ${userBase.calculateAverageStepGoal()}</p>
  `;
}

function displayUserGreeting(user) {
const userNavbar = document.querySelector('.nav-bar');
userNavbar.innerHTML = `
<h2>Hi, ${user.getFirstName()}</h2>
`;
}