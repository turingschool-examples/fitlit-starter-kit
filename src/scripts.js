// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
const userRepository = new UserRepository(userData);
const randomIndex = getRandomIndex();
const userInfo = userRepository.findUserData(randomIndex);
const user = new User(userInfo);
console.log(userData, "<>>>>userData");
// An example of how you tell webpack to use a CSS file
import "./css/styles.css";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/turing-logo.png";

console.log("This is the JavaScript entry file - your code begins here.");

// An example of how you tell webpack to use a JS file

import userData from "./data/users";

import UserRepository from "./UserRepository";

// Query Selectors
const welcomeMessage = document.guerySelector(".welcome-message");
const userName = document.querySelector(".user-name-card");
const friends = document.querySelector(".friends");

// EVent Listeners
welcomeMessage.addEventListener(changeInnerText);

function getRandomIndex() {
  const userDataIndex = Math.floor(Math.random() * userData.length);
}
function changeWelcomeMessage() {
  welcomeMessage.innerText = `Welcome, ${user.getFirstName()}!`;
}
function displayUserDetails() {
  userName.innerHTML += `<h3 class="user-name">Hi, ${user.getFirstName()}!</h3>
    <p class="email">${user.email}</p>
    <p class="address">${user.address}</p>
    <p class ="stride-length">Stride Length: ${user.strideLength}</p>`;
}
function displayFriends() {
  user.friends.map((friend) => {
    const userFriend = userRepository.findUserData(friend);
    return (friends.innerHTML += `
      <li>${userFriend.name}</li>
      `);
  });
}
