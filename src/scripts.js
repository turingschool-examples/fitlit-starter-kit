// This is the JavaScript entry file - your code begins here


// Do not delete or rename this file ********

console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';
import User from './user'
import UserRepository from './UserRepository';
import { sampleUsers } from './sample-data';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';


function getRandomUser() {
  let randomUser = sampleUsers[Math.floor(Math.random() * sampleUsers.length)]
  newUser = new User(randomUser)
}
getRandomUser();
console.log(newUser);


