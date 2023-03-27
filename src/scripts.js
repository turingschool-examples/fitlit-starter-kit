// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';
console.log("User Data:", userData);

import SomeClassYouChangeTheName from './SomeClassYouChangeTheName';
// import { arguments } from 'file-loader';

const newClass = new SomeClassYouChangeTheName();



// get a radom number based on the amount of IDs we have
// fetch data based off the id ADN the end-point key
// funciotn test ( 1, urlhttpsAPI//a.com) {
  // first go to end point 
  // .then () resolve .as
  // .then () filter( userID === id argument)
  // let hydration = new Hydration(whole array of info)

  // hyration class construcot(id, whole array) {
  //   data: this is where the arguments goes
  // }
// }