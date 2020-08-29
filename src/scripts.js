



window.addEventListener('load', onLoad);

function onLoad() {
  chooseRandomUser();
  displayUserInfo();
  compareUsersSteps();
  displayFriendList();
  displayWaterConsumption();
  dispalyWeeklyConsumption();
  displayDailySleep();
  displayWeeklySleep();
  allTimeSleep();
}

function chooseRandomUser() {
  const randomUser = Math.floor(Math.random() * userData.length)
  console.log(randomUser)
  user = new User(userData[randomUser])
  let greeting = document.querySelector('.user-profile-display')
  greeting.innerHTML = `Welcome, ${user.returnFristName()}!`
}

function displayUserInfo() {
  let infoCard = document.querySelector('.user-info-card')
  infoCard.innerHTML +=
    `<h2>INFO</h2>
    <p>Name: ${user.userData.name}</p>
    <p>Address: ${user.userData.address}</p>
    <p>Email: ${user.userData.email}</p>
    <p>Stride: ${user.userData.strideLength} feet</p>
    <p>Steps: ${user.userData.dailyStepGoal} steps per day</p>
    <p class="friend-names">Friends: ${user.userData.friends}</p>`
}


function compareUsersSteps() {
  userRepository = new UserRepository(userData)
  console.log(userRepository)
  let userComparisons = document.querySelector('.compare-user-steps')
  userComparisons.innerHTML +=
    `<h2>STEPS</h2>
    <p>Your daily step goal is: ${user.userData.dailyStepGoal}</p>
    <p>All users daily step goal is: ${userRepository.getAvgStepGoal()}</p>`
}


function makeFriendList() {
  let userFriends = userRepository.returnFriendFullName(user.userData.friends)
  console.log("HELLO", userFriends)
  return userFriends.map(friendName => `<p class="friend-names">${friendName}</p>`)
}

function displayFriendList() {
  let friendList = document.querySelector('.friend-names')
  friendList.insertAdjacentHTML('afterBegin', this.makeFriendList(this.user, this.userRepo))
}

function displayWaterConsumption() {
  hydrationRepository = new HydrationRepository(hydrationData);
  let waterConsumption = document.querySelector('.user-hydration-card')
  waterConsumption.innerHTML +=
    `<h2>Hydration Data For The Day</h2>
    <p> Today's water consumption:
    ${hydrationRepository.dayOunces("2019/06/15", user.userData.id)}oz</p>`
}

function dispalyWeeklyConsumption() {
  let waterConsumption = document.querySelector('.weekly-hydration-card')
  waterConsumption.innerHTML +=
    `<h2>Hydration Data For The Week</h2>
    <p> Weekly water consumption:
    ${hydrationRepository.dailyOuncesPerGivenWeek("2019/06/15", user.userData.id)}oz
    </p>`
}

function displayDailySleep() {
  sleep = new Sleep(sleepData)
  let sleepProperties = document.querySelector('.day-sleep-card')
  sleepProperties.innerHTML +=
  `<h2>Sleep Data For The Day</h2>
  <p> Today's sleep data:
  Hours Slept ${sleep.daySleep("2019/06/15", user.userData.id).hoursSlept}
  Sleep Quality ${sleep.daySleep("2019/06/15", user.userData.id).sleepQuality}
  </p>
  `
}

function displayWeeklySleep() {
  let sleepWeekly = document.querySelector('.week-sleep-card')
  sleepWeekly.innerHTML +=
  `<h2>Sleep Data For The Week</h2>
  <p> Weekly sleep data:
  Weekly Hours Slept
  ${sleep.weeklySleepProperties("2019/06/15", user.userData.id, "hoursSlept")}
  Weekly Sleep Quality
  ${sleep.weeklySleepProperties("2019/06/15", user.userData.id, "sleepQuality")}
  </p>
  `
}

function allTimeSleep() {
  let sleepAllTime = document.querySelector('.all-time-sleep-card')
  sleepAllTime.innerHTML +=
  `<h2>Sleep Data For All Time</h2>
  <p> All time sleep data:
  All time Average Hours Slept
  ${sleep.averageAllTimeSleep(user.userData.id, "hoursSlept")}
  All time Average Sleep Quality
  ${sleep.averageAllTimeSleep(user.userData.id, "sleepQuality")}
  </p>
  `
}






// Create an info card on the dashboard with all of user’s info on the page--want it to display name, address, email, strideLength & stepgoal, friends

// Display their first name somewhere prominently on the page to welcome them

// For a specific user, display how their step goal compares to the average step goal amongst all users (this display should not be hard-coded)
