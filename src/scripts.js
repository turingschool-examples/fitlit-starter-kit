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

function getAverageDailyFluidOunces(userId) {
  const userHydrationData = hydration.hydrationData.filter((userRecord) => userRecord.userID === userId);
  const totalOunces = userHydrationData.reduce((acc, userRecord) => acc += userRecord.numOunces, 0);
  return totalOunces / userHydrationData.length;
}


function getSpecificDay(userId, date) {
  const dayEntry = hydration.hydrationData.find(userRecord => userRecord.userID === userId && userRecord.date === date);
  return dayEntry ? dayEntry.numOunces : 0;
}


function getWeeklyFluidOunces (userId, endDate, hydrationData) {
  //findIndex, math.max, slice
}


//console logs to test if we're getting the right info
document.addEventListener('DOMContentLoaded', () => {
  const currentUser = generateRandomUser(users);
  console.log(`This users ID should be ${currentUser.id}`);

  const averageOunces = getAverageDailyFluidOunces(currentUser.id)
  console.log(averageOunces)

  const testDate = '2023/03/24'
  const ouncesForDay = getSpecificDay(currentUser.id, testDate)
  console.log(`fl consumed by user on ${testDate}`, ouncesForDay)
});


export { generateRandomUser, getAverageStepGoal };

// function for IT 1.1
// name: repurpose displayWelcomeMessage() with a new location and last name

