/* eslint-disable max-len */

//GLOBAL VARIABLES
let today = '2019/09/22'
let startDate = '2019/09/16'
let endDate = '2019/09/22'

const community = new UserRepository(userData);
const user = community.users[0];
const communityHydration = new CommunityHydration(hydrationData);
const communityActivity = new CommunityActivity(activityData);
const activity = communityActivity.activities[0]
const communitySleep = new CommunitySleep(sleepData);
const sleep = communitySleep.sleeps[0]

const weekActivities = communityActivity.findWeekActivities(startDate, endDate, user)
const weekSleep = communitySleep.calculateSleepStatsWeek(user.userID, startDate, endDate)
const weekWater = communityHydration.calculateTotalWeek(user.userID, startDate, endDate)

const activeMinCard = document.querySelector('#active-minutes');
const activeMinCardInfo = document.querySelector('.active-minutes-category-content');
const activeIcon = document.querySelector('.active-icon');
const sleepCard = document.querySelector('#sleep-cat');
const sleepCardInfo = document.querySelector('.sleep-category-content');
const sleepIcon = document.querySelector('.sleep-icon');
const stairsCard = document.querySelector('#stairs');
const stairsCardInfo = document.querySelector('.stairs-category-content');
const stairsIcon = document.querySelector('.stairs-icon');
const stepsCard = document.querySelector('#steps');
const stepsCardInfo = document.querySelector('.steps-category-content');
const stepsIcon = document.querySelector('.steps-icon');
const waterCard = document.querySelector('#water');
const waterCardInfo = document.querySelector('.water-category-content');
const waterIcon = document.querySelector('.water-icon');

//EVENT LISTENERS
window.addEventListener('load', loadPage);
activeMinCard.addEventListener('click', displayCardInfo);
sleepCard.addEventListener('click', displayCardInfo);
stairsCard.addEventListener('click', displayCardInfo);
stepsCard.addEventListener('click', displayCardInfo);
waterCard.addEventListener('click', displayCardInfo);
document.getElementById("today").addEventListener("change", function() {today = this.value.split('-').join('/')});
document.getElementById("start").addEventListener("change", function() {startDate = this.value.split('-').join('/')});
document.getElementById("end").addEventListener("change", function() {endDate = this.value.split('-').join('/')});


//GREETING & PROFILE:
const greetAndShowProfile = () => {
  document.querySelector('.greeting-input').innerText =  `Welcome, ${user.getFirstName()}!`
  document.querySelector('.user-name').innerText =  `Name: ${user.name}`
  document.querySelector('.user-address').innerText = `Address: ${user.address}`
  document.querySelector('.user-email').innerText = `Email: ${user.email}`
  document.querySelector('.user-stride-length').innerText = `Stride Length: ${user.strideLength} ft`
  document.querySelector('.user-friends-length').innerText = `FitFriends: ${user.friends.length}`
}

//If we want to do week display in just a text format too, this and the "week-list-data" section I added in HTML would do that:

//HELPER FUNCTION FOR WEEKSTAT DISPLAY
const displayStatsForWeek = (week, fitnessType, displayArea) => {
  const display = week.map(day => `<p class="week-display-text">${day.date}: ${day[fitnessType]}</p>`).join('')
  displayArea.innerHTML = `
    <article class="week-display">
      <h2 class="week-display-title"> Display of ${fitnessType}: </h2>
      <p>${display}</p>
    </article>
  `
}

//TOGGLE DISPLAY CARDS
const toggleCategory = (category) => category.classList.toggle("hidden")

//DISPLAY USER CARD INFO
function displayCardInfo(event) {
  if(event.target.closest('#active-minutes')) {
    toggleCategory(activeMinCardInfo);
    toggleCategory(activeIcon);
  } else if(event.target.closest('#stairs')) {
    toggleCategory(stairsCardInfo);
    toggleCategory(stairsIcon);
  } else if(event.target.closest('#steps')) {
    toggleCategory(stepsCardInfo);
    toggleCategory(stepsIcon);
  } else if(event.target.closest('#water')) {
    toggleCategory(waterCardInfo);
    toggleCategory(waterIcon);
  } else if(event.target.closest('#sleep-cat')){
    toggleCategory(sleepCardInfo);
    toggleCategory(sleepIcon);
  }
}

//DISPLAY WEEK STATS
const displayWeekStats = () => {
  displayStatsForWeek(weekActivities, 'minutesActive', document.querySelector('.week-minutes-active'))
  displayStatsForWeek(weekActivities, 'numSteps', document.querySelector('.week-steps'))
  displayStatsForWeek(weekWater, 'numOunces', document.querySelector('.week-water'))
  displayStatsForWeek(weekSleep, 'hoursSlept', document.querySelector('.week-sleep-hours'))
  displayStatsForWeek(weekSleep, 'sleepQuality', document.querySelector('.week-sleep-quality'))
}

