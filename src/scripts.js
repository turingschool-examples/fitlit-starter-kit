



window.addEventListener('load', onLoad);

function onLoad() {
  chooseRandomUser();
  compareUsersSteps();
  displayUserInfo();
  displayFriendList();
  displayWaterConsumption();
  displayWeeklyConsumption();
  displayDailySleep();
  displayWeeklySleep();
  allTimeSleep();
  displayDayActivity();
  displayWeeklyActivity();
  compareDayActivity();
  stepDoughnutGraph();
}

function chooseRandomUser() {
  const randomUserId = Math.floor(Math.random() * userData.length)
  user = new User(userData[randomUserId])
  let greeting = document.querySelector('.user-profile-display')
  greeting.innerHTML = `Welcome, ${user.returnFirstName()}!`
}

function displayUserInfo() {
  let infoCard = document.querySelector('.user-info-card')
  infoCard.innerHTML +=
    `<p class="user-name">${user.userData.name}</p>
    <p class="user-address">${user.userData.address}</p>
    <p class="user-email">${user.userData.email}</p>
    <p class="stride-length">Your stride length is : ${user.userData.strideLength} feet</p>
    `
}

// <p class="friend-names">Friends: ${user.userData.friends}</p>

function compareUsersSteps() {
  userRepository = new UserRepository(userData)
  activity = new Activity(activityData);
  console.log("D", activity.getDayData("2019/06/15", user.userData.id).numSteps)
  let userComparisons = document.querySelector('.compare-user-steps')
  userComparisons.innerHTML +=
    `<p class="your-daily-step-count">Your daily step count is: ${activity.getDayData("2019/06/15", user.userData.id).numSteps}</p>
    <p class="your-daily-step-goal">Your daily step goal is: ${user.userData.dailyStepGoal}</p>
    `
}


function makeFriendList() {
  let userFriends = userRepository.returnFriendFullName(user.userData.friends)
  console.log("X", userFriends.map(friendName => `<p class="friend-names">${friendName}</p>`))
  return userFriends.map(friendName => `<p class="friend-names">${friendName}</p>`).join(" ")
}

function displayFriendList() {
  let friendList = document.querySelector('.stride-length')
  friendList.insertAdjacentHTML('beforeEnd', this.makeFriendList())
}

function displayWaterConsumption() {
  hydrationRepository = new HydrationRepository(hydrationData);
  let waterConsumption = document.querySelector('.user-hydration-card')
  waterConsumption.innerHTML +=
    `<h2>Hydration Data For The Day</h2>
    <p> Today's water consumption:
    ${hydrationRepository.dayOunces("2019/06/15", user.userData.id)}oz</p>`
}

