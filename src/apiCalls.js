// let hydration;
// let user;
// let userID = 1;
// let date = "2023/03/24";

// import UserRepository from './classes/UserRepository';
// import User from './classes/User';
// import Hydration from './classes/Hydration';
// import { displayUserCard, displayStepUserVsAllUsers, displayUserGreeting, displayhydrationCard, displayLatestSleepData, displayAllTimeSleepData} from './scripts';


// function fetchUsers() {
//   return fetch("https://fitlit-api.herokuapp.com/api/v1/users")
//     .then(response => response.json());
// };

// function fetchHydration() {
//   return fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
//     .then((response) => response.json());
// };

// function fetchSleep() {
//   return fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
//     .then((response) => response.json());
// };

// Promise.all([fetchUsers(), fetchHydration(), fetchSleep()])
//   .then(([userData, hydrationData, sleepData]) => {
//     const userBase = new UserRepository(userData.users);
//     user = new User(userBase.getUser(userID));
//     displayUserCard(user);
//     displayStepUserVsAllUsers(user, userBase);
//     displayUserGreeting(user);

//     hydration = new Hydration(hydrationData.hydrationData);
//     displayhydrationCard(hydration, userID, date);

//     sleepData = new Sleep(sleepData.sleepData);
//     displayLatestSleepData(sleepData, userID, date);
//     displayAllTimeSleepData(sleepData, userID);
//     // sleep DOM manipulation functions go here
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

