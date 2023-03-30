// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';


// An example of how you tell webpack to use a JS file
import User from './user';
import userData from './data/users';
import UserHydration from './userHydration';
import Sleep from './Sleep';
import fetchAll from './apiCalls';

// Global Varible Section
let allUsersData
let allUserSleepData
let allUserHydrationData
let allUserActivityData

let currentUser;
let currentUserSleep;

//Selectors
const cardDisplay = document.getElementById('cardDisplay')


window.addEventListener('load', () => {
    fetchAll()
        .then(data => {
            allUsersData = data[0]
            allUserSleepData = data[1]            
            allUserHydrationData = data[2]
            allUserActivityData = data[3]
            pageLoad()
        })

})

function pageLoad (){
    currentUser = new User(allUsersData);
    currentUserSleep = new Sleep (currentUser.userId, allUserSleepData);

     // createSingleCardDisplay(cardId, cardTitle, outputToDisplay, units)
    createSingleCard(currentUser.userID, 'Hours Slept', currentUserSleep.findDetailByDay(currentUserSleep.findMostRecentDay(), 'hoursSlept'), 'hours');     
}

 // createSingleCardDisplay(cardId, cardTitle, outputToDisplay, units)

// //Get Random user by refrencing the class
// //Get Current user First Name
// currentUser.userFirstName()

// //Change The Current User By ID
// currentUser.findUserById(1, userData)
// //Get Current user First Name
// currentUser.userFirstName()

// //Get overall Step goal
// currentUser.findOverAllStepGoal(userData)
// //Get user Step Goal
// currentUser.dailyStepGoal

// //Get First Name by ID
// currentUser.userFirstNameById(49, userData)

/////////////
function createSingleCard (cardId, cardTitle, outputToDisplay, units){
    cardDisplay.innerHTML += `
        <section class='singleDayCard' id= ${cardId}> 
             <h3> ${cardTitle} </h3>
            <div>
                <text> ${outputToDisplay} </text>
                <text>  ${units} </text>
            </div>
         </section>`
}
