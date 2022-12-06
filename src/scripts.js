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

const users = userData.map((user) => new User(user));
const userRepository = new UserRepository(users);

const userInfoCard = document.querySelector(".user-info");
let currentUser;

window.addEventListener("load", () => {
  currentUser = userRepository.users[generateRandomIndex()];
  userInfoCard.innerText = `Name: ${currentUser.name}
  Address: ${currentUser.address}
  Email: ${currentUser.email}
  Stride Length: ${currentUser.strideLength} feet
  Daily Step Goal: ${currentUser.dailyStepGoal} steps`;
});

function generateRandomIndex() {
  return Math.floor(Math.random() * userData.length);
}
