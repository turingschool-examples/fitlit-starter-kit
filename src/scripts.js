import './css/styles.css';
import './images/turing-logo.png'
import UserRepository from './UserRepository';
import User from './User';
import {userDataList, userHydrationList, userSleepList} from './apiCalls';

// ****** querySelectors ******
var welcomeUser = document.querySelector('.welcome-user');
var userInfo = document.querySelector('.user-info');
var stepsBox = document.querySelector('#stepsBox');
// var userDisplay = document.querySelector('#userInfo');

// ****** event listeners ******
window.addEventListener('load', loadData);

function loadData () {
    Promise.all([userDataList(), userHydrationList(), userSleepList()]).then(data => {
        var userData = data[0].userData
        var userHydrationData = data[1].hydrationData
        var userSleepData = data[2].sleepData
        const userRepository = new UserRepository(userData);
        document.getElementById('userDropDown').onchange = () => {
            chooseUser(userRepository);
        };

        var users = userRepository.users
        displayDropDownInfo(users);
    })
}

function chooseUser(userRepository) {
    var selection = document.getElementById('userDropDown');
    var userId = parseInt(selection.options[selection.selectedIndex].value);
    var user = userRepository.getUser(userId)
    displayUserInfo(user, userRepository);
}

function displayUserInfo(user, userRepository) {
   welcomeUser.innerText = `Welcome, ${user.returnFirstName()}!`;
    // var stepGoalRating;
    // user.dailyStepGoal > getStepGoalAvg(userArray) ? stepGoalRating = 'Above Average' : stepGoalRating = 'Above Average';
    userInfo.innerText =
        // `${user.name}
        `Address: ${user.address}
        E-mail: ${user.email}
        \nStride Length: ${user.strideLength}
          Daily Step Goal: ${user.dailyStepGoal}
          Average Users Step Goal: ${userRepository.averageStepGoal()}`
    // stepsBox.innerText = `Daily Step Goal: ${user.dailyStepGoal}`
};

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
