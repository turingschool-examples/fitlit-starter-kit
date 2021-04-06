const newUserRepo = new UserRepository(userData);
const newUser = new User(userData[0]);
const newUserSleep = new UserSleep(1, sleepData);
const newAllUserSleep = new AllUserSleep(sleepData);
const newUserHydration = new Hydration(1, hydrationData);


/* *****Query Selectors***** */
const welcomeMessage = document.querySelector("#welcomeMessage");
const dayHydrationDataDisplay = document.querySelector("#dayHydrationData");
const weekHydrationDataDisplay = document.querySelector("#weekHydrationData");
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
console.log("today's sleep quality", todaySleepQuality)
  //display data for the returned date
  const todaySleepHours = newUserSleep.calcByDate(todayDate.date, "hoursSlept");
  console.log("today's hours slept", todaySleepHours)
  //display data for the returned date



  const weekSleepQuality = newUserSleep.calcOverWeek(todayDate.date, "sleepQuality");
  console.log("week's sleep quality", weekSleepQuality)
  //display data for the returned week
  const weekSleepHours = newUserSleep.calcOverWeek(todayDate.date, "hoursSlept");
  console.log("week's hours slept", weekSleepHours)
  //display data for the returned week


  const avgSleepQuality = newUserSleep.calcAvgSleep("sleepQuality");
console.log("average sleep quality", avgSleepQuality)
  //display average sleep quality
  const avgSleepHours = newUserSleep.calcAvgSleep("hoursSlept");
  console.log("average sleep hours", avgSleepHours)
  //display average hours slept
}
