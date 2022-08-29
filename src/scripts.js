// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
console.log(userData, "<>>>>userData");
// An example of how you tell webpack to use a CSS file
import "./css/styles.css";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/turing-logo.png";

console.log("This is the JavaScript entry file - your code begins here.");

// An example of how you tell webpack to use a JS file

import userData from "./data/users";

import UserRepository from "./UserRepository";
//variables
const userRepository = new UserRepository(userData);
const randomIndex = getRandomIndex();
const userInfo = userRepository.findUserData(randomIndex);
const user = new User(userInfo);

// Query Selectors by class Name
const welcomeMessage = document.getElementsByClassName("welcome-message");
const userName = document.getElementsByClassName("user-info-card");
const friends = document.getElementsByClassName("friend-card");

// EVent Listeners
window.addEventListener("load", changeWelcomeMessage);
welcomeMessage.addEventListener(changeInnerText);

function getRandomIndex() {
  return Math.floor(Math.random() * userData.length);
}

function changeWelcomeMessage() {
  welcomeMessage.innerText = `Welcome, ${user.getFirstName()}!`;
  displayUserDetails();
}

function displayUserDetails() {
  userName.innerHTML += `
    <h3 class="user-name">Hi, ${user.getFirstName()}!</h3>
    <ul>
        <li class="email"> Email: ${user.email} </li>
        <li class="address"> ${user.address} </li>
        <li class ="stride-length"> ${user.strideLength} </li>
    </ul>`;

  displayFriends();
}

function displayFriends() {
  const userName = user.friends.map(
    (friend) => `<li> ${userInfo.findUserData(friend)} </li>`
  );

  friend.innerHTML += userName.reduce((acc, name) => {
    acc = name.name;
    return `<ul> ${acc} </ul>`;
  });
  usersGoals();
}

function usersGoals() {
  section += `
        <h2> Goals </h2>
        <p> ${user.dailyStepGoal} </p>`;
}


/// sleep section need a sleep class 

// function displySleep(){
//     sleepDetails.innerHTML += `
//         <ul>
//             <li> ${user.d}</li>
//             <li> </li>
//             <li> </li>
//             <li> </li>
//         </ul>
//     `
// }