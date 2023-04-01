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

function loadUserInfo(currentUserData, userData) {
  document.getElementById('firstName').innerHTML = `Welcome ${currentUserData.userName} !!!`;
  document.getElementById('fullName').innerHTML = currentUserData.userName;
  document.getElementById('address').innerHTML = currentUserData.address;
  document.getElementById('email').innerHTML = currentUserData.email;
  document.getElementById('strideLength').innerHTML = currentUserData.strideLength;
  document.getElementById('dailyStepgoal').innerHTML = currentUserData.dailyStepGoal;
  document.getElementById('friends').innerHTML = currentUserData.userFirstNameById(currentUserData.friends[0], userData);

}


function pageLoad() {
  currentUser = new User(userData);
  currentUserSleep = new Sleep(currentUser.userId, allUserSleepData);
  currentUserHydration = new UserHydration(currentUser.userId, allUserHydrationData)
  console.log('userstuff ', allUserActivityData)
  currentUserActivity = new Activity(currentUser.findUserById(currentUser.userId, userData), allUserActivityData)

  // User
  loadUserInfo(currentUser, userData)
  // *** Need their step goal compared to all user step goal

  // Sleep
  sleepSummaryCard(currentUserSleep.findAllTimeAvgOfDetail('hoursSlept'), currentUserSleep.findAllTimeAvgOfDetail('sleepQuality'));
  sleepWeekCard('Hours', currentUserSleep.findDetailByDay(currentUserSleep.findMostRecentDay(), 'hoursSlept'), currentUserSleep.findDetailByWeek(currentUserSleep.findMostRecentDay(), "hoursSlept"));
  sleepWeekCard('Quality', currentUserSleep.findDetailByDay(currentUserSleep.findMostRecentDay(), 'sleepQuality'), currentUserSleep.findDetailByWeek(currentUserSleep.findMostRecentDay(), "sleepQuality"));



  // Hydration
  createSingleCard(currentUser.userID, 'Total Ounces', currentUserHydration.calculateSingleDayOunces(currentUserHydration.findMostRecentDay()), 'todays Ounces');
  createSevenDayCard(currentUser.userID, 'Ounces Drank', currentUserHydration.calculateOuncesLastSevenDays(currentUserHydration.findMostRecentDay()), 'last 7 days');

  // Activity 
  activityCard(currentUserActivity.findMostRecentSteps(), 
              currentUserActivity.calculateMiles(currentUserActivity.findMostRecentDay()), 
              currentUserActivity.calculateStepLastSevenDays(currentUserActivity.findMostRecentDay()), currentUserActivity.calculateGoalLastSevenDays(currentUserActivity.findMostRecentDay()))
}

function sleepSummaryCard(avgHours, avgQuality) {
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

function sleepWeekCard(detail, detailToday, detailByWeek) {
  cardDisplay.innerHTML += `
  <section class='summary-card sleep-week'> 
    <h3>Sleep ${detail}</h3>
       <h3> Today </h3>
      <div>
             <text> ${detailToday} </text> 
      </div>
      <h3> This Week </h3>
      <div class='dataRow'>
        <text> ${detailByWeek[0]} </text>
        <text> ${detailByWeek[1]} </text>
       <text> ${detailByWeek[2]} </text>
       <text> ${detailByWeek[3]} </text>
       <text> ${detailByWeek[4]} </text>
       <text> ${detailByWeek[5]} </text>
        <text> ${detailByWeek[6]} </text>
   </div>
   </section>`
}

function activityCard(stepCount, miles, weekSteps,stepGoalMet){
   cardDisplay.innerHTML += `
   <section class='activityCard'>
    <div>
      <text> Total Active Min minutes</text>
      <text> ${stepCount} steps </text>
      <text> ${miles} miles</text>
    </div>
    <div class='dataRow'>
      <text> ${weekSteps[0]} </text>
      <text> ${weekSteps[1]} </text>
      <text> ${weekSteps[2]} </text>
      <text> ${weekSteps[3]} </text>
      <text> ${weekSteps[4]} </text>
      <text> ${weekSteps[5]} </text>
      <text> ${weekSteps[6]} </text>   
    </div>
    <div class ='dataRow'> 
       <text> ${stepGoalMet[0]} </text>
      <text> ${stepGoalMet[1]} </text>
      <text> ${stepGoalMet[2]} </text>
      <text> ${stepGoalMet[3]} </text>
      <text> ${stepGoalMet[4]} </text>
      <text> ${stepGoalMet[5]} </text>
     <text> ${stepGoalMet[6]} </text> 
    </div> 
   </section>
  `
}

function createSingleCard(cardId, cardTitle, outputToDisplay, units) {
  cardDisplay.innerHTML += `
        <section class='singleDayCard' id= ${cardId}> 
             <h3> ${cardTitle} </h3>
            <div>
                <text> ${outputToDisplay} </text>
                <text>  ${units} </text>
            </div>
         </section>`
}

function createSevenDayCard(cardId, cardTitle, outputToDisplay, units) {
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



