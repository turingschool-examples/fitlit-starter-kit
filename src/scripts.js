//imports
import users from './data/users';
import './css/styles.css';
import  displayUserInfo from './domUpdates.js'
import { fetchAllData, fetchUserData } from './apiCalls.js';

fetchAllData().then(data => {
    console.log('All fetched data:', data);
}).catch(error => {
    console.error('Error fetching data:', error);
});

//Global 
var usersArray = users.users
var randomUser = getUserDataByID(getRandomIndex(usersArray), usersArray)
var userSteps = avgSteps(usersArray)


//functions
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function getUserDataByID(userID, usersArray) {
    const userData = usersArray.find((user) => user.id === userID)
    return userData
}

function avgSteps(userArray) {
    const userSteps = userArray.reduce((acc, user) => {
        acc += user.dailyStepGoal / userArray.length
        return acc
    }, 0)
    return userSteps
}

// console.log('line28', randomUser)


displayUserInfo(randomUser)

export { 
    userSteps, 
}