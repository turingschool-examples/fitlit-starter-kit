console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
console.log('This is the JavaScript entry file - your code begins here.');
// An example of how you tell webpack to use a JS file
import userData from './data/users';
import UserRepository from './UserRepository';
import User from './User';



// ****** Global Variables ******
// var user = new User(userData);



// ****** querySelectors ******
// var welcomeUser = document.querySelector('.welcome-user');
var userInfo = document.querySelector('.user-info');
var userDisplay = document.querySelector('#userInfo');

// ****** eventListners ******

document.getElementById('userDropDown').onchange = () => {
    let userRepo = userListCreation(userData);
    chooseUser(userRepo);
};

function chooseUser(userDataList) {
    var selection = document.getElementById('userDropDown');
    console.log(selection)
    var option = parseInt(selection.options[selection.selectedIndex].value);
    displayUserInfo(userDataList, option);
}

function displayUserInfo(userArray, id) {
    var user = userArray.find((user) => user.id === id);
    // var stepGoalRating;
    // user.dailyStepGoal > getStepGoalAvg(userArray) ? stepGoalRating = 'Above Average' : stepGoalRating = 'Above Average';
    userInfo.innerText = 
        `${user.name}
        Address: ${user.address}
        E-mail: ${user.email}
        Stride Length: ${user.strideLength}
        Daily Step Goal: ${user.dailyStepGoal}` 
};

function userListCreation(userData) {
    let newUserArray = [];
    console.log(userData)
    userData.forEach((user) => {
        var user = new User(user);
        newUserArray.push(user);
    })
    return newUserArray;
}

function displayDropDownInfo() {
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
displayDropDownInfo();



// welcomeUser.innerText = `Welcome ${user.returnFirstName(user)}!`;




