import './css/styles.css';
import './images/turing-logo.png'
import UserRepository from './UserRepository';
import HydrationRepository from './HydrationRepository';
import {userDataList, userHydrationList, userSleepList} from './apiCalls';
import datepicker from 'js-datepicker';
import dateFormat from 'dateformat'

// ****** querySelectors ******
var welcomeUser = document.querySelector('.welcome-user');
var userInfo = document.querySelector('.user-info');
var avgWaterGoal = document.querySelector('#averageGoal');

// ****** event listeners ******
window.addEventListener('load', loadData);

function loadData () {
    Promise.all([userDataList(), userHydrationList(), userSleepList()]).then(data => {
        var userData = data[0].userData
        var userHydrationData = data[1].hydrationData
        var userSleepData = data[2].sleepData
        const userRepository = new UserRepository(userData);
        const hydrationRepository = new HydrationRepository(userHydrationData);
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
                const formattedDate = dateFormat(date, "yyyy/mm/dd")
                const userOuncesForDate = hydrationRepository.displayDailyAvgOunces(userId, formattedDate)
                const resultElement = document.getElementById('user-ounce-for-day-result')
                resultElement.innerText = `Ounces: ${userOuncesForDate}`
                const ouncesIntake = hydrationRepository.displayWeekWaterIntake(userId, formattedDate)
                const dateIntake = hydrationRepository.displayWaterByDate(userId, formattedDate)
                hydrationRepository.displayWeeklyWaterChart(dateIntake, ouncesIntake)
            }
          })
    })
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
    // var stepGoalRating;
    // user.dailyStepGoal > getStepGoalAvg(userArray) ? stepGoalRating = 'Above Average' : stepGoalRating = 'Above Average';
    userInfo.innerHTML =
        // `${user.name}
        `Address: ${user.address}<br>
        E-mail: ${user.email}<br>
        \nStride Length: ${user.strideLength}<br>
          Daily Step Goal: ${user.dailyStepGoal}<br>
            \nAverage Users Step Goal: ${userRepository.averageStepGoal()}`
        displayWaterAvgGoalAllTime(user.id, hydrationRepository);
    // stepsBox.innerText = `Daily Step Goal: ${user.dailyStepGoal}`
};

function displayWaterAvgGoalAllTime(id, hydrationRepository) {
    avgWaterGoal.innerText = `Average Water Consumed: ${hydrationRepository.displayAllTimeAvgOunces(id)}`
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
