// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file
import './css/styles.css';


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';
console.log("User Data:", userData);

import SomeClassYouChangeTheName from './SomeClassYouChangeTheName';

const newUser = new User();

function generateRandomUser() {
    const randomUser = newUser[Math.floor(Math.random() * newUser.length)];
    return randomUser
};

function displayWelcomeMessage() {
    const randomUser = generateRandomUser();
    const firstName = randomUser.firstName;
    console.log(`Welcome, ${firstName}!`);
};