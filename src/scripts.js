// import moment from "moment";
// ~~~~~ QUERY SELECTORS ~~~~~
const header = document.querySelector('.header');
const userInfoCard = document.querySelector('.user-info-card');
const hydrationSection = document.querySelector('.hydration');
const sleepSection = document.querySelector('.sleep');
const activitySection = document.querySelector('.activity');
const sleepStats = document.querySelector('.sleep-number-stats');
const sleepHoursWeek = document.querySelector('.sleep-hours-week-chart');

// ~~~~~ EVENT LISTENERS ~~~~~
window.onload = start;

// ~~~~~ GLOBAL VARIABLES ~~~~~
const users = userData.map(userObj => {
  const user = new User(userObj);
  return user;
});
const userRepo = new UserRepo(users);

const allHydration = hydrationData.map(hydrationObj => {
  const hydration = new Hydration(hydrationObj);
  return hydration;
});
const hydrationRepo = new HydrationRepo(allHydration);

const allSleep = sleepData.map(sleepObj => {
  const sleep = new Sleep(sleepObj);
  return sleep;
});
const sleepRepo = new SleepRepo(allSleep);

const allActivity = activityData.map(activityObj => {
  const activity = new Activity(activityObj);
  return activity;
});
const activityRepo = new ActivityRepo(allActivity);
let currentUser;

// ~~~~~ FUNCTIONS ~~~~~
function start() {
  getRandomUser();
  displayUserInfoCard(currentUser);
  displayHydrationInfo(currentUser, "2019/09/22");
  displaySleepInfo(currentUser, "2019/09/22");
  displayActivityInfo(currentUser, "2019/09/22");
}

function getRandomUser() {
  currentUser = users[Math.floor(Math.random() * users.length)];
}

function displayUserInfoCard(user) {
  header.innerHTML = `
    <h1>My Fitness Data</h1>
    <h2>Hello, ${user.getFirstName()}!</h2>
  `
  userInfoCard.innerHTML = `
    <div class="user widget">
      <div class="infosection">
        <p><b>Your User ID:</b></p>
        <p>${user.id}</p>
      </div>
      <div class="infosection">
        <p><b>Your Name:</b></p>
        <p>${user.name}</p>
      </div>
      <div class="infosection">
        <p><b>Your Email:</b></p>
        <p>${user.email}</p>
      </div>
      <p><b>Your Friends:</b></p>
      <p>${userRepo.getUserFriendNames(user.id)}</p>
    </div>
    <div class="user widget">
      <p class="number">${user.strideLength} ft</p>
      <p class="description">your stride length</p>
      <p class="number">${user.getFormattedStepGoal()} steps</p>
      <p class="description">your daily step goal</p>
      <p class="number">${userRepo.getAllUserAvgStepGoal()}</p>
      <p class="description">avg user step goal</p>
    </div>`;
}

function displayHydrationInfo(user, date) {
  const pastWeekHydration = hydrationRepo.getUserOzByWeek(user.id, date);
  // pastWeekHydrationObjects.forEach(hydration => hydration.date = moment(hydration.date, "MMM-DD")
  hydrationSection.innerHTML = `
    <h2>Hydration</h2>
    <div class="hydration widget">
      <p class="number">${hydrationRepo.getUserOzByDate(user.id, date)} oz</p>
      <p class="description">water drank today</p>
    </div>
    <div class="hydration widget">
      <p class="number">${hydrationRepo.getUserAvgDailyOzAllTime(user.id)} oz/day</p>
      <p class="description">average water drank</p>
    </div>
    <div class="hydration widget">
      <p>Your hydration stats by week:</p>
      <p>${pastWeekHydration[0].date}: ${pastWeekHydration[0].numOunces} oz</p>
      <p>${pastWeekHydration[1].date}: ${pastWeekHydration[1].numOunces} oz</p>
      <p>${pastWeekHydration[2].date}: ${pastWeekHydration[2].numOunces} oz</p>
      <p>${pastWeekHydration[3].date}: ${pastWeekHydration[3].numOunces} oz</p>
      <p>${pastWeekHydration[4].date}: ${pastWeekHydration[4].numOunces} oz</p>
      <p>${pastWeekHydration[5].date}: ${pastWeekHydration[5].numOunces} oz</p>
      <p>${pastWeekHydration[6].date}: ${pastWeekHydration[6].numOunces} oz</p>
    </div>`;
}

function displaySleepInfo(user, date) {
  sleepStats.innerHTML = `
    <h2>Sleep</h2>
    <div class="widget">
      <p>Hours slept last night: ${sleepRepo.getUserSleepHrsByDate(user.id, date)}</p>
      <p>Sleep quality last night: ${sleepRepo.getUserSleepQualityByDate(user.id, date)}</p>
    </div>
    <div class="widget">
      <p>All-time average sleep quality: ${sleepRepo.getUserAvgSleepQualityAllTime(user.id)}</p>
      <p>All-time average hours slept: ${sleepRepo.getUserAvgHrsSleptAllTime(user.id)}</p>
    </div>`;
  displaySleepChart();
}

