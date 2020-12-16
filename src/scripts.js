/* eslint-disable max-len */
const userMain = document.querySelector('.user-main')
const userProfile = document.querySelector('.user-profile')
const friends = document.querySelector('.friends')
const userStepGoal = document.querySelector('.user-step-goal')
const communityStepGoal = document.querySelector('.community-step-goal')
const water = document.querySelector('.water');
const graph = document.querySelector('.graph');
const graphTitle = document.querySelector('.title-graph');
const steps = document.querySelector('.steps');
const activeMinutes = document.querySelector('.active-minutes')
const stairs = document.querySelector('.stairs');
const userLatestSleep = document.querySelector('.user-all-time-sleep-stats')

//since multiple methods will need these, global
let community = null;
let user = null;
let communityHydration = null;
let hydration = null;
let communityActivity = null;
let activity = null;
let communitySleep = null;
let sleep = null;
let today = "2019/09/22";
let yesterday = "2019/09/21"; //added this, but is there a better way to calculate off of "today"? -C
window.addEventListener('load', loadPage)

//this could just be done on lines 5 and 6,
//but if we want to ever load from local storage...
const createCommunity = () => {
  community = new UserRepository(userData)
  user = community.users[0]
  communityHydration = new CommunityHydration(hydrationData)
  hydration = communityHydration.hydrations[0]
  communityActivity = new CommunityActivity(activityData)
  activity = communityActivity.activities[0]
  communitySleep = new CommunitySleep(sleepData)
  sleep = communitySleep.sleeps[0]
}

//GREETING:
//populates the greeting
//could be refactored to one line if stil readible
const greetUser = () => {
  const userFirstName = user.getFirstName()
  userMain.insertAdjacentHTML('afterbegin', `<h2>Welcome ${userFirstName}!</h2>`)
}

//USER DATA:
//sets up the user userProfile
//we could make some of this hidden unless clicked?
//could also add a picture <img src=...> ?
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
  userLatestSleep.insertAdjacentHTML('beforeend',
    `<p class="sleep-stats">Last Night:</p>
    <p class="sleep-quality-last-night">Your sleep quality score: ${communitySleep.findSleepQualityOnDay(sleep.userID, yesterday)}</p>
    <p class="sleep-quantity-last-night">You slept ${communitySleep.findHrsSleptOnDay(sleep.userID, yesterday)} hrs</p>`)
}

//loads a display of the user's step goal
//also loads display of community step goal

//ADD TODAY SLEEP STATS:
//sleep dada for latest day: hours slept and quality of sleep

//ADD WEEK SLEEP STATS:
//hours slept and quality of sleep

const showStepGoalComparison = () => {
  userStepGoal.insertAdjacentHTML('beforeend', `<p>${user.dailyStepGoal}</p>`)
  communityStepGoal.insertAdjacentHTML('beforeend', `<p>${community.findAverageStepGoal()}</p>`)
}

//ADD TODAY's HYDRATION STATS:
const showHydrationStats = () => {
  water.insertAdjacentHTML('beforeend',
    `<p class="water-stats">Water consumed today: ${communityHydration.calculateTotalWaterOnDay(hydration.userID, today)} OZ</p>
    `)
}

//ADD WEEKLY HYDRATION STATS:
const showHydrationStatsWeek = (startDate, endDate) => {
  console.log(communityHydration.calculateTotalWeek(hydration.userID, startDate, endDate))
  graphTitle.insertAdjacentHTML('afterend',
    `<article class="water-stats-week">Water consumed over the week of ${startDate}-${endDate}:
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
//ADD ACTIVITY STATS:
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

const showStairsStatsWeek = (startDate, endDate) => {
  let weekActivities = communityActivity.findWeekActivities(startDate, endDate, user)

  let activitiesDisplay = weekActivities.reduce((display, activity) => {
    display += `<p>${activity.date}: ${activity.stairsClimbed} stairs climbed</p>`
    return display
  }, '')

  graphTitle.insertAdjacentHTML('afterend',
    `<article class="stairs-stats-week">Stairs Climbed over the week of ${startDate}-${endDate}:` + activitiesDisplay + '</article>')
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
  showStepStatsWeek("2019/09/16", "2019/09/22")
  showMinutesActiveStatsWeek("2019/09/16", "2019/09/22")
  showStairsStatsWeek("2019/09/16", "2019/09/22")
}


//GRAPH:

//FRIENDS:

//displays userFriends by first name, could also add images?
const showFriends = () => {
  const friendDisplay = user.friends.map(friend => {
    const friendName = community.getUserData(friend).getFirstName()
    return `<div>${friendName}</div>`
  })

  friends.innerHTML += friendDisplay.join(' ')
}

//we can add other calls to this onload function
function loadPage() {
  createCommunity()
  greetUser()
  showProfile()
  showStepGoalComparison()
  showHydrationStats()
  showHydrationStatsWeek("2019/09/16", "2019/09/22")
  showFriends()
  showActivityStats()
  showLatestSleepStatsUser();
}
