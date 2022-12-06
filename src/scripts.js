// -----------------imports------------------------
// An example of how you tell webpack to use a JS file

import userData from "./data/users";

import UserRepository from "./UserRepository";

import User from "./User";

import apiCalls from "./apiCalls";

import fetchData from "./apiCalls";

// An example of how you tell webpack to use a CSS file
// import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

// ----------------variables-------------------------



let usersData;

let sleepData;

let hydrationData;

let generatedUser;

let newUserRepository;

let gretting = document.querySelector("h1");

let cardInfo = document.querySelector("#cardInfo");




// ------------------functions-----------------------------------
const fetchApiPromises = () => {
	apiCalls.fetchData().then(data => {
		usersData = data[0].userData
		console.log(usersData)
		sleepData = data[1]
		hydrationData = data[2]
		createDashboard();
	});
	
};

function createDashboard() {
	createUserRepository();
	createUser();
	greetUser();
	displayCardInfo();
	compareStepGoals();
}

function createUser() {
	return (generatedUser = new User(newUserRepository.generateRandomUser(usersData)));
}

function createUserRepository() {
	newUserRepository = new UserRepository(usersData);
	return newUserRepository;
}

function greetUser() {
	const generatedUserFirstName = generatedUser.findFirstName();
	gretting.innerText = `Welcome ${generatedUserFirstName}`;
}

function displayCardInfo() {
	cardInfo.innerText = `id: ${generatedUser.id}, name: ${generatedUser.name}, address: ${generatedUser.address}, email: ${generatedUser.email}, stride length: ${generatedUser.strideLength}, step goal: ${generatedUser.dailyStepGoal}, friends: ${generatedUser.friends}`;
}

function compareStepGoals() {
	console.log(newUserRepository.findAvrgStepGoal(usersData));
	console.log(generatedUser.dailyStepGoal);
}



// -------------------eventListeners----------------
window.addEventListener('load', (event) => {
	fetchApiPromises()
});

// Do not delete or rename this file ********

console.log(userData, "<>>>>userData");

console.log("This is the JavaScript entry file - your code begins here.");
