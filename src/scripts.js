import './css/styles.css';
import './images/turing-logo.png'
import userData from './data/users';
import UserRepository from './UserRepository';

// console.log(userData,"<>>>>userData")
let user
// const makeRandomUser = 
user = new User(userData[Math.floor(Math.random() * userData.length)])
const getRandomIndex = (user) => {
  return Math.floor(Math.random() * user.length)
}
console.log(user,"<>>>>randomize")




