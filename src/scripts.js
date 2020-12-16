/* eslint-disable max-len */
const userMain = document.querySelector('.user-main')
const greeting = document.querySelector('.greeting')
const userProfile = document.querySelector('.user-profile')

const friends = document.querySelector('.friends')
const steps = document.querySelector('.steps')
const water = document.querySelector('.water');
const activeMinutes = document.querySelector('.active-minutes')
const stairs = document.querySelector('.stairs');
const userLatestSleep = document.querySelector('.user-latest-sleep-stats')
const sleepHours = document.querySelector('.sleep-hours')
const sleepQuality = document.querySelector('.sleep-quality')

const todayDateSelector = document.getElementById("today")
const startDateSelector = document.getElementById("start")
const endDateSelector = document.getElementById("end")

const graph = document.querySelector('.graph');
const graphTitle = document.querySelector('.title-graph');

const stepCanvas = document.getElementById('stepChart').getContext('2d')
const waterCanvas = document.getElementById('waterChart').getContext('2d')
const stairsCanvas = document.getElementById('waterChart').getContext('2d')
const activeMinutesCanvas = document.getElementById('waterChart').getContext('2d')
const sleepCanvas = document.getElementById('sleepChart').getContext('2d')
const friendCanvas = document.getElementById('waterChart').getContext('2d')

//since multiple methods will need these, global
let community = new UserRepository(userData);
let user = community.users[0];
let communityHydration = new CommunityHydration(hydrationData);
let hydration = communityHydration.hydrations[0];
let communityActivity = new CommunityActivity(activityData);
let activity = communityActivity.activities[0];
let communitySleep = new CommunitySleep(sleepData);
let sleep = communitySleep.sleeps[0];
let today = '2019/09/22'
let startDate = '2019/09/16'
let endDate = '2019/09/22'


window.addEventListener('load', loadPage);
todayDateSelector.addEventListener("change", function() {today = this.value.split('-').join('/')});
startDateSelector.addEventListener("change", function() {startDate = this.value.split('-').join('/')});
endDateSelector.addEventListener("change", function() {endDate = this.value.split('-').join('/')});

//GREETING:
function greetUser() {
  const userFirstName = user.getFirstName()
  greeting.insertAdjacentHTML('afterbegin', `<h2 class="greeting">Welcome ${userFirstName}!</h2>`)
}

//USER DATA:
const showProfile = () => {
  userProfile.insertAdjacentHTML('beforeend', `Name: ${user.name}<br>
  Address: ${user.address}<br>
  Email: ${user.email}<br>
  Stride Length: ${user.strideLength} ft<br>
  FitFriends: ${user.friends.length}
  `)
}

//ADD TODAY SLEEP STATS:
const showLatestSleepStatsUser = () => {

  userLatestSleep.insertAdjacentHTML('beforeend', `
    <p class="sleep-quantity-last-night">You slept ${communitySleep.findHrsSleptOnDay(sleep.userID, today)} hrs</p>
    <p class="sleep-quality-last-night">Your sleep quality score: ${communitySleep.findSleepQualityOnDay(sleep.userID, today)}</p>
    `)
}

//ADD ALL-TIME SLEEP STATS:
//sleep dada for latest day: hours slept and quality of sleep
const showAllSleepQuantity = () => {
  sleepHours.insertAdjacentHTML('afterbegin', `You average ${communitySleep.calculateAvgSleepHrsPerDay(sleep.userID)} hrs/day`)
}

