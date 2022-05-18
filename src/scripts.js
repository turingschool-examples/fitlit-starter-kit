// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// console.log(userData,"<>>>>userData")
// console.log(fetchUserData, 'newuserdata')
// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';
import fetchUserData from './apiCalls';
import UserRepository from './UserRepository';
import User from './User'


const getAllUsers = () => {
    const createUsersArray = userData.map((user) => {
        return new User(user)
    });
return createUsersArray
}
console.log(getAllUsers())

const putUsersInRepo = () => {
    new UserRepository(getAllUsers())
}