//imports
import users from './data/users';

//Global 
var usersArray = users.users
var randomUser = getUserDataByID(getRandomIndex(usersArray), usersArray)
var userSteps = avgSteps(usersArray)


//functions
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function getUserDataByID(UserID, usersArray) {
    const userData = usersArray.find((user) => user.id === UserID)
    return userData
}

function avgSteps(userArray) {
    const userSteps = userArray.reduce((acc, user) => {
        acc += user.dailyStepGoal / userArray.length
        return acc
    }, 0)
    return userSteps
}



module.export = {
    getUserDataByID,
    avgSteps,

}
