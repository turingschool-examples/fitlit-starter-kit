// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import "./css/styles.css";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/turing-logo.png";


// An example of how you tell webpack to use a JS file

// Example of one way to import functions from the domUpdates file.  You will delete these examples.
import { updateUserInfo } from "./domUpdates";


// exampleFunction1('Travis');
// exampleFunction2('Travis')

function getUserData(userID, users) {
  let findUser = users.find((user) => {
    return user.id === userID;
  });
  let updatedFriends = findUser.friends.map((friend) => {
    return users.find((match) => {
      return match.id === friend;
    });
  });
  findUser.friends = updatedFriends;
  return findUser;
}

function getAverageSteps(users) {
  let totalSteps = users.reduce((total, user) => {
    total += user.dailyStepGoal;
    return total;
  }, 0);
  return Math.round(totalSteps / users.length);
}

function getAverageFluidOunce(userID, hydrationData) {
  let count = 0 
  let totalOunces = hydrationData.reduce((total, hydrate) => {
    if(hydrate.userID === userID){
    total += hydrate.numOunces;
    count++
    return total;
   }
  }, 0);
  return Math.round(totalOunces / count);
}

function getFluidOunceForDay(userID, hydrationData, date) {
  let foundHydrationData = hydrationData.find((data) => {
    
    return data.userID === userID && data.date === date;
  });
  return foundHydrationData;
}
function getFluidOunceForWeek(userID, hydrationData) {
  const usersWeekHydration = hydrationData.reduce(
    (usersHydration, data) => {
      if (data.userID === userID) {
        usersHydration.push({
          date: data.date,
          ounces: data.numOunces,
        });
      }
      return usersHydration;
    },
    []
  );
    return usersWeekHydration
}

export {
  getUserData,
  getAverageSteps,
  getAverageFluidOunce,
  getFluidOunceForDay,
  getFluidOunceForWeek
};
