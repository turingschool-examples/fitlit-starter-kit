import './css/styles.css';
// import './images/turing-logo.png';
import User from "../src/data/User.js"
// import Hydration from "./Hydration"
import userTestData from '../test/user-test-data';

let welcomeMessage = document.querySelector("#headerWelcome");
let userName = document.querySelector("#userName");
let userEmail = document.querySelector("#userEmail");
let userAddress = document.querySelector("#userAddress");
let userStrideLength = document.querySelector("#userSL");
let userDailyStepGoal = document.querySelector("#userDSG");
let userFriends = document.querySelector("#userFriends");

let newUser;

window.addEventListener('load', function() {
    generateRandomUser();
    displayWelcomeMessage();
    displayInfoCard();
});

function generateRandomUser() {
    newUser = new User(userTestData[Math.floor(Math.random() * userTestData.length)]);
};

function displayWelcomeMessage() {
    welcomeMessage.innerText = `Welcome, ${newUser.getUserFirstName()}!`
};

function displayInfoCard() {
    userName.innerText = newUser.name;
    userEmail.innerText = newUser.email;
    userAddress.innerText = newUser.address;
    userStrideLength.innerText = `Stride Length: ${newUser.strideLength}`;
    userDailyStepGoal.innerText = `Daily Step Goal: ${newUser.dailyStepGoal}`;
    userFriends.innerText = `Friends: ${newUser.friends}`;
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

function waterConsumedByWeek(user, startDate = null) {
    const waterConsumedWeekly = user.waterConsumed;
    let startIndex = startDate
};