function displayWeeklyConsumption() {
  let userHydrationData = hydrationRepository.dailyOuncesPerGivenWeek("2019/06/15", user.userData.id)
  hydrationGraph(userHydrationData);
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
  let sleepWeekly = sleep.weeklySleepProperties("2019/06/15", user.userData.id)
  console.log(sleepWeekly)
  sleepGraph(sleepWeekly)
  sleepAmountGraph(sleepWeekly)
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

function displayDayActivity() {
  activity = new Activity(activityData);
  let dayActivity = document.querySelector('.day-activity-card')
  dayActivity.innerHTML +=
  `<h2>Activity Data For The Day</h2>
  <p> Daily Activity Data:
    Today's step data
    ${activity.getDayData("2019/06/15", user.userData.id).numSteps}
    Today's mintues active data
    ${activity.getDayData("2019/06/15", user.userData.id).minutesActive}
    Today's distance walked data
    ${activity.walkedMilesPerDay("2019/06/15", user.userData.id)}
  </p>
  `
}

function displayWeeklyActivity() {
  let weeklyActivity = activity.weeklyActivityProperties("2019/06/15", user.userData.id)
  console.log(weeklyActivity)
  weeklyStepCountGraph(weeklyActivity)
  weeklyStairFlightsClimbed(weeklyActivity)
  weeklyMinutesActive(weeklyActivity)

}

function compareDayActivity() {
  let compareDayActivity = document.querySelector('.comparison-activity-card')
  let activityFindAllUsers = activity.findDayActivity("2019/06/15")
  compareDayActivity .innerHTML +=
  `<h2>Activity Data For The Day Compared To All Users</h2>
  <p> Daily Activity Data Comparison:
    Average step data compared to all users
    Your Average ${activity.getDayData("2019/06/15", user.userData.id).numSteps}
    All Users Average ${activityFindAllUsers.numSteps}</br>
    Average mintues active data compared to all users
    Your Average ${activity.getDayData("2019/06/15", user.userData.id).minutesActive}
    All Users Average ${activityFindAllUsers.minutesActive}</br>
    Average flights of stairs climbed data compared to all users
    Your Average ${activity.getDayData("2019/06/15", user.userData.id).flightsOfStairs}
    All Users Average ${activityFindAllUsers.flightsOfStairs}
  </p>
  `
}



function hydrationGraph(hydrationData) {
  let dataPoint = hydrationData.map(x => ({label: x.date, y: x.ounces,}))
  let hydrationChart = new CanvasJS.Chart("chartContainer", {
    backgroundColor: "#1D222E",
    title:{
      text: "Your Weekly Hydration Data in Ounces",
      fontColor: "#EBECF0",
    },
    axisX:{
        labelFontColor: "#EBECF0"
      },
    axisY:{
        labelFontColor: "#EBECF0"
    },
    data: [
      {
      // Change type to "doughnut", "line", "splineArea", etc.
        type: "column",
        dataPoints: dataPoint
      }
    ]
  });
  hydrationChart.render();
}

function sleepGraph(sleepData) {
  console.log(sleepData)
  let dataPoint = sleepData.map(x => ({label: x.date, y: x.sleepQuality}))
  let sleepQualityChart = new CanvasJS.Chart("sleepChartContainer", {
    backgroundColor: "#1D222E",
    title:{
      text: "Your Weekly Sleep Quality Data",
      fontColor: "#EBECF0"
    },
    axisX:{
      labelFontColor: "#EBECF0"
    },
    axisY:{
      labelFontColor: "#EBECF0"
    },
    data:[
      {
        type: "column",
        dataPoints: dataPoint
      }
    ]
  });
  sleepQualityChart.render();
}

function sleepAmountGraph(sleepData) {
  let dataPoint = sleepData.map(x => ({label: x.date, y: x.hoursSlept}))
  let sleepAmountChart = new CanvasJS.Chart('sleepChartAmountContainer', {
    backgroundColor: "#1D222E",
    title: {
      text: "Your Weekly Sleep in Hours",
      fontColor: "#EBECF0"
    },
    axisX: {
      labelFontColor: "#EBECF0"
    },
    axisY: {
      labelFontColor: "#EBECF0"
    },
    data: [
      {
        type: "column",
        dataPoints: dataPoint
      }
    ]
  })
  sleepAmountChart.render();
}

function weeklyStepCountGraph(activityData) {
  let dataPoint = activityData.map(data => ({label: data.date, y: data.stepCount}))
  let stepCountChart = new CanvasJS.Chart('stepCountWeeklyChart', {
    backgroundColor: "#1D222E",
    title: {
      text: "Your Weekly Step Count Data",
      fontColor: "#EBECF0"
    },
    axisX: {
      labelFontColor: "#EBECF0"
    },
    axisY: {
      labelFontColor: "#EBECF0"
    },
    data: [
      {
        type: "column",
        dataPoints: dataPoint
      }
    ]
  })
  stepCountChart.render();
}

function weeklyStairFlightsClimbed(activityData) {
  let dataPoint = activityData.map(data => ({label: data.date, y: data.flightsOfStairsClimbed}))
  let flightsClimbedChart = new CanvasJS.Chart('flightsClimbedChart', {
    backgroundColor: "#1D222E",
    title: {
      text: "Your Weekly Flights of Stairs Climbed",
      fontColor: "#EBECF0"
    },
    axisX: {
      labelFontColor: "#EBECF0"
    },
    axisY: {
      labelFontColor: "#EBECF0"
    },
    data: [
      {
        type: "column",
        dataPoints: dataPoint
      }
    ]
  })
  flightsClimbedChart.render();
}

function weeklyMinutesActive(activityData) {
  let dataPoint = activityData.map(data => ({label: data.date, y: data.minutesActive}))
  let minutesActiveChart = new CanvasJS.Chart('minutesActiveChart', {
    backgroundColor: "#1D222E",
    title: {
      text: "Your Weekly Minutes Active",
      fontColor: "#EBECF0"
    },
    axisX: {
      labelFontColor: "#EBECF0"
    },
    axisY: {
      labelFontColor: "#EBECF0"
    },
    data: [
      {
        type: "column",
        dataPoints: dataPoint
      }
    ]
  })
  minutesActiveChart.render()
}

function stepDoughnutGraph() {
  var chart = new CanvasJS.Chart("doughnutChart",{
  backgroundColor: "#1D222E",
    title:{
      text: "Steps Walked vs Step Goal",
      fontColor: "#EBECF0"
    },
    data: [
    {
     indexLabelFontColor: "#EBECF0",
     type: "doughnut",
     dataPoints: [
     // {  y: 100, indexLabel: "Steps Walked" },
     // {  y: 35.0, indexLabel: "StepGoal" },
     // { label: sleepData[0].date, y: sleepData[0].sleepQuality },

     {  y: activity.getDayData("2019/06/15", user.userData.id).numSteps, indexLabel: "Steps Walked", color: "#9CBB58"},
     {  y: user.userData.dailyStepGoal, indexLabel: "StepGoal", color: "#23BFAA"}
     ]
   },
   ]
 });

  chart.render();
}
