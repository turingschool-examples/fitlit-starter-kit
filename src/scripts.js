/* eslint-disable max-len */
const userMain = document.querySelector('.user-main')
const greeting = document.querySelector('.greeting')
const userProfile = document.querySelector('.user-profile')

const friends = document.querySelector('.friends')
const steps = document.querySelector('.steps')
const water = document.querySelector('.water');
const activeMinutes = document.querySelector('.active-minutes')
const stairs = document.querySelector('.stairs')

const graph = document.querySelector('.graph');
const graphTitle = document.querySelector('.title-graph');

const stepCanvas = document.getElementById('stepChart').getContext('2d')
const waterCanvas = document.getElementById('waterChart').getContext('2d')
const stairsCanvas = document.getElementById('waterChart').getContext('2d')
const activeMinutesCanvas = document.getElementById('waterChart').getContext('2d')
const friendsCanvas = document.getElementById('waterChart').getContext('2d')

//since multiple methods will need these, global
let community = new UserRepository(userData);
let user = community.users[0];
let communityHydration = new CommunityHydration(hydrationData);
let hydration = communityHydration.hydrations[0];
let communityActivity = new CommunityActivity(activityData);
let activity = communityActivity.activities[0];
let today = "2019/09/22";

window.addEventListener('load', loadPage)

//GREETING:
const greetUser = () => {
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

//ADD ALL-TIME SLEEP STATS:



//DISPLAY STEPS DATA

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


//ADD TODAY's HYDRATION STATS:
const showHydrationStats = () => {
  water.insertAdjacentHTML('beforeend',
    `<p class="water-stats">Water consumed today: ${communityHydration.calculateTotalWaterOnDay(hydration.userID, today)} OZ</p>
    `)
}

//ADD WEEKLY HYDRATION STATS:
const showHydrationStatsWeek = (startDate, endDate) => {
  graphTitle.insertAdjacentHTML('afterend',
    `<article class="water-stats-week">Water consumed over the week of ${startDate}-${endDate}:
      <p>Day 1: ${communityHydration.calculateTotalWeek(hydration.userID, startDate, endDate)[0]} OZ</p>
      <p>Day 2: ${communityHydration.calculateTotalWeek(hydration.userID, startDate, endDate)[1]} OZ</p>
      <p>Day 3: ${communityHydration.calculateTotalWeek(hydration.userID, startDate, endDate)[2]} OZ</p>
      <p>Day 4: ${communityHydration.calculateTotalWeek(hydration.userID, startDate, endDate)[3]} OZ</p>
      <p>Day 5: ${communityHydration.calculateTotalWeek(hydration.userID, startDate, endDate)[4]} OZ</p>
      <p>Day 6: ${communityHydration.calculateTotalWeek(hydration.userID, startDate, endDate)[5]} OZ</p>
      <p>Day 7: ${communityHydration.calculateTotalWeek(hydration.userID, startDate, endDate)[6]} OZ</p>
    </article>
    `)
}

const showWaterChartWhateverWeek = (startDate, endDate) => {
  let weekWaterActivities = communityHydration.calculateTotalWeek(hydration.userID, startDate, endDate)

  console.log(getData('water', weekWaterActivities))
  
  // chartIt(getData(weekActivities, 'stairsClimbed'), getData(weekActivities, 'minutesActive'), getData(weekActivities, 'numSteps'))
}

//GRAPH:
function getData(weekOfUserDataObjects, fitnessType) {
  return {
    fitnessType: fitnessType,
    startDate: weekOfUserDataObjects[0].date,
    endDate: weekOfUserDataObjects[weekOfUserDataObjects.length -1].date,
    xs: weekOfUserDataObjects.map(object => object.date),
    ys: weekOfUserDataObjects.map(object => object[fitnessType]) 
  }
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

  console.log(getData(weekActivities, 'stairsClimbed'))
  
  chartIt(getData(weekActivities, 'stairsClimbed'), getData(weekActivities, 'minutesActive'), getData(weekActivities, 'numSteps'), waterCanvas)
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
  showActivitiesChartWhateverWeek("2019/09/16", "2019/09/22")
}


//ADD SLEEP STATS:



//FRIENDS:

//displays userFriends by first name, could also add images?
const showFriends = () => {
  const friendDisplay = user.friends.map(friend => {
    const friendName = community.getUserData(friend).getFirstName()
    return `<div>${friendName}</div>`
  })

  friends.innerHTML += friendDisplay.join(' ')
}


//show charts 
function chartIt(dataOne, dataTwo, dataThree, whatCanvas) {
  const data = dataOne
  const data2 = dataTwo
  const data3 = dataThree
  const chart = new Chart(whatCanvas, {
    type: 'line',
    data: {
      labels: data.xs,
      datasets: [{
        label: `Your ${data.fitnessType.split(/(?=[A-Z])/).join(' ')} for the week of ${data.startDate} - ${data.endDate}`,
        data: data.ys,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }, 
      {
        label: `Your ${data2.fitnessType.split(/(?=[A-Z])/).join(' ')} for the week of ${data2.startDate} - ${data2.endDate}`,
        data: data2.ys,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },
      {
        label: `Your ${data3.fitnessType.split(/(?=[A-Z])/).join(' ')} for the week of ${data3.startDate} - ${data3.endDate}`,
        data: data3.ys,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1
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
    }
  });
};


//we can add other calls to this onload function
function loadPage() {
  greetUser()
  showProfile()
  showStepGoalComparison()
  showHydrationStats()
  showHydrationStatsWeek("2019/09/16", "2019/09/22")
  showFriends()
  showActivityStats()
}
