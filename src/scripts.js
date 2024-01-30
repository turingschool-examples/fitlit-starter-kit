// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file
import './styles.css';
import apiCalls from './apiCalls'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
// An example of how you tell webpack to use a JS file
import userData from './data/users';
// Below are examples of how you can import functions from either users, hydration, or domUpdates files.
import { findUser } from './users'
import { findAvgFluidOunces } from './hydration';
import { displayUserInfo } from './domUpdates';




console.log("User Data:", userData);
findUser(12)
findAvgFluidOunces(12);
displayUserInfo();