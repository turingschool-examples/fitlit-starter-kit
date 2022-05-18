import './css/styles.css';
import './images/turing-logo.png'
import UserRepository from './UserRepository';
import User from './User';
import {userDataList} from './apiCalls';

window.addEventListener('load', loadData());

function loadData () {
    Promise.all([userDataList()]).then(data => {
        var userData = data[0].userData
        document.getElementById('userDropDown').onchange = () => {
            let userRepo = userListCreation(userData);
            chooseUser(userRepo);
        };

        displayDropDownInfo(userData);
        userListCreation(userData);
        chooseUser(userData);
    })
}

// ****** Global Variables ******
// var user = new User(userData);


// ****** querySelectors ******
var welcomeUser = document.querySelector('.welcome-user');
var userInfo = document.querySelector('.user-info');
var userDisplay = document.querySelector('#userInfo');

// ****** eventListners ******


function chooseUser(userDataList) {
    var selection = document.getElementById('userDropDown');
    var option = parseInt(selection.options[selection.selectedIndex].value);
    displayUserInfo(userDataList, option);
    userDataList.forEach(obj => {
      if(obj.id === option){
        var user = new User(obj)
          welcomeUser.innerText = `Welcome ${user.returnFirstName()}!`;
        }
    })
}

function displayUserInfo(userArray, id) {
    if(!id){
        return;
    }
    var user = userArray.find((user) => user.id === id);
    // var stepGoalRating;
    // user.dailyStepGoal > getStepGoalAvg(userArray) ? stepGoalRating = 'Above Average' : stepGoalRating = 'Above Average';
    userInfo.innerText =
        `${user.name}
        Address: ${user.address}
        E-mail: ${user.email}
        Stride Length: ${user.strideLength}
        Daily Step Goal: ${user.dailyStepGoal}
        Average Users Step Goal: ${averageGoal(userArray)}`
};

function userListCreation(userData) {
    let newUserArray = [];
    userData.forEach((user) => {
        var user = new User(user);
        newUserArray.push(user);
    })
    return newUserArray;
}

function displayDropDownInfo(userData) {
    let userDropDown = document.getElementById('userDropDown');
    let userArray = userData;
    for (let i = 0; i < userArray.length; i++) {
        let userOptions = document.createElement('OPTION');
        let userText = document.createTextNode(userArray[i].name);
        userOptions.appendChild(userText);
        userOptions.setAttribute('value', userArray[i].id);
        userDropDown.insertBefore(userOptions, userDropDown.lastChild);
    }
}

function averageGoal(userData) {
  const result = userData.reduce((sum, element) => {
    return sum += element.dailyStepGoal
  }, 0);
  return result / userData.length;
}

