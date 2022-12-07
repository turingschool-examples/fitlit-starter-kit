import './css/styles.css';
import './images/turing-logo.png'
import userData from './data/users';
import User from './User';
import UserRepository from './UserRepository';

const userName = document.querySelector('#user-name')  
let user
// let userRepository
let currentUser

// let thisData = userData.map(justID => {
  // return justID.id}) //array of Numbers [userData.id]
  
user = new User(userData[Math.floor(Math.random() * userData.length)])
let testNewUser = new UserRepository(user)
// const getRandomIndex = Math.floor(Math.random() * 50)
// if(thisData[justID.id] === getRandomIndex)

  console.log('here', user)
  window.addEventListener('load', () => {
    user
  })


function displayName() {
  userName.innerText = ` ${user.showFirstName()}`
   }

displayName()

// const makeClasses = (users) => {
//   userRepository = new UserRepository(users);
//   if (currentUser === undefined){
//     getRandomUser();
//   }}
// const getRandomUser = () => {
//   currentUser = new User(userData]);
//   userRepository = new UserRepository(currentUser)
// }

//getrandomIndex  compare user Id
//userRepo has users




