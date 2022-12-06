// -----------------imports------------------------
// An example of how you tell webpack to use a JS file

import userData from './data/users';

import UserRepository from './UserRepository';

// ----------------variables-------------------------

const data = userData

const newUserRepository = new UserRepository(data);

// ------------------functions-----------------------------------



// -------------------eventListeners----------------

window.addEventListener("load", (event => {
    console.log(newUserRepository.generateRandomUser(data))
}))



// Do not delete or rename this file ********

console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
// import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

