import {
  getAverageStepGoal,
  getAccountFriends,
  getAverageDailyFluidOunces,
  getSpecificDay,
  getWeeklyFluidOunces,
  getAverageSleepHours,
  getWeeklySleep,
  getAverageSleepQuality,
  getMostRecentSleepHours,
  getMostRecentSleepQuality
} from './scripts'
import { Chart, registerables } from 'chart.js/auto';
import { stepChart, wklyHydChart, hydChart, avgSleepChart, sleepChart, wklySleepChart } from './chartSetup'
Chart.register(...registerables);

function setupEventListeners(randomUser, allUsers) {
  const userFriends = getAccountFriends(randomUser)
  const averageOunces = getAverageDailyFluidOunces(randomUser.id);

  displayWelcomeMessage(randomUser);
  displayAverageDailyOunces(averageOunces);
  updateAccountName(randomUser);
  updateAccountAddress(randomUser);
  updateAccountEmail(randomUser);
  updateAccountStride(randomUser);
  updateAccountStep(randomUser);
  updateAccountFriends(userFriends);
  sleepChartUpdate(randomUser, allUsers)
  hydrationChartUpdate(randomUser, allUsers)
  stepChartUpdate(randomUser, allUsers)

  let topNavBar = document.querySelectorAll('.topNav a')
  let sideNavBar = document.querySelectorAll('.sideNav a')
  document.querySelectorAll('nav').forEach((elem) => {
    elem.addEventListener('click', (e) => {
      for (let i = 0; i < topNavBar.length; i++) {
        if (topNavBar[i].classList === e.target.classList || sideNavBar[i].classList === e.target.classList) {
          topNavBar[i].classList.add('underline')
          sideNavBar[i].classList.add('underline')
        } else {
          topNavBar[i].classList.remove('underline')
          sideNavBar[i].classList.remove('underline')
        }
      }
    })
  })

  const debounce = (fn) => {
    let frame;
    return (...params) => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      frame = requestAnimationFrame(() => {
        fn(...params);
      });

    }
  };

  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
    let opacLevel = 1 - window.scrollY / 1000
    let opacInvert = 1 + window.scrollY / 1000 - 1
    var navBar = document.getElementById('nav-bar')
    var sideBar = document.getElementById('side-nav')
    var logo = document.getElementById("logo")
    navBar.style.opacity = opacLevel
    sideBar.style.opacity = opacInvert
    if (opacLevel > 0.2) {
      logo.style.opacity = `${opacLevel}`
      navBar.classList.remove('hidden')
    } else {
      logo.style.opacity = '0.2'
      navBar.classList.add('hidden')
    }
  }

  document.addEventListener('scroll', debounce(storeScroll), { passive: true });
  storeScroll();
}

// DOM update functions
function displayWelcomeMessage(user) {
  const welcomeMessageElement = document.querySelector('.welcome-message');
  welcomeMessageElement.textContent = `Welcome back, ${user.name.split(' ')[0]}!`;
}

function updateAccountName(user) {
  const accountName = document.querySelector('#account-name');
  accountName.textContent = `${user.name}`;
}

function updateAccountAddress(user) {
  const accountAddress = document.querySelector('#account-address');
  accountAddress.textContent = `${user.address}`;
}

function updateAccountEmail(user) {
  const accountEmail = document.querySelector('#account-email');
  accountEmail.textContent = `${user.email}`;
}

function updateAccountStride(user) {
  const accountStride = document.querySelector('#account-stride');
  accountStride.textContent = `${user.strideLength} ft.`;
}

function updateAccountStep(user) {
  const accountStep = document.querySelector('#account-step');
  accountStep.textContent = `${user.dailyStepGoal} steps`;
}

function updateAccountFriends(friends) {
  const accountFriends = document.querySelector('#account-friends');
  accountFriends.textContent = `${friends}`;
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
  const averageHoursSleptPerDay = getAverageSleepHours(randomUser)
  const averageSleepQuality = getAverageSleepQuality(randomUser)
  const hoursSleptRecentDay = getMostRecentSleepHours(randomUser)
  const sleepQualityRecentDay = getMostRecentSleepQuality(randomUser)

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
  setupEventListeners,
  displayWelcomeMessage,
  updateAccountName,
  updateAccountAddress,
  updateAccountEmail,
  updateAccountStride,
  updateAccountStep,
  updateAccountFriends,
  displaySpecificDayOunces,
  sleepChartUpdate
};