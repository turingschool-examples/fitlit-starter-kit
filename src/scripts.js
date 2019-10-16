const user = new User(userData);
const users = new UserRepo(userData);
const randomNum = Math.floor(Math.random() * 50 + 1);
const randomUser = users.getSingleUserData(randomNum);
const hydration = new Hydration(hydrationData);
const sleep = new Sleep(randomUser.id, sleepData);
const activity = new Activity(activityData, userData);
const mainContainer = document.querySelector('.main__container')
const header = document.querySelector('header');
const widgets = document.querySelector('.daily-widget-container');
const stepComparison = document.querySelector('.average-step-comparison')
const todaysDate = grabDate();
// const stairsComparison = document.querySelector('.compare-daily-stairs');




header.insertAdjacentHTML('beforeend', `<h2 class='name--display'>Welcome, ${randomUser.name}</h2>
  <div class="contact-container">
    <div class='img-user-icon'>
      <img class="user-icon" src="../images/user-icon-final.png">
    </div>
    <div class='contact--info'>
      <div class='info--wrapper'>
        <label class="contact--label">Address: </label>
        <p class="user--info">${randomUser.address}</p>
      </div>
      <div class='info--wrapper'>
        <label class="contact--label">Email: </label>
        <p class='user--info'>${randomUser.email}</p>
      </div>
      <div class='info--wrapper'>
        <label class="contact--label">Stride Length: </label> 
        <p class='user--info'>${randomUser.strideLength} ft.</p>
      </div>
      <div class='info--wrapper'>
        <label class="contact--label">Daily Step Goal: </label>
        <p class='user--info'>${randomUser.dailyStepGoal} steps</p>
      </div>
    </div> 
  </div>
`)


widgets.insertAdjacentHTML('afterbegin', `<div class="hydration--widget">
        <div class="widget-card-container">
        <h3 class="widget-hydration-header">Daily Fluid Intake</h3>
        <p class="widget--informer">Today you drank</p>
        <img class="water-bottle-icon"src="../images/water_bottle-icon.svg">
        <p class="widget--variable hydration--variable">${hydration.calculateDailyIntake(todaysDate, randomUser.id)}oz</p>
        </div>
        </div>
      <div class="sleep--widget">
        <h3 class="widget-sleep-header">Last Night's Sleep</h3>
        <p class="widget--informer">Last night you slept</p>
        <pclass="widget--variable sleep--variable">${sleep.findHoursSlept(randomUser.id, todaysDate)}hrs</p>
        <img class="bed-icon" src="../images/single-bed-icon.svg">
        <p class="widget--informer">Your Sleep Quality: ${sleep.findSleepQuality(randomUser.id, todaysDate)}</p>
      </div>
      <div class="activity--widget">
        <h3 class="widget-activity-header">Steps</h3>
        <p class="widget--informer">Your steps</p>
        <p class="widget--variable activity--variable">${activity.findSingleDayInfo(randomUser.id, todaysDate).numSteps}</p>
        <img class="step-icon" src="../images/activity-icon.svg">
        <div class="activity-details">
          <p class="widget-activity-informer">Miles: ${grabDailyMiles(randomUser.id, todaysDate)}</p>
          <p class="widget-activity-informer">Active minutes: ${grabActiveMinutes(randomUser.id, todaysDate)} min</p>
        </div>
      </div>`)

stepComparison.insertAdjacentHTML('afterbegin', `<div class="user-avg-steps">
          <p>Your Step Goal:</p>
          <span class="comparison-number">${randomUser.dailyStepGoal}</span>
        </div>
        <div class="line-divider"></div>
        <div class="world-avg-steps">
        <p>Overall Average Step Goal</p>
        <p>${findOverallStepGoals()}</p>
        </div>`)


function grabDate() {
  let index = hydrationData.length - 1;
  return hydrationData[index].date;
}

function grabDailyMiles(id, date) {
  let user = activity.findSingleUserData(id);
  let day = activity.findSingleDayInfo(id, date);
  let stepsPerMi = 5280 / user.strideLength;
  return +((day.numSteps / stepsPerMi).toFixed(2))
}

function grabActiveMinutes(id, date) {
  activity.findSingleDayInfo(id, date);
  return activity.singleDay.minutesActive
}

function findOverallStepGoals() {
  let usersStepAverage = userData.reduce((acc, user) => {
    acc += user.dailyStepGoal
    return acc;
  }, 0)
  return +((usersStepAverage / userData.length - 1).toFixed());
}

findOverallStepGoals();

