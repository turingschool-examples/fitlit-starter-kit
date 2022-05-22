import './css/styles.css';
import './images/water.png';
import './images/turing-logo.png';
import UserRepository from './UserRepository';
import HydrationRepository from './HydrationRepository';
import SleepRepository from './SleepRepository';
import {userDataList, userHydrationList, userSleepList} from './apiCalls';
import datepicker from 'js-datepicker';
import dateFormat from 'dateformat'

// ****** Global Variables ******
var userData;
var userHydrationData;
var userSleepData;
var userRepository;
var hydrationRepository;
var sleepRepository;

// ****** querySelectors ******
var welcomeUser = document.querySelector('.welcome-user');
var userInfo = document.querySelector('.user-info');
var avgDisplayBoxWater = document.querySelector('#averageGoalWater');
var avgDisplayBoxSleep = document.querySelector('#averageGoalSleep');
var waterButton = document.querySelector('#water-button');
var sleepButton = document.querySelector('#sleep-button');
var dailyResultWater = document.getElementById('user-ounce-for-day-result');
var dailyResultSleep = document.getElementById('user-hours-for-day-result');
var waterContainer = document.querySelector('#waterContainer');
var sleepContainer = document.querySelector('#sleepContainer');

// ****** event listeners ******
window.addEventListener('load', loadData);
waterButton.addEventListener('click', waterDataDisplay);
sleepButton.addEventListener('click', sleepDataDisplay);


function loadData () {
    Promise.all([userDataList(), userHydrationList(), userSleepList()]).then(data => {
        userData = data[0].userData
        userHydrationData = data[1].hydrationData
        userSleepData = data[2].sleepData
        userRepository = new UserRepository(userData);
        hydrationRepository = new HydrationRepository(userHydrationData);
        sleepRepository = new SleepRepository(userSleepData);
        document.getElementById('userDropDown').onchange = () => {
            chooseUser(userRepository, hydrationRepository);
        };
        var users = userRepository.users
        displayDropDownInfo(users);

        const picker = datepicker('#date-picker-water', {
            minDate: new Date(2019, 5, 15),
            maxDate: new Date(2020, 0, 22),
            startDate: new Date(2020, 0, 22),
            formatter: (input, date, _instance) => {
                const newDate = dateFormat(date, "yyyy/mm/dd")
                input.value = newDate
              },
            onSelect: (_instance, date) => {
                var selection = document.getElementById('userDropDown');
                var userId = parseInt(selection.options[selection.selectedIndex].value);
                const formattedDate = dateFormat(date, "yyyy/mm/dd");
                waterDataDisplay(userId, formattedDate, hydrationRepository)
            }
          })

          const picker1 = datepicker('#date-picker-sleep', {
            minDate: new Date(2019, 5, 15),
            maxDate: new Date(2020, 0, 22),
            startDate: new Date(2020, 0, 22),
            formatter: (input, date, _instance) => {
                const newDate = dateFormat(date, "yyyy/mm/dd")
                input.value = newDate
              },
            onSelect: (_instance, date) => {
                var selection = document.getElementById('userDropDown');
                var userId = parseInt(selection.options[selection.selectedIndex].value);
                const formattedDate = dateFormat(date, "yyyy/mm/dd");
                try{
                sleepDataDisplay(userId, formattedDate, sleepRepository)}
                catch{}
            }
          })

    })
}

function displayDropDownInfo(users) {
    let userDropDown = document.getElementById('userDropDown');
    users.forEach(user => {
        let userOptions = document.createElement('OPTION');
        let userText = document.createTextNode(user.name);
        userOptions.appendChild(userText);
        userOptions.setAttribute('value', user.id);
        userDropDown.insertBefore(userOptions, userDropDown.lastChild);
    })
}

function chooseUser(userRepository) {
    clearData();
    var selection = document.getElementById('userDropDown');
    var userId = parseInt(selection.options[selection.selectedIndex].value);
    var user = userRepository.getUser(userId)
    displayUserInfo(user, userRepository);
};

function displayUserInfo(user, userRepository, hydrationRepository) {
    welcomeUser.innerText = `Welcome, ${user.returnFirstName()}!`;
    userInfo.innerHTML =
            `Address: ${user.address}<br>
            E-mail: ${user.email}<br>
            \nStride Length: ${user.strideLength}<br>
            Daily Step Goal: ${user.dailyStepGoal}<br>
            \nAverage Users Step Goal: ${userRepository.averageStepGoal()}`
};

function waterDataDisplay(userId, formattedDate, hydrationRepository) {
    waterContainer.classList.remove("hidden");
    sleepContainer.classList.add("hidden");
    const userOuncesForDate = hydrationRepository.displayDailyAvgOunces(userId, formattedDate)
    dailyResultWater.innerText = `Ounces: ${userOuncesForDate}`
    const ouncesIntake = hydrationRepository.displayWeekWaterIntake(userId, formattedDate)
    const dateIntake = hydrationRepository.displayWaterByDate(userId, formattedDate)
    hydrationRepository.displayWeeklyWaterChart(dateIntake, ouncesIntake)
    avgDisplayBoxWater.innerText = `Average Water Consumed: ${hydrationRepository.displayAllTimeAvgOunces(userId)}`
}

function sleepDataDisplay(userId1, formattedDate1, sleepRepository) {
    waterContainer.classList.add("hidden");
    sleepContainer.classList.remove("hidden");
    try{
        const dailySleepHours = sleepRepository.displayDailySleepHours(userId1, formattedDate1)
        const dailyQualityOfSleep = sleepRepository.displaySleepQualityByDate(userId1, formattedDate1)
        dailyResultSleep.innerText = `Hours Slept: ${dailySleepHours}
                                    Quality of Sleep: ${dailyQualityOfSleep}`
        const dateSleep = sleepRepository.displaySleepWeek(userId1, formattedDate1)
        const Shours = sleepRepository.displayWeekSleepHours(userId1, formattedDate1)
        const SQhours = sleepRepository.displayWeekSleepQualityHours(userId1, formattedDate1)
        sleepRepository.displayWeeklySleepChart(dateSleep, Shours, SQhours)
        avgDisplayBoxSleep.innerText = `Average Sleep Qualty of All Time: ${sleepRepository.displayUserSleepQualityAllTime(userId1)}
                                        Average Hours of Sleep of All Time: ${sleepRepository.displayUserHoursSleepAllTime(userId1)}`
    }
    catch{}
}

function clearData(){
    dailyResultWater.innerText = '';
    avgDisplayBoxWater.innerText = 'Average Ounces';
    dailyResultSleep.innerText = ''; 
    avgDisplayBoxSleep.innerText = 'Average Sleep';
}