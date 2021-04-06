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
const stepDonut = document.querySelector("#stepDonut");

/* *****Event Listeners***** */
window.addEventListener("load", displayUser);

/* *****Functions***** */
function displayUser() {
  welcomeUser();
  displayInfoCard();
  compareStepGoal();
  renderStepDonut();
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
    <p class="step-goal radness">your step goal: ${newUser.dailyStepGoal}</p>
    <p class="step-goal radness">avg user step goal: ${newUserRepo.calculateAvgStepGoal()}</p>
  `
}

// 🧪 test function to render step goal chart
function renderStepDonut() {
  let stepData = [newUser.dailyStepGoal, newUserRepo.calculateAvgStepGoal()];
  const donutData = {
    labels: ["your steps", "avg user steps"],
    datasets: [{
      label: "daily step comparison",
      data: stepData,
      backgroundColor: ["#f4737e", "#320031"],
      borderColor: ["#f4737e", "#320031"],
      hoverOffset: 4
    }]
  };
  let stepDonutR = new Chart(stepDonut, {
    type: "doughnut",
    data: donutData,
  });
}

function displayHydrationData(data) {
  const todayDate = newUserHydration.mostRecentDayData();
  const todayHydration = newUserHydration.ozDrankOnDate(todayDate.date);
  dayHydrationDataDisplay.innerHTML = `
    <p>
    Today you've had ${todayHydration} ounces of water!
    </p>
  `
  console.log("need to include helpers links in html script tags")
  const weekHydration = newUserHydration.dailyDrinkDuringWeek(todayDate.date, "numOunces");
  console.log("this week's hydration data", weekHydration);
  //data is currently an array of objects
  //these can be broken up using object keys and object values to create an HTML table or implement chart js
  // weekHydrationDataDisplay.innerHTML = `
  //   <p>
  //   Week's Water Intake: ${weekHydration}
  //   </p>
  // `
  renderWeeklyHydrGraph(weekHydration);
}


// 🧪 test function to render water graph for weekly intake
function renderWeeklyHydrGraph(hydrData) {

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
