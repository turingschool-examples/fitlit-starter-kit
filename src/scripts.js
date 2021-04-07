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
    <!-- <p class="user-detail radness">Name: ${newUser.name}</p> -->
    <!-- <p class="user-detail radness">Address: ${newUser.address}</p> -->
    <!-- <p class="user-detail radness">Email: ${newUser.email}</p> -->
    <p class="user-detail radness">Stride Length: ${newUser.strideLength}</p>
    <p class="user-detail radness">Daily Step Goal: ${newUser.dailyStepGoal}</p>
    <!-- <p class="user-detail radness">Friends: ${newUser.friends}</p> -->
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
  const todayHydration = newUserHydration.calcByDate(todayDate.date);
  dayHydrationDataDisplay.innerHTML = `
    <p>
    Today you've had ${todayHydration} ounces of water!
    </p>
  `

  const weekHydration = newUserHydration.calcOverWeek(todayDate.date, "numOunces");

  // console.log("this week's hydration data", weekHydration);
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
  // console.log("hydrData >>>", hydrData);
  // const hydrOz = hydrData.forEach(dataPoint => Object.values(hydrData)); did not work
  // console.log("forEach? >>>", hydrData.forEach((hydrDate, i) => i.numOunces)); did not work
  const [ day7, day6, day5, day4, day3, day2, day1 ] = hydrData;
  console.log("getting to line 103");
  const hydrOz = hydrData.map(dataPoint => Object.values(dataPoint));
  console.log("getting to line 105");
  // console.log("hydrOz >>>", hydrOz);
  // console.log("day1.values >>> ", Object.values(day1));
  const graphData = {
    labels: [ "7 days ago", "6 days ago", "5 days ago", "4 days ago", "3 days ago", "yesterday", "today"],
    datasets: [{
      label: "daily ounces over for the last 7 days",
      data: hydrOz,
      backgroundColor: ["#2561dd", "#3b71e0", "#5181e4", "#6791e7", "#7da1ea", "#93b1ee", "#a9c1f1"],
    }]
  };
  // console.log("graphData >>>", graphData);
  console.log("the graph is not rendering");
  let hydrGraphR = new Chart(hydrGraph, {
    type: "polarArea",
    data: graphData,
  });
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
