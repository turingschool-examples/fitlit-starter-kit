///*~~~~~~~~Imports from Other Files~~~~~~~~*/
import { getUserDataFromAPI, getSleepDataFromAPI, getHydrationDataFromAPI} from './apiCalls.js'; 
import './css/styles.css';
import UserRepository from './UserRepository';
///*~~~~~~~~Global Variables~~~~~~~*/
var userRepo;

const getRandomID = () => {
  return Math.floor(Math.random() * 50);
};

const userId = getRandomID();

getUserDataFromAPI().then(res => {
  setUserData(res.userData);
  createUsersAverageSteps();
  const thisUser = getUserData();
  buildAttributes(thisUser);
});

const setUserData = (someData) => {
  userRepo = new UserRepository(someData); 
};

///*~~~~~~~~QUERY SELECTORS~~~~~~~*/
var userGreeting = document.querySelector("#userGreeting");
var emailAddress = document.querySelector("#emailAddress");
var stepGoal = document.querySelector("#stepGoal");
var friends = document.querySelector('#friends');
var address = document.querySelector('#address');
var strideLength = document.querySelector('#strideLength');
var averageUserGoal = document.querySelector('#averageStepGoal');
var firstName = document.querySelector('firstName');

//*~~~~~~~~Functions~~~~~~~*//
function getUserData(id){
    var thisUser = userRepo.getUserById(userId);
    return thisUser;
};

function createUsersAverageSteps() {
    averageUserGoal.innerHTML = `On average, fitlit users are walking ${userRepo.getAverageSteps()} feet.`;
};

const buildAttributes = (user) => {
    userName.innerHTML = `Name: ${user.name}`;
    emailAddress.innerHTML = `Email: ${user.email}`;
    stepGoal.innerHTML = `Goal: ${user.dailyStepGoal} steps`;
    friends.innerHTML = `Friends: ${user.friends}`;
    address.innerHTML = `Address: ${user.address}`;
    strideLength.innerHTML = `Stride Length: ${user.strideLength} steps`;
    userGreeting.innerHTML = `Welcome ${user.name.split(" ")[0]}!`;
};
