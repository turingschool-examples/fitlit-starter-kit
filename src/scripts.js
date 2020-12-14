// ~~~~~ QUERY SELECTORS ~~~~~
const userInfoCard = document.querySelector('.user-info-card');
const hydrationStats = document.querySelector('.hydration-stats');
const hydrationWeekChart = document.querySelector('.hydration-week-chart');
const sleepStats = document.querySelector('.sleep-stats');
const sleepWeekChart = document.querySelector('.sleep-week-chart');
const activityStats = document.querySelector('.activity-stats');
const activityWeekChart = document.querySelector('.activity-week-chart');

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
  userInfoCard.innerHTML = `
    <div class="user widget">
      <h2>Welcome, ${user.getFirstName()}!</h2>
      <div class="infosection">
        <p><b>Your User ID:</b><br>${user.id}</p>
      </div>
      <div class="infosection">
        <p><b>Your Name:</b><br>${user.name}</p>
      </div>
      <div class="infosection">
        <p><b>Your Email:</b><br>${user.email}</p>
      </div>
      <p><b>Your Friends:</b><br>${userRepo.getUserFriendNames(user.id)}</p>
    </div>
    <div class="user-stats">
      <div class="user widget">
        <p class="number">${user.strideLength} ft</p>
        <p class="description">your stride length</p>
      </div>
      <div class="user widget">
        <p class="number">${user.getFormattedStepGoal()} steps</p>
        <p class="description">your daily step goal</p>
      </div>
      <div class="user widget">
        <p class="number">${userRepo.getAllUserAvgStepGoal()}</p>
        <p class="description">avg user step goal</p>
      </div>
    </div>`;
}

function displayHydrationInfo(user, date) {
  hydrationStats.innerHTML = `
    <div class="hydration widget">
      <p class="number">${hydrationRepo.getUserOzByDate(user.id, date)} oz</p>
      <p class="description">water drank today</p>
    </div>
    <div class="hydration widget">
      <p class="number">${hydrationRepo.getUserAvgDailyOzAllTime(user.id)} oz/day</p>
      <p class="description">avg water drank</p>
    </div>`;
  displayHydrationChart();
}

function displayHydrationChart() {
  let weekHydrationChart = new Chart(hydrationWeekChart, {
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

function displaySleepInfo(user, date) {
  sleepStats.innerHTML = `
    <div class="widget">
      <h3>Last Night</h3>
      <div class="stats">
        <div class="stat">
          <p class="number">${sleepRepo.getUserSleepHrsByDate(user.id, date)}</p>
          <p class="description">hours slept</p>
        </div>
        <div class="stat">
          <p class="number">${sleepRepo.getUserSleepQualityByDate(user.id, date)}</p>
          <p class="description">sleep quality</p>
        </div>
      </div>
    </div>
    <div class="widget">
      <h3>All-Time</h3>
      <div class="stats">
        <div class="stat">
          <p class="number">${sleepRepo.getUserAvgHrsSleptAllTime(user.id)}</p>
          <p class="description">avg hours slept</p>
        </div>
        <div class="stat">
          <p class="number">${sleepRepo.getUserAvgSleepQualityAllTime(user.id)}</p>
          <p class="description">avg quality</p>
        </div>
      </div>
    </div>`;
  displaySleepChart();
}

function displaySleepChart() {
  let weekSleepChart = new Chart(sleepWeekChart, {
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
  activityStats.innerHTML = `
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
    </div>`;
  displayActivityChart();
}

function displayActivityChart() {
  let weekHydrationChart = new Chart(activityWeekChart, {
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
