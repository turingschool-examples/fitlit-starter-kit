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
	name.innerHTML = `Name: ${user.name}`
	address.innerHTML = `Address: ${user.address}`
	email.innerHTML = `Email: ${user.email}`
	stride.innerHTML = `Stride Length: ${user.strideLength} feet`
	goal.innerHTML = `Step Goal: ${user.dailyStepGoal} steps`
	friends.innerHTML = `Friends: ${findFriends(userRepository, user)}`

}

function findFriends(userRepository, user) {
	newFriends = [];
	user.friends.forEach(function(friend) {
		var friendInfo = userRepository.findUser(friend)
			newFriends.push(friendInfo.name)
			newFriends.push(friendInfo.dailyStepGoal)
		})
	return newFriends
}
