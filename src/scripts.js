'use strict'

let userFirstName = document.querySelector('.user-first-name')
let userAddress = document.querySelector('.user-address')
let userEmail = document.querySelector('.user-email')
let userStepCompare = document.querySelector('.user-step-compare')

const userRepo = new UserRepo(userData); // needs to take in array of users
const currentUser = new User(userRepo.getAUser(1)); // user object

window.addEventListener('load', () => {
  const currentID = currentUser.id; // sets the ID to a variable to use as an argument
  displayFirstName(currentID);
  displayInfoCard(currentID);
  return currentID; // returning ID out to use it later
})

const displayFirstName = (currentID) => {
  userFirstName.innerText = `Welcome, ${currentUser.getFirstName(currentID)}`;
};

const displayInfoCard = (currentID) => {
  userAddress.innerText = `${currentUser.address}`;
  userEmail.innerText = `${currentUser.email}`;
  userStepCompare.innerText = `Your step goal is ${
    currentUser.dailyStepGoal
  }, and the average is ${userRepo.calculateAvgSteps()}`;
};