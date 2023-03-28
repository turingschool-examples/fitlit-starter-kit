import './css/styles.css';
// import './images/turing-logo.png';
import User from "./User"
import UserRespository from "./UserRepository"
import Hydration from "./Hydration"



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

function waterConsumedByWeek(user, startDate = null) {
    const waterConsumedWeekly = user.waterConsumed;
    let startIndex = startDate
}