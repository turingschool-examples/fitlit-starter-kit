// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';


// An example of how you tell webpack to use a JS file
import User from './user';
// import userData from './data/users';
import UserHydration from './userHydration';
import Sleep from './Sleep';
import fetchAll from './apiCalls';

// Global Varible Section
let userData
let allUserSleepData
let allUserHydrationData
let allUserActivityData


let currentUser;
let currentUserSleep;
let currentUserHydration;

//Selectors
const cardDisplay = document.getElementById('cardDisplay')

//querySelector variables 

const userInfoBox = document.querySelector('.user-info')




window.addEventListener('load', () => {
  fetchAll()
  .then(data => {
    userData = data[0]
    allUserSleepData = data[1]
    allUserHydrationData = data[2]
    allUserActivityData = data[3]
    console.log(allUserHydrationData)
    pageLoad()
  })
})

function loadUserInfo(currentUserData,userData) {
    document.getElementById('firstName').innerHTML = `Welcome ${currentUserData.userName} !!!`;
    document.getElementById('fullName').innerHTML = currentUserData.userName;
    document.getElementById('address').innerHTML = currentUserData.address;
    document.getElementById('email').innerHTML = currentUserData.email;
    document.getElementById('strideLength').innerHTML = currentUserData.strideLength;
    document.getElementById('dailyStepgoal').innerHTML = currentUserData.dailyStepGoal;
    document.getElementById('friends').innerHTML = currentUserData.userFirstNameById(currentUserData.friends[0],userData);
   

    console.log(currentUserData.friends[0])

}



function pageLoad () {
    currentUser = new User(userData);
    currentUserSleep = new Sleep (currentUser.userId, allUserSleepData);
    currentUserHydration = new UserHydration(currentUser.userId, allUserHydrationData)
    createSingleCard(currentUser.userID, 'Hours Slept', currentUserSleep.findDetailByDay(currentUserSleep.findMostRecentDay(), 'hoursSlept'), 'todays hours');
    createSevenDayCard(currentUser.userID, 'Hours Slept', currentUserSleep.findDetailByWeek(currentUserSleep.findMostRecentDay(), 'hoursSlept'), 'last 7 days');
    createSingleCard(currentUser.userID, 'Total Ounces', currentUserHydration.calculateSingleDayOunces(currentUserHydration.findMostRecentDay()), 'todays Ounces');
    createSevenDayCard(currentUser.userID, 'Ounces Drank', currentUserHydration.calculateOuncesLastSevenDays(currentUserHydration.findMostRecentDay()), 'last 7 days');
    loadUserInfo(currentUser,userData) 
    console.log(currentUserHydration.calculateOuncesLastSevenDays()) 
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

function createSevenDayCard (cardId, cardTitle, outputToDisplay, units){
  cardDisplay.innerHTML += `
  <section class='SevenDayCard' id= ${cardId}> 
    <h3> ${cardTitle} </h3>
 <div class='dataRow'>
    <text> ${outputToDisplay[0]} </text>
    <text> ${outputToDisplay[1]} </text>
    <text> ${outputToDisplay[2]} </text>
    <text> ${outputToDisplay[3]} </text>
    <text> ${outputToDisplay[4]} </text>
    <text> ${outputToDisplay[5]} </text>
    <text> ${outputToDisplay[6]} </text>
    <text>  ${units} </text>
 </div>
</section>
`
}