const showAllSleepQuality = () => {
  sleepQuality.insertAdjacentHTML('afterbegin', `You average a score of ${communitySleep.calculateAvgSleepQualPerDay(sleep.userID)} /day`)
}
//ADD WEEK SLEEP STATS:
//hours slept and quality of sleep
const showSleepStatsWeek = (startDate, endDate) => {
  graphTitle.insertAdjacentHTML('afterend', `
    <article class="sleep-stats-week">Hours slept over the week of ${startDate}-${endDate}:
    <p>Day 1: ${communitySleep.calculateSleepStatsWeek(sleep.userID, startDate, endDate)[0].hoursSlept} HRS</p>
    <p>Day 2: ${communitySleep.calculateSleepStatsWeek(sleep.userID, startDate, endDate)[1].hoursSlept} HRS</p>
    <p>Day 3: ${communitySleep.calculateSleepStatsWeek(sleep.userID, startDate, endDate)[2].hoursSlept} HRS</p>
    <p>Day 4: ${communitySleep.calculateSleepStatsWeek(sleep.userID, startDate, endDate)[3].hoursSlept} HRS</p>
    <p>Day 5: ${communitySleep.calculateSleepStatsWeek(sleep.userID, startDate, endDate)[4].hoursSlept} HRS</p>
    <p>Day 6: ${communitySleep.calculateSleepStatsWeek(sleep.userID, startDate, endDate)[5].hoursSlept} HRS</p>
    <p>Day 7: ${communitySleep.calculateSleepStatsWeek(sleep.userID, startDate, endDate)[6].hoursSlept} HRS</p>
    </article>
  `)
}


//ADD TODAY's HYDRATION STATS:
const showHydrationStats = () => {
  water.insertAdjacentHTML('beforeend',
    `<p class="water-stats">Water consumed today: ${communityHydration.calculateTotalWaterOnDay(hydration.userID, today)} OZ</p>
    `)
}

//ADD WEEKLY HYDRATION STATS:
const showHydrationStatsWeek = (startDate, endDate) => {
  graphTitle.insertAdjacentHTML('afterend', `
    <article class="water-stats-week">Water consumed over the week of ${startDate}-${endDate}:
    <p>Day 1: ${communityHydration.calculateTotalWeek(hydration.userID, startDate, endDate)[0].numOunces} OZ</p>
    <p>Day 2: ${communityHydration.calculateTotalWeek(hydration.userID, startDate, endDate)[1].numOunces} OZ</p>
    <p>Day 3: ${communityHydration.calculateTotalWeek(hydration.userID, startDate, endDate)[2].numOunces} OZ</p>
    <p>Day 4: ${communityHydration.calculateTotalWeek(hydration.userID, startDate, endDate)[3].numOunces} OZ</p>
    <p>Day 5: ${communityHydration.calculateTotalWeek(hydration.userID, startDate, endDate)[4].numOunces} OZ</p>
    <p>Day 6: ${communityHydration.calculateTotalWeek(hydration.userID, startDate, endDate)[5].numOunces} OZ</p>
    <p>Day 7: ${communityHydration.calculateTotalWeek(hydration.userID, startDate, endDate)[6].numOunces} OZ</p>
    </article>
  `)
}

//STEPS STATS:
const showStepGoalComparison = () => {
  steps.insertAdjacentHTML('beforeend',
  `<h2>Steps</h2>
  <article class="user-step-goal">
    <h3>Your Daily Step Goal</h3>
      <p>${community.findAverageStepGoal()}</p>
  </article>
  <article class="community-step-goal">
    <h3>Community Average Step Goal</h3>
      <p>${user.dailyStepGoal}</p>
  </article>`)
}

const showIfUserMetStepGoal = () => {
  if (activity.verifyIfStepGoal(user)) {
    steps.innerHTML = '<p>You\'ve met your Daily Step Goal!</p>'
  } else {
    steps.innerHTML = '<p>Keep working toward your Daily Step Goal.</p>'
  }
}

const showUserStepsInMiles = () => {
  steps.insertAdjacentHTML('beforeend', `<p>Miles: ${activity.getStepMiles(user)}</p>`)
}

const showStepsToday = () => {
  steps.insertAdjacentHTML('beforeend', `<p>Steps: ${activity.numSteps}</p>`)
}

const showCommunityStepsToday = () => {
  steps.insertAdjacentHTML('beforeend', `<p>Community Average Steps: ${communityActivity.findCommunityAverage(today, 'numSteps')}</p>`)
}

const showNumberOfDaysExceedingStepGoal = () => {
  steps.insertAdjacentHTML('beforeend', `<p>Days Step Goal Has Been Met: ${communityActivity.daysExceedingStepGoal(user).length}</p>`)
}


//ADD ACTIVITY STATS:

const showMinutesActiveToday = () => {
  activeMinutes.insertAdjacentHTML('beforeend', `<p>Minutes Active: ${activity.minutesActive}</p>`)
}

