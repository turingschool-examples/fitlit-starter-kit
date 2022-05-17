console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';

import UserRepository from './UserRepository';

import User from './User';



// ****** Global Variables ******
var user = new User(userData[0]);


// ****** querySelectors ******
var welcomeUser = document.querySelector('welcome-user');

function firstName() {
    welcomeUser.innerText = `Welcome ${user.returnFirstName(user)}!`;
}

firstName();


