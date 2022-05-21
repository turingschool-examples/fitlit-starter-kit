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
});

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
var hydrationDay1 = document.querySelector('#hydrationDay1');
var hydrationDay2 = document.querySelector('#hydrationDay2');
var hydrationDay3 = document.querySelector('#hydrationDay3');
var hydrationDay4 = document.querySelector('#hydrationDay4');
var hydrationDay5 = document.querySelector('#hydrationDay5');
var hydrationDay6 = document.querySelector('#hydrationDay6');
var hydrationDay7 = document.querySelector('#hydrationDay7');

var hydrationDayHTMLCollection = [
  hydrationDay1, 
  hydrationDay2, 
  hydrationDay3, 
  hydrationDay4, 
  hydrationDay5, 
  hydrationDay6, 
  hydrationDay7
];
//*~~~~~~~~Functions~~~~~~~*//
function getUserData(){
    var thisUser = userRepo.getUserById(userId);
    return thisUser;
};

const userBuildAttributes = (user) => {
    userName.innerHTML = `Name: ${user.name}`;
    emailAddress.innerHTML = `Email: ${user.email}`;
    stepGoal.innerHTML = `Goal: ${user.dailyStepGoal} steps`;
    friends.innerHTML = `Friends: ${user.friends.map(num => ' ' +userRepo.users.find(user => user.id === num).name)}`;
    address.innerHTML = `Address: ${user.address}`;
    strideLength.innerHTML = `Stride Length: ${user.strideLength} feet`;
    userGreeting.innerHTML = `Welcome ${user.name.split(" ")[0]}!`;
    averageUserGoal.innerHTML = `On average, fitlit users are walking ${userRepo.getAverageSteps()} feet.`;
};

const formatHydrationData = () => {
  const userHydrationDataPerWeek = hydrationRepo.getUserHydrationPerWeek(userId, "2020/01/21");
  console.log(userHydrationDataPerWeek)
  const formattedData = userHydrationDataPerWeek.map(obj => {
    return `${obj.date}: ${obj.ounces} ounces`;
  });
  hydrationDayHTMLCollection.forEach((dayElem, index) => {
    dayElem.innerText = `${formattedData[index]}`
  })
};

const hydrationBuildAttributes = (hydrationRepoParam) => {
  userWaterDay.innerHTML = `<p>You've drank ${hydrationRepoParam.getUserHydrationForDay(userId, "2020/01/21")} ounces of water today.</p>`;
  formatHydrationData();
}
