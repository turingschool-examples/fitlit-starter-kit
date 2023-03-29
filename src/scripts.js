import './css/styles.css';
import User from './data/User';
import { userDataFetch } from './apiCalls';
import userData from './data/users';
console.log("User Data:", userData);

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


console.log('This is the JavaScript entry file - your code begins here.');




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