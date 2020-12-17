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

//EVENT LISTENERS
window.addEventListener('load', loadPage);
document.getElementById("today").addEventListener("change", function() {today = this.value.split('-').join('/')});
document.getElementById("start").addEventListener("change", function() {startDate = this.value.split('-').join('/')});
document.getElementById("end").addEventListener("change", function() {endDate = this.value.split('-').join('/')});

//GREETING & PROFILE:
const greetAndShowProfile = () => {
  document.querySelector('.greeting-input').innerText =  `Welcome ${user.getFirstName()}!`
  document.querySelector('.user-name').innerText =  `Name: ${user.name}`
  document.querySelector('.user-address').innerText = `Address: ${user.address}`
  document.querySelector('.user-email').innerText = `Email: ${user.email}`
  document.querySelector('.user-stride-length').innerText = `Stride Length: ${user.strideLength} ft`
  document.querySelector('.user-friends-length').innerText = `FitFriends: ${user.friends.length}`
}

//If we want to do week display in just a text format too, this and the "week-list-data" section I added in HTML would do that:

//HELPER FUNCTION FOR WEEKSTAT DISPLAY
const displayStatsForWeek = (week, fitnessType, displayArea) => {
  const display = week.map(day => `<p>${day.date}: ${day[fitnessType]}</p>`).join('')
  displayArea.innerHTML = `<h2>Display of ${fitnessType}:</h2><p>${display}</p>`
}

//DISPLAY WEEK STATS
const displayWeekStats = () => {
  displayStatsForWeek(weekActivities, 'minutesActive', document.querySelector('.week-minutes-active'))
  displayStatsForWeek(weekActivities, 'numSteps', document.querySelector('.week-steps'))
  displayStatsForWeek(weekWater, 'numOunces', document.querySelector('.week-water'))
  displayStatsForWeek(weekSleep, 'hoursSlept', document.querySelector('.week-sleep-hours'))
  displayStatsForWeek(weekSleep, 'numSteps', document.querySelector('.week-sleep-quality'))
}

//DISPLAY HYDRATION STATS:
const showHydrationStats = () => {
  document.querySelector('.water-stats').innerText = `Water consumed today: ${communityHydration.calculateTotalWaterOnDay(user.userID, today)} OZ`
}

//DISPLAY STEPS STATS:
const showIfUserMetStepGoal = () => {
  const goalDisplay = document.querySelector('.user-met-step-goal-today')
  if (activity.verifyIfStepGoal(user)) {
    goalDisplay.innerHTML = '<p>You\'ve met your Daily Step Goal!</p>'
  } else {
    goalDisplay.innerHTML = '<p>Keep working toward your Daily Step Goal.</p>'
  }
}

const showStepStats = () => {
  showIfUserMetStepGoal()
  document.querySelector('.user-step-goal-input').innerText = `${user.dailyStepGoal}`
  document.querySelector('.community-step-goal-input').innerText = `${community.findAverageStepGoal()}`
  document.querySelector('.user-step-miles').innerHTML = `Miles: ${activity.getStepMiles(user)}`
  document.querySelector('.user-steps-today').innerHTML = `Steps: ${activity.numSteps}`
  document.querySelector('.user-days-exceeding-goal').innerHTML = `Community Average Steps: ${communityActivity.findCommunityAverage(today, 'numSteps')}`
  document.querySelector('.community-steps-today').innerHTML = `Days Step Goal Has Been Met: ${communityActivity.daysExceedingStepGoal(user).length}`
}

//DISPLAY ACTIVITY STATS:
const showMinutesActiveStats = () => {
  document.querySelector('.user-minutes-active').innerText = `Minutes Active: ${activity.minutesActive}`
  document.querySelector('.user-week-average-minutes-active').innerText = `Community Average Minutes Active: ${communityActivity.findCommunityAverage(today, 'minutesActive')}`
  document.querySelector('.community-average-minutes-active').innerText = `Weekly Average Minutes Active: ${communityActivity.findWeekActiveMinutesAverage(startDate, endDate, user)}`
}

//DISPLAY STAIRS STATS:
const showStairsStats = () => {
  document.querySelector('.community-average-stairs').innerText = `Community Average Stairs Climbed: ${communityActivity.findCommunityAverage(today, 'stairsClimbed')}`
  document.querySelector('.user-record-stairs').innerText =  `Your Record Stairs Climbed: ${communityActivity.findRecordStairs(user)}`
}

//DISPLAY SLEEP STATS
const showSleepStats = () => {
  document.querySelector('.sleep-quantity-last-night').innerText = `You slept ${communitySleep.findHrsSleptOnDay(user.userID, today)} hrs`
  document.querySelector('.sleep-quality-last-night').innerText = `Your sleep quality score: ${communitySleep.findSleepQualityOnDay(user.userID, today)}`
  document.querySelector('.sleep-average-hours-input').innerText = `You average ${communitySleep.calculateAvgSleepHrsPerDay(user.userID)} hrs/day`
  document.querySelector('.sleep-average-quality-input').innerText = `You average a score of ${communitySleep.calculateAvgSleepQualPerDay(user.userID)}/day`
}

//SHOW FRIENDS:
const showFriends = () => {
  const friendsDisplay = user.friends.map(friend => `<div class="friend-name">${community.getUserData(friend).getFirstName()}</div>`)
  document.querySelector('.friends-names').innerHTML = `${friendsDisplay.join('')}`
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
}

//GRAPH HELPER FUNCTIONS
const mapWeek = (week, fitnessType) => week.map(day => day[fitnessType])

const weekDates = weekActivities.map(day => day.date)

const makeYs = (number) => new Array(weekActivities.length).fill(number)

const findFriendSteps = (friend) => {
  friendData = community.getUserData(friend)
  friendWeek = communityActivity.findWeekActivities(startDate, endDate, friendData)
  return friendWeek.map(object => object.numSteps)
}

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
      data: findFriendSteps(user.friends[0]),
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }, 
    {
      label: `${getFriendName(user.friends[1])}'s Steps`,
      data: findFriendSteps(user.friends[1]),
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }, 
    {
      label: `${getFriendName(user.friends[2])}'s Steps`,
      data: findFriendSteps(user.friends[2]),
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  }
})
