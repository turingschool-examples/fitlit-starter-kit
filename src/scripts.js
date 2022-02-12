// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


// An example of how you tell webpack to use a JS file
import {
  usersData,
  sleepData,
  activityData,
  hydrationData
} from './apiCalls';
import Hydration from './js/Hydration';
import UserRepository from './js/UserRepository';
import Sleep from './js/Sleep';
import charts from './js/Charts';
import Chart from 'chart.js/auto';

const userName = document.querySelector('#userName');
const stepGoal = document.querySelector('#stepGoal');
const infoCard = document.querySelector('#infoCard');
const statsSection = document.querySelector('#statsSection');
const todaysIntake = document.querySelector('#todaysIntake');
const weeklyIntake = document.querySelector('#weeklyIntake');
const todaysSleepHours = document.querySelector('#todaysSleepHours');
const todaysSleepQuality = document.querySelector('#todaysSleepQuality');
const weeklySleepHours = document.querySelector('#weeklySleepHours');
const weeklySleepQuality = document.querySelector('#weeklySleepQuality');
const avgSleepHours = document.querySelector('#avgSleepHours');
const avgSleepQuality = document.querySelector('#avgSleepQuality');
// const todaysHydrationChart = document.querySelector('#todaysHydrationChart');
// todaysIntakeChart = document.querySelector('#todaysIntakeChart');

const fetchData = () => {
  Promise.all([usersData, sleepData, activityData, hydrationData]).then(data => {
    handleData(data);
  });
}

const handleData = (data) => {
  const users = new UserRepository(data[0].userData);
  const currentUser = getRandomUser(users);
  currentUser.hydration = new Hydration(data[3].hydrationData, currentUser.id);
  currentUser.sleep = new Sleep(data[1].sleepData, currentUser.id);

  updateUser(currentUser, users);
  displayStats(currentUser);
  makeCharts(currentUser);

}

const makeCharts = (currentUser) => {
  let todaysIntakeChartConfig = charts.todaysIntakeChart(currentUser);
  let todaysIntakeChart = document.querySelector('#todaysIntakeChart');
  let todaysIntakeCanvas = new Chart(todaysIntakeChart, todaysIntakeChartConfig);
}

const getRandomUser = (users) => {
  return users.getUser(Math.floor(Math.random() * users.users.length));
}

const updateUser = (currentUser, users) => {
  let friends = `Friends: `
  userName.innerText = `Welcome ${currentUser.getName()}`;
  stepGoal.innerText = `Your step goal: ${currentUser.dailyStepGoal} / Average: ${users.averageStepGoal()}`
  currentUser.friends.forEach(friend => {
    friends += `${users.getUser(friend).getName()}, `
  });
  friends = friends.slice(0, -2)
  infoCard.innerHTML = `
    <p>Name: ${currentUser.name}</p>
    <p>Id: ${currentUser.id}</p>
    <p>Address: ${currentUser.address}</p>
    <p>Email: ${currentUser.email}</p>
    <p>Stride Length: ${currentUser.strideLength}</p>
    <p>${friends}</p>`;
}

const displayStats = (currentUser) => {
  todaysIntake.innerHTML +=
  `<p>Your water intake for today is: ${currentUser.hydration.getDaily(currentUser.hydration.days[currentUser.hydration.days.length - 1].date)} fl oz`
  currentUser.hydration.getWeekly().forEach(day => weeklyIntake.innerHTML += `<p>On ${day.date} you drank: ${day.numOunces} fl oz</p>`);
  avgSleepHours.innerHTML +=
  `<p>Your total sleep hour average is: ${currentUser.sleep.getAverage()}`
  avgSleepQuality.innerHTML +=
  `<p>Your total sleep quality average is: ${currentUser.sleep.getAverageQuality()}`
  todaysSleepHours.innerHTML +=
  `<p>You slept ${currentUser.sleep.getSleep(currentUser.sleep.days[currentUser.sleep.days.length - 1].date)} hours last night.`
  todaysSleepQuality.innerHTML +=
  `<p>Your sleep quality last night was: ${currentUser.sleep.getSleepQuality(currentUser.sleep.days[currentUser.sleep.days.length - 1].date)}.`
  currentUser.sleep.getWeekSleep(currentUser.sleep.days[currentUser.sleep.days.length - 8].date).forEach(day => weeklySleepHours.innerHTML += `<p>On ${day.date}, you slept ${day.hoursSlept} hours.`);
  currentUser.sleep.getWeekQuality(currentUser.sleep.days[currentUser.sleep.days.length - 8].date).forEach(day => weeklySleepQuality.innerHTML += `<p>On ${day.date}, your sleep quality was: ${day.sleepQuality}.`);

}





window.onload = fetchData;
