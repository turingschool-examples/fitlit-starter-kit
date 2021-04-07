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
const stepDonut = document.querySelector("#stepDonut");
const hydrGraph = document.querySelector("#hydrGraph");
const sleepQualPie = document.querySelector("#sleepQualPie");
const sleepHrsGraph = document.querySelector("#sleepHrsGraph");

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
  welcomeMessage.innerText = `Welcome to FitLit, ${newUser.firstName()}!`;
}

function displayInfoCard() {
  infoCard.innerHTML = `
    <!-- <p class="user-detail radness">Name: ${newUser.name}</p> -->
    <!-- <p class="user-detail radness">Address: ${newUser.address}</p> -->
    <!-- <p class="user-detail radness">Email: ${newUser.email}</p> -->
    <p class="user-detail radness">stride length: ${newUser.strideLength}</p>
    <!-- <p class="user-detail radness">Daily Step Goal: ${newUser.dailyStepGoal}</p> -->
    <!-- <p class="user-detail radness">Friends: ${newUser.friends}</p> -->
  `
}

function compareStepGoal() {
  stepGoals.innerHTML = `
    <p>your step goal: ${newUser.dailyStepGoal}</p>
    <p>avg user step goal: ${newUserRepo.calculateAvgStepGoal()}</p>
  `
}

function renderStepDonut() {
  const stepData = [newUser.dailyStepGoal, newUserRepo.calculateAvgStepGoal()];
  const donutData = {
    labels: ["your steps", "avg user steps"],
    datasets: [{
      label: "daily step comparison",
      data: stepData,
      backgroundColor: ["#f4737e", "#320031"],
      borderColor: ["#f4737e", "#320031"],
    }]
  };
  const stepDonutR = new Chart(stepDonut, {
    type: "doughnut",
    data: donutData,
  });
}

function displayHydrationData(data) {
  const todayDate = newUserHydration.mostRecentDayData();
  const todayHydration = newUserHydration.calcByDate(todayDate.date);
  dayHydrationDataDisplay.innerHTML = `
    <p>
    you've had ${todayHydration} ounces of water today!
    </p>
  `;

  const weekHydration = newUserHydration.calcOverWeek(todayDate.date, "numOunces");
  renderWeeklyHydrGraph(weekHydration);
}

function renderWeeklyHydrGraph(hydrData) {
  const [ day7, day6, day5, day4, day3, day2, day1 ] = hydrData;
  const hydrOz = hydrData.flatMap(dataPoint => Object.values(dataPoint));
  const hydrDate = hydrData.flatMap(dataPoint => Object.keys(dataPoint));
  const hydrColors = ["#0047b3", "#0052cc", "#005ce6", "#0066ff", "#1a75ff", "#3385ff", "#4d94ff"];
  const graphData = {
    labels: hydrDate,
    datasets: [{
      label: "daily ounces over the last 7 days",
      data: hydrOz,
      backgroundColor: hydrColors,
      borderColor: hydrColors,
    }]
  };
  const hydrGraphR = new Chart(hydrGraph, {
    type: "polarArea",
    data: graphData,
  });
}

function displaySleepData(data) {
  const todayDate = newUserSleep.mostRecentDayData();
  const todaySleepQuality = newUserSleep.calcByDate(todayDate.date, "sleepQuality");
  const todaySleepHours = newUserSleep.calcByDate(todayDate.date, "hoursSlept");
  // daySleepDataDisplay.innerHTML = `
  //   <p>
  //   Last Night's Sleep Quality: ${todaySleepQuality}
  //   Last Night's Hours Slept: ${todaySleepHours}
  //   </p>
  // `
  const weekSleepQuality = newUserSleep.calcOverWeek(todayDate.date, "sleepQuality");
  const weekSleepHours = newUserSleep.calcOverWeek(todayDate.date, "hoursSlept");
  // weekSleepDataDisplay.innerHTML = `
  //   <p>
  //   Last Week's Sleep Quality: ${weekSleepQuality}
  //   Last Week's Hours Slept: ${weekSleepHours}
  //   </p>
  // `
  const avgSleepQuality = newUserSleep.calcAvgSleep("sleepQuality");
  // avgSleepQualityDisplay.innerHTML = `
  //   <p>
  //   Average Sleep Quality: ${avgSleepQuality}
  //   </p>
  // `
  const avgSleepHours = newUserSleep.calcAvgSleep("hoursSlept");
  // avgHoursSleptDisplay.innerHTML = `
  //   <p>
  //   Average Hours Slept: ${avgSleepHours}
  //   </p>
  // `;

  renderSleepQualPie(todaySleepQuality, avgSleepQuality);
  renderSleepHrsGraph(todaySleepHours, avgSleepHours)
}

function renderSleepQualPie(today, avg) {
  const sleepQualData = [today, avg];
  const pieData = {
    labels: ["last night's sleep", "average night's sleep"],
    datasets: [{
      label: "sleep quality over time",
      data: sleepQualData,
      backgroundColor: ["#1d0047", "#d0b0ff"],
      borderColor: ["#1d0047", "#d0b0ff"],
    }]
  };
  const sleepQualPieR = new Chart(sleepQualPie, {
    type: "pie",
    data: pieData,
  });
}
//render in sleepHrsGraph
function renderSleepHrsGraph(today, avg) {
  const sleepHrsData
}
