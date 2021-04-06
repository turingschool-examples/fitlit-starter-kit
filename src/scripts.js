const newUserRepo = new UserRepository(userData);
const newUser = new User(userData[0]);
const newUserSleep = new UserSleep(1, sleepData);
const newAllUserSleep = new AllUserSleep(sleepData);
const newUserHydration = new Hydration(1, hydrationData);


/* *****Query Selectors***** */
const welcomeMessage = document.querySelector("#welcomeMessage");
const dayHydrationDataDisplay = document.querySelector("#dayHydrationData");
const weekHydrationDataDisplay = document.querySelector("#weekHydrationData");
const daySleepDataDisplay = document.querySelector("#daySleepData");
const weekSleepDataDisplay = document.querySelector("#weekSleepData");
const avgSleepQualityDisplay = document.querySelector("#avgSleepQuality");
const avgHoursSleptDisplay = document.querySelector("#avgHoursSlept");
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
    <!-- <p class="user-detail radness">Friends: ${newUser.friends}</p> -->
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
  const todayHydration = newUserHydration.calcByDate(todayDate.date);
  dayHydrationDataDisplay.innerHTML = `
    <p>
    Today's Water Intake: ${todayHydration}
    </p>
  `

  const weekHydration = newUserHydration.calcOverWeek(todayDate.date, "numOunces");
  console.log("this week's hydration data", weekHydration);
  //data is currently an array of objects
  //these can be broken up using object keys and object values to create an HTML table or implement chart js
  weekHydrationDataDisplay.innerHTML = `
    <p>
    Week's Water Intake: ${weekHydration}
    </p>
  `
}

function displaySleepData(data) {
  const todayDate = newUserSleep.mostRecentDayData();
  const todaySleepQuality = newUserSleep.calcByDate(todayDate.date, "sleepQuality");
  const todaySleepHours = newUserSleep.calcByDate(todayDate.date, "hoursSlept");
  daySleepDataDisplay.innerHTML = `
    <p>
    Last Night's Sleep Quality: ${todaySleepQuality}
    Last Night's Hours Slept: ${todaySleepHours}
    </p>
  `
  const weekSleepQuality = newUserSleep.calcOverWeek(todayDate.date, "sleepQuality");
  const weekSleepHours = newUserSleep.calcOverWeek(todayDate.date, "hoursSlept");
  weekSleepDataDisplay.innerHTML = `
    <p>
    Last Week's Sleep Quality: ${weekSleepQuality}
    Last Week's Hours Slept: ${weekSleepHours}
    </p>
  `
  const avgSleepQuality = newUserSleep.calcAvgSleep("sleepQuality");
  avgSleepQualityDisplay.innerHTML = `
    <p>
    Average Sleep Quality: ${avgSleepQuality}
    </p>
  `
  const avgSleepHours = newUserSleep.calcAvgSleep("hoursSlept");
  avgHoursSleptDisplay.innerHTML = `
    <p>
    Average Hours Slept: ${avgSleepHours}
    </p>
  `
}
