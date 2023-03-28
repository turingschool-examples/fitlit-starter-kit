// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';


// An example of how you tell webpack to use a JS file
import User from './user';
import userData from './data/users';

//console.log("User Data:", userData);

const currentUser = new User(1, userData);
console.log(currentUser)
console.log(currentUser.userId)
console.log(currentUser.userName)
console.log(currentUser.address)
console.log(currentUser.email)
console.log(currentUser.strideLength)
console.log(currentUser.dailyStepGoal)
console.log(currentUser.friends)
