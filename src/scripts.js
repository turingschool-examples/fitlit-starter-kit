// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/fitlit-logo.png';
import './images/white-texture.png';
// An example of how you tell webpack to use a JS file
/*import userData from './data/users';
console.log("User Data:", userData);*/
// Example of one way to import functions from the domUpdates file.  You will delete these examples.


// Import DOM update functions and data
import { displayWelcomeMessage } from './domUpdates';
import users from './data/users';
import hydration from './data/hydration';


function generateRandomUser() {
  const randomIndex = Math.floor(Math.random() * users.users.length);
  return users.users[randomIndex];
}

function getAverageStepGoal() {
  const totalStepsGoal = users.users.reduce((total, user) => total + user.dailyStepGoal, 0);
  return totalStepsGoal / users.users.length;
}
function getAverageDailyFluidOunces(userId, hydration) {
  const userHydrationData = hydration.hydrationData.filter((userRecord) => userRecord.userId === userId);
  const totalOunces = userHydrationData.reduce((acc, userRecord) => acc += userRecord.numOunces, 0);
  return userHydrationData.length > 0 ? totalOunces / userHydrationData.length : 0;
}
getAverageDailyFluidOunces()

function getSpecificDay(userId, date) {
  const dayEntry = hydration.hydrationData.filter((userRecord) => userRecord.userID === userId);
  const dayOunces = dayEntry.find((userRecord) => userRecord.date === date)
  return dayOunces;
}


console.log(getSpecificDay(4, '2023/03/24'))
console.log(getAverageDailyFluidOunces())

function getWeeklyFluidOunces (userId, endDate, hydrationData) {
  //findIndex, math.max, slice
}


export { generateRandomUser, getAverageStepGoal };

// function for IT 1.1
// name: repurpose displayWelcomeMessage() with a new location and last name