function displaySleepChart() {
  let weekSleepChart = new Chart(sleepHoursWeek, {
    type: 'line',
    data: {
      labels: Object.keys(sleepRepo.getSleepHoursByWeek(currentUser.id, "2019/09/22")),
      datasets: [{
        label: 'Hours Slept',
        backgroundColor: '#536DFE',
        borderColor: '#536DFE',
        fill: false,
        data: Object.values(sleepRepo.getSleepHoursByWeek(currentUser.id, "2019/09/22"))
      }, {
        label: 'Sleep Quality',
        backgroundColor: '#303f9f',
        borderColor: '#303f9f',
        fill: false,
        data: Object.values(sleepRepo.getSleepQualityByWeek(currentUser.id, "2019/09/22"))
      }]
    },
    options: {
      // maintainAspectRatio: false,
      title: {
        display: true,
        text: "Your sleep stats for the week:",
        fontSize: 16,
        fontColor: "#303f9f"
      },
      legend: {
        // display: false
        labels: {
          fontColor: "#303f9f"
        },
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: "#303f9f",
            beginAtZero: true
          },
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Value",
            fontStyle: 'bold',
            fontColor: "#303f9f"
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: "#303f9f",
          },
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Date",
            fontStyle: 'bold',
            fontColor: "#303f9f"
          }
        }]
      }
    }
  });
}

function displayActivityInfo(user, date) {
  const pastWeekActivityObjects = activityRepo.getActivityDataByWeek(user.id, date);
  activitySection.innerHTML = `
    <h2>Activity</h2>
    <div class="widget">
      <p>Steps taken today: ${activityRepo.getStepsTaken(user, date)}</p>
      <p>Minutes active today: ${activityRepo.getMinsActive(user, date)}</p>
      <p>Distance walked today: ${activityRepo.getMilesWalked(user, date)} miles</p>
      <p>Flights of stairs climbed today: ${activityRepo.getStairs(user, date)}</p>
    </div>
    <div class="widget">
      <p>All users steps taken today: ${activityRepo.getAllUsersAvgStepsByDate(date)}</p>
      <p>All users minutes active today: ${activityRepo.getAllUsersAvgMinsByDate(date)}</p>
      <p>All users flights of stairs climbed today: ${activityRepo.getAllUsersAvgStairsByDate(date)}</p>
    </div>
    <div class="widget">
      <p>Your activity stats by week:</p>
      <p>${pastWeekActivityObjects[0].date}: ${pastWeekActivityObjects[0].numSteps} steps taken, ${pastWeekActivityObjects[0].minutesActive} minutes active, ${pastWeekActivityObjects[0].flightsOfStairs} flights of stairs climbed</p>
      <p>${pastWeekActivityObjects[1].date}: ${pastWeekActivityObjects[1].numSteps} steps taken, ${pastWeekActivityObjects[1].minutesActive} minutes active, ${pastWeekActivityObjects[0].flightsOfStairs} flights of stairs climbed</p>
      <p>${pastWeekActivityObjects[2].date}: ${pastWeekActivityObjects[2].numSteps} steps taken, ${pastWeekActivityObjects[2].minutesActive} minutes active, ${pastWeekActivityObjects[0].flightsOfStairs} flights of stairs climbed</p>
      <p>${pastWeekActivityObjects[3].date}: ${pastWeekActivityObjects[3].numSteps} steps taken, ${pastWeekActivityObjects[3].minutesActive} minutes active, ${pastWeekActivityObjects[0].flightsOfStairs} flights of stairs climbed</p>
      <p>${pastWeekActivityObjects[4].date}: ${pastWeekActivityObjects[4].numSteps} steps taken, ${pastWeekActivityObjects[4].minutesActive} minutes active, ${pastWeekActivityObjects[0].flightsOfStairs} flights of stairs climbed</p>
      <p>${pastWeekActivityObjects[5].date}: ${pastWeekActivityObjects[5].numSteps} steps taken, ${pastWeekActivityObjects[5].minutesActive} minutes active, ${pastWeekActivityObjects[0].flightsOfStairs} flights of stairs climbed</p>
      <p>${pastWeekActivityObjects[6].date}: ${pastWeekActivityObjects[6].numSteps} steps taken, ${pastWeekActivityObjects[6].minutesActive} minutes active, ${pastWeekActivityObjects[0].flightsOfStairs} flights of stairs climbed</p>
    </div>`;
}
