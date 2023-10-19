// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

// An example of how you tell webpack to use a JS file
//import users from './data/users';
// import { hydrationData } from './data/hydration';
//console.log("User Data:", users);

// Example of one way to import functions from the domUpdates file.  You will delete these examples.
import { exampleFunction1, exampleFunction2, showUserInfo, showAverages,showWaterWeek } from './domUpdates';
import { averageStepGoals } from '../test/users-functions';
import { give7DayWaterConsumption, giveAverageWaterConsumption, fluidOuncesForDay, giveWaterConsumptionforSpecificDay } from '../test/hydration-functions';
import { fetchUserData, fetchHydrationData} from './apiCalls';


exampleFunction1('Travis');
exampleFunction2('Travis')

const populateDOM = (data) => {
  renderUserInfo(data)
  allAverages(data)
};

const populateDOM2 = (data) => {
  grabWaterWeek(data)
};

// window.addEventListener('load', () => {
// Promise.all().then(data => {
//   fetchUserData().then((data) => populateDOM(data));
//   fetchHydrationData().then((data) => populateDOM2(data));
// })
  

// })

window.addEventListener('load', () => {
  Promise.all([fetchUserData(), fetchHydrationData()])
    .then((data) => {
      const userData = data[0];
      const hydrationData = data[1];
      populateDOM(userData);
      populateDOM2(hydrationData);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
});

let index 

// 2023/06/25 - 2023/07/01

const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
};

const renderUserInfo = (data) => {
     index = getRandomIndex(data)
    showUserInfo(index, data)
    
}

const grabWaterWeek = (data) =>{
    let waterWeek = give7DayWaterConsumption(data, index, "2023/06/25")
    showWaterWeek(waterWeek)
}


const allAverages = (data) =>{
    let averages = averageStepGoals(data)
    showAverages(averages)
  }







