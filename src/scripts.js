console.log("Hello World");

const user = new User(userData[33])
const userRepo = new UserRepo(userData)
const hydrationRepo = new HydrationRepo(hydrationData)
const activityRepo = new ActivityRepo(activityData)
const sleepRepo = new SleepRepo(sleepData)

window.addEventListener('load', updateDisplay);

function displayUserData() {
  const friendList = user.friends.map(friend => {
  const info = userRepo.searchUsersByID(friend)
    return info.name
  })

  const greeting = document.querySelector('.greeting');
  const userName = document.querySelector('.user-name');
  const userAddress = document.querySelector('.user-address');
  const userStrideLength = document.querySelector('.user-stride-length');
  const userDailyStepGoal = document.querySelector('.user-daily-step-goal');
  const userFriends = document.querySelector('.user-friends');
  const stepData = document.querySelector('.step-data');

  //can you loop thru these too? 
  greeting.innerText = `Welcome ${user.getFirstName()}!`
  userName.innerText = user.name
  userAddress.innerText = user.address
  userStrideLength.innerText = user.strideLength
  userDailyStepGoal.innerText = user.dailyStepGoal
  userFriends.innerText = friendList
  stepData.innerText = `Your Step Goal: ${user.dailyStepGoal}, Average Step Goal: ${userRepo.calculateAverageStepGoals()}`
}

function displayHydrationData() {
  const hydrationTodayData = document.querySelector('.hydration-today-data');
  const hydrationWeekData = document.querySelector('.hydration-week-data');

  const weeklyData = hydrationRepo.findWeeklyHydration(user.id, '2019/09/21')

  hydrationTodayData.innerText = `Ounces Drank Today: ${hydrationRepo.findDailyHydration(user.id, '2019/09/21')}`;
  weeklyData.forEach((data) => {
    hydrationWeekData.innerText += ` ${data.date}: ${data.numOunces} ounces `
  })
}

function displayActivityData() {
  const stepsTodayData = document.querySelector('.steps-today-data');
  const minutesTodayData = document.querySelector('.minutes-today-data');
  const milesTodayData = document.querySelector('.miles-today-data');
  const stepsWeekData = document.querySelector('.steps-week-data');
  const minutesWeekData = document.querySelector('.minutes-week-data');
  const stairsWeekData = document.querySelector('.stairs-week-data');
  const stepsComparisonData = document.querySelector('.steps-comparison-data');
  const minutesComparisonData = document.querySelector('.minutes-comparison-data');
  const stairsComparisonData = document.querySelector('.stairsComparisonData');

  const weekActive = activityRepo.getWeekOfData(user, '2019/09/21')

  stepsTodayData.innerText += `Steps Today: ${activityRepo.getActivityEntry(user, '2019/09/21').numSteps}`
  minutesTodayData.innerText += `Minutes Today: ${activityRepo.findMinutesActive(user, '2019/09/21')}`
  milesTodayData.innerText += `Miles Today: ${activityRepo.calculateMilesWalked(user, '2019/09/21')}`

  minutesWeekData.innerText += 'Minutes Active This Week'
  stepsWeekData.innerText += 'Steps Taken This Week'
  stairsWeekData.innerText += 'Flights of Stairs Climbed This Week'
  weekActive.forEach(entry => {
    minutesWeekData.innerText += ` ${entry.date}: ${entry.minutesActive} `
  })
  weekActive.forEach(entry => {
    stepsWeekData.innerText += ` ${entry.date}: ${entry.numSteps} `
  })
  weekActive.forEach(entry => {
    stairsWeekData.innerText += ` ${entry.date}: ${entry.flightsOfStairs} `
  })
}

function displaySleepData() {
  const hoursTodayData = document.querySelector('.hours-today-data');
  const qualityTodayData = document.querySelector('.quality-today-data');
  const hoursWeekData = document.querySelector('.quality-today-data');
  const qualityWeekData = document.querySelector('.quality-week-data');
  const hoursAllTimeData = document.querySelector('.hours-all-time-data');
  const qualityAllTimeData = document.querySelector('.quality-all-time-data');

  const hoursSleptWeekly = sleepRepo.findWeekOfSleep(user.id, '2019/09/21');

  hoursTodayData.innerText = `Hours Slept Today: ${sleepRepo.findNightlySleep(user.id, '2019/09/21')}`;
  qualityTodayData.innerText = `Sleep Quality Today: ${sleepRepo.findNightlySleepQuality(user.id, '2019/09/21')}`;
  hoursSleptWeekly.forEach(night => {
    hoursWeekData.innerText += ` ${night.date}: ${night.hoursSlept}`
  })
  hoursSleptWeekly.forEach(night => {
    qualityWeekData.innerText += ` ${night.date}: ${night.sleepQuality}`
  })
  hoursAllTimeData.innerText += `Average Hours Slept: ${sleepRepo.calculateAvgSleep(user.id)}`;
  qualityAllTimeData.innerText += `Average Sleep Quality: ${sleepRepo.findAvgTotalSleepQuality(user.id)}`
}

function updateDisplay() {
  displayUserData()
  displayHydrationData()
  displayActivityData()
  displaySleepData()
}


