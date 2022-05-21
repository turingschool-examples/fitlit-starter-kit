import './css/styles.css';
import './images/turing-logo.png';
import UserRepository from './UserRepository';
import HydrationRepository from './HydrationRepository';
import SleepRepository from './SleepRepository';
import {userDataList, userHydrationList, userSleepList} from './apiCalls';
import datepicker from 'js-datepicker';
import dateFormat from 'dateformat'

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
        var userData = data[0].userData
        var userHydrationData = data[1].hydrationData
        var userSleepData = data[2].sleepData
        const userRepository = new UserRepository(userData);
        const hydrationRepository = new HydrationRepository(userHydrationData);
        const sleepRepository = new SleepRepository(userSleepData);
        document.getElementById('userDropDown').onchange = () => {
            chooseUser(userRepository, hydrationRepository);
        };
        var users = userRepository.users
        displayDropDownInfo(users);
        
        const picker = datepicker('#date-picker', {
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

          const picker1 = datepicker('#date-picker1', {
            minDate: new Date(2019, 5, 15),
            maxDate: new Date(2020, 0, 22),
            startDate: new Date(2020, 0, 22),
            formatter: (input, date, _instance) => {
                const newDate = dateFormat(date, "yyyy/mm/dd")
                input.value = newDate
              },
            onSelect: (_instance, date) => {
                var selection = document.getElementById('userDropDown');
                var userId1 = parseInt(selection.options[selection.selectedIndex].value);
                const formattedDate1 = dateFormat(date, "yyyy/mm/dd");
                sleepDataDisplay(userId1, formattedDate1, sleepRepository)
            }
          })

    })
}

function waterDataDisplay(userId, formattedDate, hydrationRepository) {
    waterContainer.classList.remove("hidden");
    sleepContainer.classList.add("hidden");
    const userOuncesForDate = hydrationRepository.displayDailyAvgOunces(userId, formattedDate)
    dailyResultWater.innerText = `Ounces: ${userOuncesForDate}`
    const ouncesIntake = hydrationRepository.displayWeekWaterIntake(userId, formattedDate)
    const dateIntake = hydrationRepository.displayWaterByDate(userId, formattedDate)
    hydrationRepository.displayWeeklyWaterChart(dateIntake, ouncesIntake)
    displayWaterAvgGoalAllTime(userId, hydrationRepository);
}

function sleepDataDisplay(userId1, formattedDate1, sleepRepository) {
    waterContainer.classList.add("hidden");
    sleepContainer.classList.remove("hidden");
    const dailySleepHours = sleepRepository.displayDailySleepHours(userId1, formattedDate1)
    const dailyQualityOfSleep = sleepRepository.displaySleepQualityByDate(userId1, formattedDate1)
    dailyResultSleep.innerText = `Hours Slept: ${dailySleepHours}
                                  Quality of Sleep: ${dailyQualityOfSleep}`
    const  hours = sleepRepository.displayWeekSleepHours(userId1, formattedDate1)
    const date = sleepRepository.displayWeekSleepQualityHours(userId1, formattedDate1)
    sleepRepository.displayWeeklySleepChart(date, hours)
    const  hours1 = sleepRepository.displayWeekSleepHours(userId1, formattedDate1)
    const date1 = sleepRepository.displayWeekSleepQualityHours(userId1, formattedDate1)
    sleepRepository.displayWeeklySleepChart(date1, hours1)
    avgDisplayBoxSleep.innerText = `Average Sleep Qualty of All Time: ${sleepRepository.displayUserSleepQualityAllTime(userId1)}
                                    Average Hours of Sleep of All Time: ${sleepRepository.displayUserHoursSleepAllTime(userId1)}`
}

function chooseUser(userRepository, hydrationRepository) {
    var selection = document.getElementById('userDropDown');
    var userId = parseInt(selection.options[selection.selectedIndex].value);
    var user = userRepository.getUser(userId)
    displayUserInfo(user, userRepository, hydrationRepository);
    const datePicker = document.querySelector("#date-picker");
    datePicker.value = "";
    const userOuncesDisplay = document.querySelector("#user-ounce-for-day-result");
    userOuncesDisplay.innerText = "";
};

function displayUserInfo(user, userRepository, hydrationRepository) {
    welcomeUser.innerText = `Welcome, ${user.returnFirstName()}!`;
    userInfo.innerHTML =
            // `${user.name}
            `Address: ${user.address}<br>
            E-mail: ${user.email}<br>
            \nStride Length: ${user.strideLength}<br>
            Daily Step Goal: ${user.dailyStepGoal}<br>
            \nAverage Users Step Goal: ${userRepository.averageStepGoal()}`
};

function displayWaterAvgGoalAllTime(id, hydrationRepository) {
    avgDisplayBoxWater.innerText = `Average Water Consumed: ${hydrationRepository.displayAllTimeAvgOunces(id)}`
}

function displayDropDownInfo(users) {
    let userDropDown = document.getElementById('userDropDown');
    for (let i = 0; i < users.length; i++) {
        let userOptions = document.createElement('OPTION');
        let userText = document.createTextNode(users[i].name);
        userOptions.appendChild(userText);
        userOptions.setAttribute('value', users[i].id);
        userDropDown.insertBefore(userOptions, userDropDown.lastChild);
    }
}