var ctx = document.getElementById('weekly--water').getContext('2d');
var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: hydration.findAWeek(randomUser.id).map(day => day.date),
    datasets: [{
      label: 'Weekly Water Intake',
      backgroundColor: '#fff',
      borderColor: 'rgb(255, 99, 132)',
      data: hydration.findAWeek(randomUser.id).map(day => day.numOunces)
    }]
  },
  options: {}
});

var sleepInfo = document.getElementById('weekly--sleep').getContext('2d');
var sleepChart = new Chart ( sleepInfo, {
  type: 'line',
  data: {
    labels: sleep.findAWeek(randomUser.id).map(day => day.date),
    datasets: [{
      label: 'Weekly Sleep Data',
      backgroundColor: '#fff',
      borderColor: 'pink',
      data: sleep.findAWeek(randomUser.id).map(day => day.hoursSlept),
    }]
  },
  options: {}
});


function getUsersDailyMetric(id, date, metric) {
  let user = activityData.find(user => user.userID === id && user.date === date)
  return user[metric]
}

// getUsersDailyMetric(randomUser.id, todaysDate, 'numSteps')

function getAvgGroupMetrics(date, metric) {
  let allData = activityData.reduce((acc, user) => {
    if(user.userID !== randomUser.id && user.date === date) {
      acc += user[metric]
    }
    return acc
  }, 0)
  return +((allData / userData.length - 1).toFixed())
}

getAvgGroupMetrics(todaysDate, 'flightsOfStairs')

const compareDailySteps = document.getElementById('compare-daily-steps').getContext('2d');
let compareSteps = new Chart(compareDailySteps, {
  type: 'bar',
  data: {
    labels: ['Your Steps', 'Group Steps'],
    datasets: [{
      label: 'Compare Your Steps',
      backgroundColor: ['pink', 'purple'],
      borderColor: 'pink',
      data: [getUsersDailyMetric(randomUser.id, todaysDate, 'numSteps'), getAvgGroupMetrics(todaysDate, 'numSteps')]
    }]
  },
  options: {
    scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
}}
);


const compareDailyStairs = document.getElementById('compare-daily-stairs').getContext('2d');
let stairsComparisonChart = new Chart(compareDailyStairs, {
  type: 'bar',
  data: {
    labels: ['Your Stairs', 'Group Stairs'],
    datasets: [{
      label: 'Compare Flights Of Stairs Climbed',
      backgroundColor: ['lime', 'blue'],
      borderColor: 'pink',
      data: [getUsersDailyMetric(randomUser.id, todaysDate, 'flightsOfStairs'), getAvgGroupMetrics(todaysDate, 'flightsOfStairs')]
    }]
  },
  options: {
    scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
}}
);

const compareDailyMinutes = document.getElementById('compare-daily-minutes').getContext('2d');
let activeMinutesComparisonChart = new Chart(compareDailyMinutes, {
  type: 'bar',
  data: {
    labels: ['Your Min Active', 'Group Min Active'],
    datasets: [{
      label: 'Compare Minutes Active',
      backgroundColor: ['orange', 'gray'],
      borderColor: 'pink',
      data: [getUsersDailyMetric(randomUser.id, todaysDate, 'minutesActive'), getAvgGroupMetrics(todaysDate, 'minutesActive')]
    }]
  },
  options: {
    scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
}}
);


const displayWeeklyWaterIntake = document.getElementById('weekly-water-intake').getContext('2d');
let weeklyWaterIntake = new Chart(displayWeeklyWaterIntake, {
  type: 'line',
  data: {
    labels: hydration.findAWeek(randomUser.id).map(day => day.date),
    datasets: [{
      label: 'Your Water Intake For The Week',
      backgroundColor: ['orange', 'gray'],
      borderColor: 'pink',
      data: hydration.getWeeklyOunces(randomUser.id)
    }]
  },
  options: {
    scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
}}
);

const displayWeeklySleepInfo = document.getElementById('weekly-sleep-info').getContext('2d');
let weeklySleepInfo = new Chart(displayWeeklySleepInfo, {
  type: 'line',
  data: {
    labels: sleep.findAnyWeek(randomUser.id, todaysDate).map( day => day.date),
    datasets: [{
      label: 'Sleep Tracker',
      backgroundColor: ['green', 'rebeccaPurple'],
      borderColor: 'rebeccaPurple',
      data: sleep.findHoursSleptForWeek(randomUser.id, todaysDate).map( day => day.hoursSlept)
    }]
  },
  options: {
    scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
}}
);