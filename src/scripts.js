// This is the JavaScript entry file - your code begins here


// Do not delete or rename this file ********

// console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';
import User from './user'
import UserRepository from './UserRepository';
import { sampleUsers } from './sample-data';
import { fetchAllData } from './apiCalls';

let allUsers


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';

function initializeData() {
  Promise.all([fetchAllData('users'), fetchAllData('sleep'), fetchAllData('hydration')]).then(
    (data) =>  {
      allUsers = new UserRepository(data[0])
      console.log("users", data[0]);
      console.log("sleep", data[1]);
      console.log("hydration", data[2]);
    }
  );
}
initializeData()

console.log("all users 38", allUsers);

function getRandomUser(allUsers) {
  let randomUser = allUsers[Math.floor(Math.random() * allUsers.length)]
  newUser = new User(randomUser)
  console.log("new User", newUser);
}

getRandomUser();

