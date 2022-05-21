///*~~~~~~~~Imports from Other Files~~~~~~~~*/
import { getUserDataFromAPI, getSleepDataFromAPI, getHydrationDataFromAPI} from './apiCalls.js'; 
import './css/styles.css';
import HydrationRepository from './HydrationRepository.js';
import UserRepository from './UserRepository';

///*~~~~~~~~Global Variables~~~~~~~*/
var userRepo;
var hydrationRepo;

const getRandomID = () => {
  return Math.floor(Math.random() * 50);
};

const userId = getRandomID();

getUserDataFromAPI().then(res => {
  setUserData(res.userData);
  const thisUser = getUserData();
  userBuildAttributes(thisUser);
});

getHydrationDataFromAPI().then(res => {
  setHydrationData(res.hydrationData);
  hydrationBuildAttributes(hydrationRepo);
})

const setUserData = (someData) => {
  userRepo = new UserRepository(someData); 
};

const setHydrationData = (someData) => {
  hydrationRepo = new HydrationRepository(someData)
};

///*~~~~~~~~QUERY SELECTORS~~~~~~~*/
var userGreeting = document.querySelector("#userGreeting");
var emailAddress = document.querySelector("#emailAddress");
var stepGoal = document.querySelector("#stepGoal");
var friends = document.querySelector('#friends');
var address = document.querySelector('#address');
var strideLength = document.querySelector('#strideLength');
var averageUserGoal = document.querySelector('#averageStepGoal');
var userWaterDay = document.querySelector('#userWaterPerDay');
var userWaterWeek = document.querySelector('#userWaterPerWeek');
var userName = document.querySelector('#userName');

//*~~~~~~~~Functions~~~~~~~*//
function getUserData(){
    var thisUser = userRepo.getUserById(userId);
    return thisUser;
};

const userBuildAttributes = (user) => {
    userName.innerHTML = `Name: ${user.name}`;
    emailAddress.innerHTML = `Email: ${user.email}`;
    stepGoal.innerHTML = `Goal: ${user.dailyStepGoal} steps`;
    friends.innerHTML = `Friends: ${user.friends}`;
    address.innerHTML = `Address: ${user.address}`;
    strideLength.innerHTML = `Stride Length: ${user.strideLength} feet`;
    userGreeting.innerHTML = `Welcome ${user.name.split(" ")[0]}!`;
    averageUserGoal.innerHTML = `On average, fitlit users are walking ${userRepo.getAverageSteps()} feet.`;
};

const hydrationBuildAttributes = (hydrationRepoParam) => {
  userWaterDay.innerHTML = `You've drank ${hydrationRepoParam.getUserHydrationForDay(userId, "2020/01/21")} ounces of water today.`;
  console.log('console log from inside hydrationBuildAttributes: ', hydrationRepoParam.getUserHydrationPerWeek(userId, "2020/01/21"));
  userWaterWeek.innerHTML = `${hydrationRepoParam.getUserHydrationPerWeek(userId, "2020/01/21")}`;
}
