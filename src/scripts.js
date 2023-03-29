// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file
import './css/styles.css';
import User from './data/User';
import { userDataFetch } from './apiCalls';

let users, hydration, sleep, activity //other vars;

Promise.all([userDataFetch('users'), userDataFetch('hydration'), userDataFetch('sleep'), userDataFetch('activity')])
  .then(data => {
    users = data[0].users
    console.log("This is:", users)
    hydration = data[1].hydrationData
    console.log(hydration)
    sleep = data[2].sleepData
    console.log(sleep)
    activity = data[3].activityData
    console.log(activity)
  })
  .then(() => {
    displayUsers()
    // call functions here 
  })
function displayUsers() {
  console.log(users)
}

console.log(users)
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';
console.log("User Data:", userData);

import SomeClassYouChangeTheName from './SomeClassYouChangeTheName';
// import users from './data/users';

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

function displayStepGoalComparison(user, allUsers) {
    const userStepGoal = user.stepGoal;
    const totalStepGoals = allUsers.reduce((acc, user) => acc + user.stepGoal, 0);
    const averageStepGoal = totalStepGoals / allUsers.length;

    console.log(`Your step goal is ${userStepGoal}.`);
    console.log(`The average step goal amongst all users is ${averageStepGoal}.`)

    if (userStepGoal > averageStepGoal) {
        console.log(`Great job!!! Your step goal is above average.  You are KICKING ASS.`);
    } else if (userStepGoal < averageStepGoal) {
        console.log(`You can do it!!! Your step goal is below average.  TRY HARDER.`);
    } else {
        console.log(`You are right on track with the average step goal.  Way to be just AVERAGE.`)
    };
};