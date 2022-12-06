// -----------------imports------------------------
// An example of how you tell webpack to use a JS file

import userData from "./data/users";

import UserRepository from "./UserRepository";

import User from "./User";

// An example of how you tell webpack to use a CSS file
// import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

// ----------------variables-------------------------

let gretting = document.querySelector("h1");

let cardInfo = document.querySelector("#cardInfo");

const data = userData;

const newUserRepository = new UserRepository(data);

let generatedUser;

// ------------------functions-----------------------------------
function createUser() {
	return (generatedUser = new User(newUserRepository.generateRandomUser(data)));
}

function greetUser() {
	const generatedUserFirstName = generatedUser.findFirstName();
	gretting.innerText = `Welcome ${generatedUserFirstName}`;
}

function displayCardInfo() {
	cardInfo.innerText = `id: ${generatedUser.id}, name: ${generatedUser.name}, address: ${generatedUser.address}, email: ${generatedUser.email}, stride length: ${generatedUser.strideLength}, step goal: ${generatedUser.dailyStepGoal}, friends: ${generatedUser.friends}`;
}

function compareStepGoals() {
	console.log(newUserRepository.findAvrgStepGoal(data));
	console.log(generatedUser.dailyStepGoal);
}

// -------------------eventListeners----------------

window.addEventListener("load", (event) => {
	createUser();
	greetUser();
	displayCardInfo();
	compareStepGoals();
});

// Do not delete or rename this file ********

console.log(userData, "<>>>>userData");

console.log("This is the JavaScript entry file - your code begins here.");
