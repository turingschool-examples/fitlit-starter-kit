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



let 

//random ID
const getRandomID = () => {
    return Math.floor(Math.random() * userData.length)
}
//make all users from data into user objects
//could make more dynamic with params to do for every repo
const getAllUsers = () => {
    const createUsersArray = userData.map((user) => {
        return new User(user)
    });
 putUsersInRepo(createUsersArray) 
}
console.log(getAllUsers())

//put array of all user objects in user-repo
const putUsersInRepo = (usersArray) => {
    let userRepo = new UserRepository(usersArray)
    displayName(userRepo)
}

const getRandomUser = (userRepo) => {
    displayName(userRepo.getUserById(getRandomID))
}

const displayName = (user) => {

}

