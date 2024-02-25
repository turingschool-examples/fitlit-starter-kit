import {
  getAverageStepGoal,
  getAccountFriends,
  getAverageDailyFluidOunces,
  getSpecificDay,
  getWeeklyFluidOunces,
  getWeeklySleep,
  getAverageSleepData,
  getMostRecentSleepData,
  getTotalAverageSleepData,
  getTotalAverageNumOunces,
  getTotalAverageActivityData,
  adminChartUpdate,
} from './scripts'
import { Chart, registerables } from 'chart.js/auto';
import { stepChart, wklyHydChart, hydChart, avgSleepChart, sleepChart, wklySleepChart, setCharts, adminChart } from './chartSetup'
Chart.register(...registerables);

function updateDom(randomUser, allUsers) {
  const userFriends = getAccountFriends(randomUser)
  const averageOunces = getAverageDailyFluidOunces(randomUser.id);
  setCharts()
  displayWelcomeMessage(randomUser);
  displayAverageDailyOunces(averageOunces);
  updateAccountData(randomUser)
  sleepChartUpdate(randomUser, allUsers)
  hydrationChartUpdate(randomUser, allUsers)
  stepChartUpdate(randomUser, allUsers)
}

// DOM update functions
function displayWelcomeMessage(user) {
  const welcomeMessageElement = document.querySelector('.welcome-message');
  welcomeMessageElement.textContent = `Welcome back, ${user.name.split(' ')[0]}!`;
}
//////////

// refactor updateAccountFriends() + updateAccountStep() + updateAccountStride()
// + updateAccountName() + updateAccountEmail() + updateAccountAddress()
function updateAccountData(user) {
  Object.keys(user).forEach(dataType => {
    if (dataType === 'dailyStepGoal') {
      document.querySelector(`#${dataType}`).textContent = `${user[dataType]} steps`;
    } else if (dataType === 'strideLength') {
      document.querySelector(`#${dataType}`).textContent = `${user[dataType]} ft.`;
    } else if (dataType === 'id') { 
      //don't do anything
    } else { 
      document.querySelector(`#${dataType}`).textContent = `${user[dataType]}`;
    }
  })
}

function displayAverageDailyOunces(averageOunces) {
  return averageOunces.toFixed(2)
}

function displaySpecificDayOunces(userId) {
  const ouncesForMostRecent = getSpecificDay(userId);
  return ouncesForMostRecent
}

function stepChartUpdate(randomUser, allUsers) {
  const averageStepGoal = getAverageStepGoal(allUsers);

  stepChart.data.datasets[0].data = [randomUser.dailyStepGoal, averageStepGoal];
  stepChart.options.scales.y.ticks.max = Math.max(randomUser.dailyStepGoal, averageStepGoal) + 500;

  stepChart.update();
}

function hydrationChartUpdate(randomUser, allUsers) {
  const avgDailyHydration = getAverageDailyFluidOunces(randomUser.id);
  const dailyHydration = displaySpecificDayOunces(randomUser.id)
  const weeklyHydration = getWeeklyFluidOunces(randomUser.id)

  hydChart.data.datasets[0].data = [avgDailyHydration, dailyHydration];
  hydChart.options.scales.x.ticks.max = Math.max(avgDailyHydration, dailyHydration) + 10;

  wklyHydChart.data.datasets[0].data = weeklyHydration.map((day) => { return day.numOunces });
  wklyHydChart.options.scales.x.ticks.max = Math.max(weeklyHydration) + 10;

  wklyHydChart.update()
  hydChart.update()
}

function sleepChartUpdate(randomUser, allUsers) {
  const averageHoursSleptPerDay = getAverageSleepData(randomUser, 'hoursSlept')
  const averageSleepQuality = getAverageSleepData(randomUser, 'sleepQuality')
  const hoursSleptRecentDay = getMostRecentSleepData(randomUser, 'hoursSlept')
  const sleepQualityRecentDay = getMostRecentSleepData(randomUser, 'sleepQuality')

  const selectedDate = document.querySelector('.dateSelector').value
  const sleepWeekAndDay = getWeeklySleep(randomUser, selectedDate)
  const weeklySleepHoursPerDay = sleepWeekAndDay.weeklySleepHours
  const weeklySleepQualityPerDay = sleepWeekAndDay.weeklySleepQuality

  sleepChart.data.datasets[0].data = [hoursSleptRecentDay, sleepQualityRecentDay];
  sleepChart.options.scales.x.ticks.max = Math.max(hoursSleptRecentDay, sleepQualityRecentDay) + 10;

  for (let i = 0; i < 7; i++) {
    wklySleepChart.data.datasets[i].data[0] = weeklySleepHoursPerDay[i]
    wklySleepChart.data.datasets[i].data[1] = weeklySleepQualityPerDay[i]
  }

  avgSleepChart.data.datasets[0].data = [averageHoursSleptPerDay, averageSleepQuality];
  avgSleepChart.options.scales.x.ticks.max = Math.max(averageHoursSleptPerDay, averageSleepQuality) + 10;

  avgSleepChart.update();
  sleepChart.update();
  wklySleepChart.update();
}




export {
  updateDom,
  displayWelcomeMessage,
  updateAccountData,
  displaySpecificDayOunces,
  sleepChartUpdate,
  //adminSleepChartUpdate,
};

