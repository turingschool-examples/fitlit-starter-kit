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
import User from "./User";
import UserRepository from "./UserRepository";
//variables
const userRepository = new UserRepository(userData);
const randomIndex = getRandomIndex();
const userInfo = userRepository.findUserData(randomIndex);
const user = new User(userInfo);

// Query Selectors by class Name
const userName = document.querySelector(".user-card");
let friendsList = document.querySelector(".friends-list");

// EVent Listeners
window.addEventListener("load", displayUserDetails);

function getRandomIndex() {
  return Math.floor(Math.random() * userData.length);
}

function displayUserDetails() {
  displayFriends();
  userName.innerHTML += `
    <h3 class="user-name">Welcome, ${user.getFirstName()}!</h3>
    <ul>
        <li class="email"> Email: ${user.email} </li>
        <li class="address"> Address: ${user.address} </li>
        <li class ="stride-length"> Stride Length: ${user.strideLength} </li>
    </ul>`;
}

function displayFriends() {
  let friendName = "";
  user.friends.find((friend) => {
    const userInfo = userRepository.findUserData(friend);
    friendsList.innerHTML += `<li> ${userInfo.name} </li>`
  });

}

