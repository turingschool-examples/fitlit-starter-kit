console.log("Hello World");
// const chai = require('chai');
// const expect = chai.expect;
// const UserRepository = require('./userRepository.js');
// const data = require('../data/users.js');
// const User = require('../src/user.js')

/***************** Variables *****************/
let name = document.querySelector('.main_user_name');
let address = document.querySelector('.main_user_address');
let email = document.querySelector('.main_user_email');
let stride = document.querySelector('.main_user_strideLength');
let goal = document.querySelector('.main_user_dailyStepGoal');
let friends = document.querySelector('.main_user_friends');

/*************** Event Listeners *************/
window.addEventListener('load', initializePage(userData))
/***************** Functions *****************/

function initializePage(data) {
	const userRepository = new UserRepository(data)
	userRepository.findUser(10)
	const user = new User(userRepository.currentUser)
	name.innerHTML = user.name
	address.innerHTML = user.address
	email.innerHTML = user.email
	stride.innerHTML = user.strideLength
	// console.log(user.dailyStepGoal)
	goal.innerHTML = user.dailyStepGoal
	friends.innerHTML = user.friends

}