//DISPLAY HYDRATION STATS:
const showHydrationStats = () => {
  document.querySelector('.water-stats').innerHTML = `<p class="subtitle">Water consumed today:</p> <p>${communityHydration.calculateTotalWaterOnDay(user.userID, today)} OZ<p>`
}

//DISPLAY STEPS STATS:
const showIfUserMetStepGoal = () => {
  const goalDisplay = document.querySelector('.user-met-step-goal-today')
  if (activity.verifyIfStepGoal(user)) {
    goalDisplay.innerHTML = '<p class="title">You\'ve met your Daily Step Goal!</p>'
  } else {
    goalDisplay.innerHTML = '<p class="title">Keep working toward your Daily Step Goal.</p>'
  }
}

const showStepStats = () => {
  showIfUserMetStepGoal()
  document.querySelector('.user-step-goal-input').innerText = `${user.dailyStepGoal}`
  document.querySelector('.community-step-goal-input').innerText = `${community.findAverageStepGoal()}`
  document.querySelector('.user-step-miles').innerHTML = `<p class="subtitle">Miles:</p> <p>${activity.getStepMiles(user)}</p>`
  document.querySelector('.user-steps-today').innerHTML = `<p class="subtitle">Steps:</p> <p>${activity.numSteps}</p>`
  document.querySelector('.user-days-exceeding-goal').innerHTML = `<p class="subtitle">Community Average Steps:</p> <p>${communityActivity.findCommunityAverage(today, 'numSteps')}</p>`
  document.querySelector('.community-steps-today').innerHTML = `<p class="subtitle">Days Step Goal Has Been Met:</p> <p>${communityActivity.daysExceedingStepGoal(user).length}</p>`
}

//DISPLAY ACTIVITY STATS:
const showMinutesActiveStats = () => {
  document.querySelector('.user-minutes-active').innerHTML = `<p class="subtitle">Minutes Active:</p> <p>${activity.minutesActive}</p>`
  document.querySelector('.user-week-average-minutes-active').innerHTML = `<p class="subtitle">Community Average Minutes Active:</p> <p>${communityActivity.findCommunityAverage(today, 'minutesActive')}</p>`
  document.querySelector('.community-average-minutes-active').innerHTML = `<p class="subtitle">Weekly Average Minutes Active:</p> <p>${communityActivity.findWeekActiveMinutesAverage(startDate, endDate, user)}</p>`
}

//DISPLAY STAIRS STATS:
const showStairsStats = () => {
  document.querySelector('.community-average-stairs').innerHTML= `<p class="subtitle">Community Average Stairs Climbed:</p> <p>${communityActivity.findCommunityAverage(today, 'stairsClimbed')}</p>`
  document.querySelector('.user-record-stairs').innerHTML =  `<p class="subtitle">Your Record Stairs Climbed:</p> <p>${communityActivity.findRecordStairs(user)}</p>`
}

//DISPLAY SLEEP STATS
const showSleepStats = () => {
  document.querySelector('.sleep-quantity-last-night').innerHTML = `You slept ${communitySleep.findHrsSleptOnDay(user.userID, today)} hrs`
  document.querySelector('.sleep-quality-last-night').innerText = `Sleep Quality Score: ${communitySleep.findSleepQualityOnDay(user.userID, today)}`
  document.querySelector('.sleep-average-hours-input').innerHTML = `<p class="subtitle">You average ${communitySleep.calculateAvgSleepHrsPerDay(user.userID)} hrs/day</p>`
  document.querySelector('.sleep-average-quality-input').innerText = `You average a score of ${communitySleep.calculateAvgSleepQualPerDay(user.userID)}/day`
}

//SHOW FRIENDS:
const showFriends = () => {
  const friendsDisplay = user.friends.map(friend => `<div class="friend-name">${community.getUserData(friend).getFirstName()}</div>`)
  document.querySelector('.friends-names').innerHTML = `${friendsDisplay.join('')}`
}

const friendWeeks = user.friends.map(friend => {
  friendUser = community.getUserData(friend)
  return communityActivity.findWeekActivities(startDate, endDate, friendUser)
})

const findStepFriendWinner = () => {
  const weekTotalSteps = friendWeeks.map(week => {
    return week.map(activity => activity.numSteps)
  })
  const weekTotals = weekTotalSteps.map(week => {
    return week.reduce((weekSteps, stepsOnDay) => weekSteps + stepsOnDay, 0)
  })
  const mostSteps = Math.max(...weekTotals)
  const index = weekTotals.indexOf(mostSteps)
  const winningFriendID = friendWeeks[index][0].userID
  const winningFriendName = community.getUserData(winningFriendID).getFirstName()
  document.querySelector('.friends-winner').innerHTML = `${winningFriendName} is winning!`
}


