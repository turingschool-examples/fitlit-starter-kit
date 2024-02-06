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
import { displayWelcomeMessage } from './domUpdates';



import users from '../src/data/users'

var randomUser = []

function generateUser(id) {
    return users.users.find(user => user.id === id)
};

/* */

function getAverageStepGoal() {
  const totalStepsGoal = users.users.reduce((total, user) => total + user.dailyStepGoal, 0);
  let averageSteps = totalStepsGoal / users.users.length;  
  return averageSteps
}

// module.exports = {
//     generateUser,
//     getAverageStepGoal
// }

export { generateUser, getAverageStepGoal };
