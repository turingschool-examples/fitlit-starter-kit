// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/fitlit-logo.png';

// An example of how you tell webpack to use a JS file
/*import userData from './data/users';
console.log("User Data:", userData);*/
// Example of one way to import functions from the domUpdates file.  You will delete these examples.


// Import DOM update functions and data
import { displayWelcomeMessage, displayAverageDailyOunces, displaySpecificDayOunces, displayWeeklyHydration, setupHydrationInputListeners } from './domUpdates';
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
  return userHydrationData.length > 0 ? totalOunces / userHydrationData.length : 0;
}
getAverageDailyFluidOunces()

function getSpecificDay(userId, date) {
  const dayEntry = hydration.hydrationData.find(entry => entry.userID === userId && entry.date === date);
  return dayEntry ? dayEntry.numOunces : 0; // return numOunces, or 0 if not found
}

  function getWeeklyFluidOunces(userId, endDate, hydrationData) {
    // convert endDate to a Date object for easier comparison
    const endDateObj = new Date(endDate);
  
    // then get the start date by subtracting 6 days from the endDate
    const startDateObj = new Date(endDateObj);
    startDateObj.setDate(startDateObj.getDate() - 6);
  
    // filter hydration data for the specific user and within the date range
    const weeklyData = hydrationData.filter(userRecord => {
      const recordDateObj = new Date(userRecord.date);
      return userRecord.userID === userId && recordDateObj >= startDateObj && recordDateObj <= endDateObj;
    });
  
    // sort the data by date if needed
    weeklyData.sort((a, b) => new Date(a.date) - new Date(b.date));
  
    // return the filtered and sorted data
    return weeklyData.map(userRecord => ({
      date: userRecord.date,
      numOunces: userRecord.numOunces
    }));
  }



document.addEventListener('DOMContentLoaded', () => {
  const currentUser = generateRandomUser(users);
  console.log(`Testing for randomly selected user ID: ${currentUser.id}`);

  const averageOunces = getAverageDailyFluidOunces(currentUser.id, hydration);
  console.log(`Average daily fluid ounces for user ${currentUser.id}:`, averageOunces);

  const userId = currentUser.id; // ID of the current, randomly selected user
  const date = '2023/03/24'; // specific date we're interested in
  const ouncesForDay = getSpecificDay(userId, date, hydration.hydrationData);
  console.log(`Fluid ounces consumed by user ${userId} on ${date}:`, ouncesForDay);

  const endDate = '2023/03/31'; // the last date of the 7-day period you want to run back
  const weeklyHydrationData = getWeeklyFluidOunces(userId, endDate, hydration.hydrationData);

  console.log(`Weekly hydration data for user 47:`); //after obtaining the weeklyHydrationData, this should iterate through the array to log the date and numOunces for each entry
  weeklyHydrationData.forEach(entry => {
  console.log(`Date: ${entry.date}, Fluid Ounces: ${entry.numOunces}`);
});
});

export { generateRandomUser, getAverageStepGoal, getAverageDailyFluidOunces, getSpecificDay, getWeeklyFluidOunces };

// function for IT 1.1
// name: repurpose displayWelcomeMessage() with a new location and last name
