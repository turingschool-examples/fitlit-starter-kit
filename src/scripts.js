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
import users from './data/users';

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

function displayWaterConsumed(user) {
    const waterConsumed = user.waterConsumed;
    console.log(`You have consumed ${waterConsumed} ounces of water today.`)
};