//PAGE LOAD FUNCTION
function loadPage() {
  greetAndShowProfile()
  displayWeekStats()
  showHydrationStats()
  showStepStats()
  showMinutesActiveStats()
  showStairsStats()
  showSleepStats()
  showFriends()
  findStepFriendWinner()
}

//GRAPH HELPER FUNCTIONS
const mapWeek = (week, fitnessType) => week.map(day => day[fitnessType])

const weekDates = weekActivities.map(day => day.date)

const makeYs = (number) => new Array(weekActivities.length).fill(number)

const getFriendName = (friend) => community.getUserData(friend).getFirstName()

//STEPS GRAPH
const stepChart = new Chart(document.getElementById('stepChart').getContext('2d'), {
  type: 'bar',
  data: {
    labels: weekDates,
    datasets: [{
      label: `Your Steps`,
      data: mapWeek(weekActivities, 'numSteps'),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    },
    {
      type: 'line',
      label: `Your Step Goal`,
      data: makeYs(user.dailyStepGoal),
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    },
    {
      type: 'line',
      label: `Community Average Step Goal`,
      data: makeYs(community.findAverageStepGoal()),
      backgroundColor: 'rgba(255, 10, 235, 0.2)',
      borderColor: 'rgba(255, 10, 235, 1)',
      borderWidth: 1
    },
    {
      type: 'line',
      label: `Community Average Steps`,
      data: makeYs(communityActivity.findCommunityAverage(today, 'numSteps')),
      backgroundColor: 'rgba(0, 162, 235, 0.2)',
      borderColor: 'rgba(0, 162, 235, 1)',
      borderWidth: 1
    }]
  }
});

//STAIRS GRAPH
const stairsChart = new Chart(document.getElementById('stairsChart').getContext('2d'), {
  type: 'bar',
  data: {
    labels: weekDates,
    datasets: [{
      label: 'Your Stairs Climbed',
      data: mapWeek(weekActivities, 'stairsClimbed'),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    },
    {
      type: 'line',
      label: 'Your Record Stairs Climbed',
      data: makeYs(communityActivity.findRecordStairs(user)),
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    },
    {
      type: 'line',
      label: 'Community Average Stairs Climbed',
      data: makeYs(communityActivity.findRecordStairs(user)),
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  }
});

//ACTIVE MINUTES GRAPH
const activeMinutesChart = new Chart(document.getElementById('activeMinutesChart').getContext('2d'), {
  type: 'bar',
  data: {
    labels: weekDates,
    datasets: [{
      label: 'Your Active Minutes',
      data: mapWeek(weekActivities, 'minutesActive'),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    },
    {
      type: 'line',
      label: 'Community Average Active Minutes',
      data: makeYs(communityActivity.findCommunityAverage(today, 'minutesActive')),
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  }
});

//WATER GRAPH
const waterChart = new Chart(document.getElementById('waterChart').getContext('2d'), {
  type: 'bar',
  data: {
    labels: weekDates,
    datasets: [{
      label: 'Your Total Ounces',
      data: mapWeek(weekWater, 'numOunces'),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  }
});

//SLEEP GRAPH
const sleepChart = new Chart(document.getElementById('sleepChart').getContext('2d'), {
  type: 'bar',
  data: {
    labels: weekDates,
    datasets: [{
      label: `Your Hours Slept`,
      data: mapWeek(weekSleep, 'hoursSlept'),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    },
    {
      label: `Your Sleep Quality`,
      data: mapWeek(weekSleep, 'sleepQuality'),
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    },
    {
      type: 'line',
      label: `Your All-Time Average Sleep Quality`,
      data: makeYs(communitySleep.calculateAvgSleepQualPerDay(sleep.userID)),
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    },
    {
      type: 'line',
      label: `Your All-Time Average Sleep Quality`,
      data: makeYs(communitySleep.calculateAvgSleepHrsPerDay(sleep.userID)),
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  }
});

// FRIENDS GRAPH
const friendChart = new Chart(document.getElementById('friendChart').getContext('2d'), {
  type: 'line',
  data: {
    labels: weekDates,
    datasets: [{
      label: `Your Steps`,
      data: mapWeek(weekActivities, 'numSteps'),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    },
    {
      label: `${getFriendName(user.friends[0])}'s Steps`,
      data: mapWeek(friendWeeks[0], 'numSteps'),
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    },
    {
      label: `${getFriendName(user.friends[1])}'s Steps`,
      data: mapWeek(friendWeeks[1], 'numSteps'),
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    },
    {
      label: `${getFriendName(user.friends[2])}'s Steps`,
      data: mapWeek(friendWeeks[2], 'numSteps'),
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  }
})
