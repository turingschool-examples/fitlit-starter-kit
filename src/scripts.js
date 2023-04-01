// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png';


import User from './user';
import UserHydration from './userHydration';
import Sleep from './Sleep';
import fetchAll from './apiCalls';
import Activity from './Activity';

// Global Varible Section
let userData
let allUserSleepData
let allUserHydrationData
let allUserActivityData


let currentUser;
let currentUserSleep;
let currentUserHydration;
let currentUserActivity;

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
    currentUserActivity = new Activity (currentUser.userId, allUserActivityData)

    // User
    loadUserInfo(currentUser,userData) 
     // *** Need their step goal compared to all user step goal

    // Sleep
    // their all-time average sleep quality and all-time average number of hours slept
    sleepSummaryCard (currentUserSleep.findAllTimeAvgOfDetail('hoursSlept'), currentUserSleep.findAllTimeAvgOfDetail('sleepQuality'))
    createSingleCard(currentUser.userID, 'Hours Slept', currentUserSleep.findDetailByDay(currentUserSleep.findMostRecentDay(), 'hoursSlept'), 'todays hours');
    createSevenDayCard(currentUser.userID, 'Hours Slept', currentUserSleep.findDetailByWeek(currentUserSleep.findMostRecentDay(), 'hoursSlept'), 'last 7 days');


    // sleep quality today
    // sleep quality last week
    

    // Hydration
    createSingleCard(currentUser.userID, 'Total Ounces', currentUserHydration.calculateSingleDayOunces(currentUserHydration.findMostRecentDay()), 'todays Ounces');
    createSevenDayCard(currentUser.userID, 'Ounces Drank', currentUserHydration.calculateOuncesLastSevenDays(currentUserHydration.findMostRecentDay()), 'last 7 days');

    // Activity 

    // the number of steps for the latest day
    // the number minutes active for the latest day
    //the distance they have walked (in miles) for the latest day based on their step count
    //a weekly view of their step count, and if they reached their step count goal for each day

  }

function sleepSummaryCard (avgHours, avgQuality){
  cardDisplay.innerHTML += `
  <section class='summary-card sleep-summary'> 
       <h3> Sleep Summary </h3>
      <div>
          <text>All-time Hours Average: </text>  
          <text> ${avgHours} </text> 
          <text> All-time Quality Average: </text>
          <text> ${avgQuality} </text>
      </div>
   </section>`
}


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