const showCommunityActiveMinutesToday = () => {
  activeMinutes.insertAdjacentHTML('beforeend', `<p>Community Average Minutes Active: ${communityActivity.findCommunityAverage(today, 'minutesActive')}</p>`)
}

const showUserActiveMinutesWeekAverage = () => {
  activeMinutes.insertAdjacentHTML('beforeend', `<p>Weekly Average Minutes Active: ${communityActivity.findWeekActiveMinutesAverage("2019/09/16", "2019/09/22", user)}</p>`)
}

const showCommunityStairsToday = () => {
  stairs.insertAdjacentHTML('beforeend', `<p>Community Average Stairs Climbed: ${communityActivity.findCommunityAverage(today, 'stairsClimbed')}</p>`)
}

const showUserStairRecord = () => {
  stairs.insertAdjacentHTML('beforeend', `<p>Your Record Stairs Climbed: ${communityActivity.findRecordStairs(user)}</p>`)
}

const showStepStatsWeek = (startDate, endDate) => {
  let weekActivities = communityActivity.findWeekActivities(startDate, endDate, user)

  let activitiesDisplay = weekActivities.reduce((display, activity) => {
    display += `<p>${activity.date}: ${activity.numSteps} steps</p>`
    return display
  }, '')

  graphTitle.insertAdjacentHTML('afterend',
    `<article class="steps-stats-week">Steps taken over the week of ${startDate}-${endDate}:` + activitiesDisplay + '</article>')
}

const showMinutesActiveStatsWeek = (startDate, endDate) => {
  let weekActivities = communityActivity.findWeekActivities(startDate, endDate, user)

  let activitiesDisplay = weekActivities.reduce((display, activity) => {
    display += `<p>${activity.date}: ${activity.minutesActive} minutes active</p>`
    return display
  }, '')

  graphTitle.insertAdjacentHTML('afterend',
    `<article class="minutes-active-stats-week">Minutes Active over the week of ${startDate}-${endDate}:` + activitiesDisplay + '</article>')
}

const showActivitiesChartWhateverWeek = (startDate, endDate) => {
  let weekActivities = communityActivity.findWeekActivities(startDate, endDate, user)

  let activitiesDisplay = weekActivities.reduce((display, activity) => {
    display += `<p>${activity.date}: ${activity.stairsClimbed} stairs climbed</p>`
    return display
  }, '')

  graphTitle.insertAdjacentHTML('afterend',
    `<article class="stairs-stats-week">Stairs Climbed over the week of ${startDate}-${endDate}:` + activitiesDisplay + '</article>')
}

const showSleepStats = () => {
  showLatestSleepStatsUser();
  showAllSleepQuantity();
  showAllSleepQuality();
  showSleepStatsWeek("2019/09/16", "2019/09/22");
}

const showActivityStats = () => {
  showIfUserMetStepGoal()
  showNumberOfDaysExceedingStepGoal()
  showStepsToday()
  showUserStepsInMiles()
  showCommunityStepsToday()
  showMinutesActiveToday()
  showCommunityActiveMinutesToday()
  showUserActiveMinutesWeekAverage()
  showCommunityStairsToday()
  showUserStairRecord()
  // showStepStatsWeek("2019/09/16", "2019/09/22")
  // showMinutesActiveStatsWeek("2019/09/16", "2019/09/22")
  // showActivitiesChartWhateverWeek("2019/09/16", "2019/09/22")
}

//FRIENDS:
const showFriends = () => {
  const friendDisplay = user.friends.map(friend => {
    const friendName = community.getUserData(friend).getFirstName()
    return `<div>${friendName}</div>`
  })

  friends.innerHTML += friendDisplay.join(' ')
}

  const findFriendSteps = (friend) => {
    friendData = community.getUserData(friend)
    friendWeek = communityActivity.findWeekActivities(startDate, endDate, friendData)
    return friendWeek.map(object => object.numSteps)
  }

  const getFriendName = (friend) => {
    return community.getUserData(friend).getFirstName()
  }


//we can add other calls to this onload function
function loadPage() {
  greetUser()
  showProfile()
  showStepGoalComparison()
  showHydrationStats()
  showHydrationStatsWeek("2019/09/16", "2019/09/22")
  showFriends()
  showActivityStats()
  showSleepStats()
}
