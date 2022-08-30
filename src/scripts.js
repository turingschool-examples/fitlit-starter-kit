console.log(userData, "<>>>>userData");
// Import CSS and Images
import "./css/styles.css";
import "./images/lighting.png";
import "./images/sandals.png";
import "./images/water-bottle.png";
import "./images/logo_transparent.png";
import "./images/avatar-male.png";

//Import Classes
import userData from "./data/users";
import User from "./User";
import UserRepository from "./UserRepository";

//Global Variables
const user = new User(userData[getRandomIndex(userData)]);
const allUsers = userData.map((user) => new User(user));
const userRepository = new UserRepository(allUsers);

// Query Selectors
const userDetails = document.querySelector(".user-card");
const friendsList = document.querySelector(".friends-card");

// EVent Listeners
window.addEventListener("load", displayDashboard);

function getRandomIndex(userData) {
  return Math.floor(Math.random() * userData.length);
}

function displayDashboard() {
  displayUserDetails();
  displayFriends();
}

function displayUserDetails() {
  userDetails.innerHTML = "";
  userDetails.innerHTML += `
    <h3 class="user-name">Hi, ${user.getFirstName()}!</h3>
    <p class="email">Email: ${user.email} </p>
    <p class="address">Address: ${user.address} </p>
    <p class ="stride-length">Stride Length (ft): ${user.strideLength} </p>
    <p class ="step-goal">Daily Step Goal: ${user.dailyStepGoal}</p>`
}

function displayFriends() {
  friendsList.innerHTML = "";
  const foundFriends = user.friends.map((friend) =>
    userRepository.findUserData(friend)
  );
  const firstNames = foundFriends.map((friend) => friend.getFirstName());
  firstNames.forEach(
    (friend) => (friendsList.innerHTML += `<section class="friend">
    <img
    src="./images/avatar-male.png"
    alt="male avatar"
    height="50px"
    width="50px"
  />
  <section>${friend}</section>
  </section>`)
  );
}

// function usersGoals() {
//   section += `
//         <h2> Goals </h2>
//         <p> ${user.dailyStepGoal} </p>`;
// }

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
