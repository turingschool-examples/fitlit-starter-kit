const newUserRepo = new UserRepository(userData);
const newUser = new User(userData[0]);
const newUserSleep = new UserSleep(1, sleepData);
const newAllUserSleep = new AllUserSleep(sleepData);
const newUserHydration = new Hydration(1, hydrationData);


/* *****Query Selectors***** */
const welcomeMessage = document.querySelector("#welcomeMessage");
const hydrationDataDisplay = document.querySelector("#hydrationData");
const infoCard = document.querySelector("#infoCard");
const stepGoals = document.querySelector("#stepGoals");

/* *****Event Listeners***** */
window.addEventListener("load", displayUser);


/* *****Functions***** */
function displayUser() {
  welcomeUser();
  displayInfoCard();
  compareStepGoal();
  displayHydrationData(hydrationData);
  displaySleepData(sleepData);
}

function welcomeUser() {
  welcomeMessage.innerText = `Welcome, ${newUser.firstName()}!`;
}

function displayInfoCard() {
  infoCard.innerHTML = `
    <!-- <p class="user-detail card-flex">Name: ${newUser.name}</p> -->
    <!-- <p class="user-detail radness">Address: ${newUser.address}</p> -->
    <!-- <p class="user-detail radness">Email: ${newUser.email}</p> -->
    <p class="user-detail radness">Stride Length: ${newUser.strideLength}</p>
    <p class="user-detail radness">Daily Step Goal: ${newUser.dailyStepGoal}</p>
    <p class="user-detail radness">Friends: ${newUser.friends}</p>
  `
}

function compareStepGoal() {
  stepGoals.innerHTML = `
    <p class="step-goal radness">Your Step Goal: ${newUser.dailyStepGoal}</p>
    <p class="step-goal radness">Average Step Goal: ${newUserRepo.calculateAvgStepGoal()}</p>
  `
  //display how user step goal compares to average step goal of all users
}

function displayHydrationData(data) {
  const todayDate = newUserHydration.mostRecentDayData();
  const todayHydration = newUserHydration.ozDrankOnDate(todayDate.date);
  hydrationDataDisplay.innerHTML = `
  <p>
  Today's Water Intake: ${todayHydration}
  </p>
  `

  //display data for the returned date
  const weekHydration = newUserHydration.dailyDrinkDuringWeek(todayDate, "numOunces");
  console.log("this week's hydration data", weekHydration);
  //display data for the returned week
}

function displaySleepData(data) {
  const todayDate = newUserSleep.mostRecentDayData();
  const todaySleepQuality = newUserSleep.calcSleepByDate(todayDate, "sleepQuality");

  //display data for the returned date
  const todaySleepHours = newUserSleep.calcSleepByDate(todayDate, "hoursSlept");
  //display data for the returned date
  const weekSleepQuality = newUserSleep.calcSleepOverWeek(todayDate, "sleepQuality");
  //display data for the returned week
  const weekSleepHours = newUserSleep.calcSleepOverWeek(todayDate, "hoursSlept");
  //display data for the returned week
  const avgSleepQuality = newUserSleep.calcAvgSleep("sleepQuality");
  //display average sleep quality
  const avgSleepHours = newUserSleep.calcAvgSleep("hoursSlept");
  //display average hours slept
}
