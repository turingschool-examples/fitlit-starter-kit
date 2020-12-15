// ~~~~~ QUERY SELECTORS ~~~~~
const userInfoCard = document.querySelector('.user');
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
    <section class="user-info-card widget">
      <h2 class="welcome">Hello,<br>${user.getFirstName()}.</h2>
      <aside class="user-stats">
        <section class="user widget">
          <p class="number">${user.strideLength} ft</p>
          <p class="description">your stride length</p>
        </section>
        <section class="user widget">
          <p class="number">${user.getFormattedStepGoal()} steps</p>
          <p class="description">your daily step goal</p>
        </section>
        <section class="user widget">
          <p class="number">${userRepo.getAllUserAvgStepGoal()}</p>
          <p class="description">avg user step goal</p>
        </section>
      </aside>
      <section class="info">
        <p class="infosection"><b>Your User ID:</b><br>${user.id}</p>
        <p class="infosection"><b>Your Name:</b><br>${user.name}</p>
        <p class="infosection"><b>Your Email:</b><br>${user.email}</p>
        <p class="infosection"><b>Your Friends:</b><br>${userRepo.getUserFriendNames(user.id)}</p>
      </section>
    </section>`;
}

function displayHydrationInfo(user, date) {
  hydrationStats.innerHTML = `
    <div class="hydration widget">
      <h3>Today</h3>
      <div class="stats">
        <div class="stat">
          <p class="number">${hydrationRepo.getUserOzByDate(user.id, date)}</p>
          <p class="description">oz drank</p>
        </div>
      </div>
    </div>
    <div class="hydration widget">
      <h3>All-Time</h3>
      <div class="stats">
        <div class="stat">
          <p class="number">${hydrationRepo.getUserAvgDailyOzAllTime(user.id)}</p>
          <p class="description">avg oz drank per day</p>
        </div>
      </div>
    </div>`;
  displayHydrationChart();
}

function displayHydrationChart() {
  let weekHydrationChart = new Chart(hydrationWeekChart, {
    type: 'bar',
    data: {
      labels: Object.keys(sleepRepo.getSleepHoursByWeek(currentUser.id, "2019/09/22")),
      datasets: [{
        label: 'Oz Drank',
        backgroundColor: '#00B0FF',
        borderColor: '#00B0FF',
        fill: false,
        data: Object.values(sleepRepo.getSleepHoursByWeek(currentUser.id, "2019/09/22"))
      }]
    },
    options: {
      // maintainAspectRatio: false,
      title: {
        display: true,
        text: "Your hydration stats for the week:",
        fontSize: 16,
        fontColor: "#0070A3"
      },
      legend: {
        display: false,
        labels: {
          fontColor: "#0070A3"
        },
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: "#0070A3",
            beginAtZero: true
          },
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Oz",
            fontStyle: 'bold',
            fontColor: "#0070A3"
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: "#0070A3",
          },
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Date",
            fontStyle: 'bold',
            fontColor: "#0070A3"
          }
        }]
      }
    }
  });
}

function displaySleepInfo(user, date) {
  sleepStats.innerHTML = `
    <div class="sleep widget">
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
    <div class="sleep widget">
      <h3>All-Time</h3>
      <div class="stats">
        <div class="stat">
          <p class="number">${sleepRepo.getUserAvgHrsSleptAllTime(user.id)}</p>
          <p class="description">avg hours slept</p>
        </div>
        <div class="stat">
          <p class="number">${sleepRepo.getUserAvgSleepQualityAllTime(user.id)}</p>
          <p class="description">avg sleep quality</p>
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
    <div class="activity widget">
      <h3>Today</h3>
      <div class="stats">
        <div class="stat">
          <p class="number">${activityRepo.getMilesWalked(user, date)}</p>
          <p class="description">miles walked</p>
        </div>
      </div>
    </div>`;
  // activityStats.innerHTML = `
  //   <div class="widget">
  //     <p>Steps taken today: ${activityRepo.getStepsTaken(user, date)}</p>
  //     <p>Minutes active today: ${activityRepo.getMinsActive(user, date)}</p>
  //     <p>Flights of stairs climbed today: ${activityRepo.getStairs(user, date)}</p>
  //   </div>
  //   <div class="widget">
  //     <p>All users steps taken today: ${activityRepo.getAllUsersAvgStepsByDate(date)}</p>
  //     <p>All users minutes active today: ${activityRepo.getAllUsersAvgMinsByDate(date)}</p>
  //     <p>All users flights of stairs climbed today: ${activityRepo.getAllUsersAvgStairsByDate(date)}</p>
  //   </div>`;
  displayActivityChart();
}

function displayActivityChart() {
  let weekHydrationChart = new Chart(activityWeekChart, {
    type: 'line',
    data: {
      labels: Object.keys(sleepRepo.getSleepHoursByWeek(currentUser.id, "2019/09/22")),
      datasets: [{
        label: 'Step Count',
        backgroundColor: '#FF4081',
        borderColor: '#FF4081',
        fill: false,
        data: Object.values(sleepRepo.getSleepHoursByWeek(currentUser.id, "2019/09/22"))
      }, {
        label: 'Flights of Stairs Climbed',
        backgroundColor: '#F50057',
        borderColor: '#F50057',
        fill: false,
        data: Object.values(sleepRepo.getSleepQualityByWeek(currentUser.id, "2019/09/22"))
      }, {
        label: 'Minutes Active',
        backgroundColor: '#C51162',
        borderColor: '#C51162',
        fill: false,
        data: Object.values(sleepRepo.getSleepQualityByWeek(currentUser.id, "2019/09/22"))
      }]
    },
    options: {
      // maintainAspectRatio: false,
      title: {
        display: true,
        text: "Your activity stats for the week:",
        fontSize: 16,
        fontColor: "#C51162"
      },
      legend: {
        // display: false
        labels: {
          fontColor: "#C51162"
        },
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: "#C51162",
            beginAtZero: true
          },
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Value",
            fontStyle: 'bold',
            fontColor: "#C51162"
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: "#C51162",
          },
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Date",
            fontStyle: 'bold',
            fontColor: "#C51162"
          }
        }]
      }
    }
  });
}
