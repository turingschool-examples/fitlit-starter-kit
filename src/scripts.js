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

const hydrationDisplay = document.querySelector('.hydration-display')
const sleepDisplay = document.querySelector('.sleep-display')
const activityDisplay = document.querySelector('.activity-display')




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
  document.getElementById('firstName').innerHTML = `Welcome ${currentUserData.userName}!`;
  document.getElementById('fullName').innerHTML = `User: ${currentUserData.userName}`
  document.getElementById('address').innerHTML = `Address: ${currentUserData.address}`;
  document.getElementById('email').innerHTML = `Email: ${currentUserData.email}`;
  document.getElementById('strideLength').innerHTML = `Stride Length : ${currentUserData.strideLength}`;
  document.getElementById('dailyStepgoal').innerHTML = `Daily Step Goal: ${currentUserData.dailyStepGoal}`;
}


function pageLoad() {
  currentUser = new User(userData);
  currentUserSleep = new Sleep(currentUser.userId, allUserSleepData);
  currentUserHydration = new UserHydration(currentUser.userId, allUserHydrationData)
  currentUserActivity = new Activity(currentUser.findUserById(currentUser.userId, userData), allUserActivityData)

  // User
  loadUserInfo(currentUser, userData)
  // *** Need their step goal compared to all user step goal

  // Sleep
  sleepSummaryCard(currentUserSleep.findAllTimeAvgOfDetail('hoursSlept'), currentUserSleep.findAllTimeAvgOfDetail('sleepQuality'));
  sleepWeekCard('Hours', currentUserSleep.findDetailByDay(currentUserSleep.findMostRecentDay(), 'hoursSlept'), currentUserSleep.findDetailByWeek(currentUserSleep.findMostRecentDay(), "hoursSlept"));
  sleepWeekCard('Quality', currentUserSleep.findDetailByDay(currentUserSleep.findMostRecentDay(), 'sleepQuality'), currentUserSleep.findDetailByWeek(currentUserSleep.findMostRecentDay(), "sleepQuality"));



  // Hydration
  createSingleCard("Today's Ounces", currentUserHydration.calculateSingleDayOunces(currentUserHydration.findMostRecentDay()));
  createSevenDayCard('Ounces for Week', currentUserHydration.calculateOuncesLastSevenDays(currentUserHydration.findMostRecentDay()));

  // Activity 
  activityCard(currentUserActivity.findMostRecentSteps(), 
              currentUserActivity.calculateMiles(currentUserActivity.findMostRecentDay()), 
              currentUserActivity.calculateStepLastSevenDays(currentUserActivity.findMostRecentDay()), currentUserActivity.calculateGoalLastSevenDays(currentUserActivity.findMostRecentDay()))
}

function sleepSummaryCard(avgHours, avgQuality) {
  sleepDisplay.innerHTML += `
  <section class='card sleep-summary'> 
       <h3> Sleep Summary </h3>
      <div>
          <text>All-time Hours Average: </text>  
          <text> ${avgHours} </text> 
          <p></p>
          <p></p>
          <text> All-time Quality Average: </text>
         
          <text> ${avgQuality} </text>
      </div>
   </section>`
}

function sleepWeekCard(detail, detailToday, detailByWeek) {
  sleepDisplay.innerHTML += `
  <section class='card sleep-week'> 
    <h3>Sleep ${detail}</h3>
       <h3> Today </h3>
      <div>
             <text> ${detailToday} </text> 
      </div>
      <h3> This Week </h3>
      <div class='data-row'>
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
   activityDisplay.innerHTML += `
   <section class='card activity'>
    <div>
      <text> Total Active Minutes</text>
      <p></p>
      <p></p>
      <text> ${stepCount} steps </text>
      <p></p>
      <p></p>
      <text> ${miles} miles</text>
      <p></p>
      <p></p>
    </div>
    <div class='data-row'>
      <text>Week 1: ${weekSteps[0]} </text>
      <p></p>
      <p></p>
      <text>Week 2: ${weekSteps[1]} </text>
      <p></p>
      <p></p>
      <text>Week 3: ${weekSteps[2]} </text>
      <p></p>
      <p></p>
      <text>Week 4: ${weekSteps[3]} </text>
      <p></p>
      <p></p>
      <text>Week 5: ${weekSteps[4]} </text>
      <p></p>
      <p></p>
      <text>Week 6: ${weekSteps[5]} </text>
      <p></p>
      <p></p>
      <text>Week 7: ${weekSteps[6]} </text> 
      <p></p>
      <p></p>  
    </div>
    <div class ='data-row'> 
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

function createSingleCard(cardTitle, outputToDisplay) {
  hydrationDisplay.innerHTML += `
        <section class='card single'> 
             <h3> ${cardTitle} </h3>
            <div>
                <text> ${outputToDisplay} </text>
            </div>
         </section>`
}

function createSevenDayCard(cardTitle, outputToDisplay) {
  hydrationDisplay.innerHTML += `
  <section class='card seven-day'> 
    <h3> ${cardTitle} </h3>
 <div class='dataRow'>
    <text> ${outputToDisplay[0]} </text>
    <text> ${outputToDisplay[1]} </text>
    <text> ${outputToDisplay[2]} </text>
    <text> ${outputToDisplay[3]} </text>
    <text> ${outputToDisplay[4]} </text>
    <text> ${outputToDisplay[5]} </text>
    <text> ${outputToDisplay[6]} </text>
 </div>
</section>
`
}
