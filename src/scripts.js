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
var user = new User(userData);


// ****** querySelectors ******
var welcomeUser = document.querySelector('welcome-user');







function displayDropDownInfo() {
    let userDropDown = document.getElementById('userDropDown');
    let userArray = userData;
    for (let i = 0; i < userArray.length; i++) {
        let userOptions = document.createElement('OPTION');
        let userText = document.createTextNode(userArray[i].name);
        userOptions.appendChild(userText);
        userDropDown.insertBefore(userOptions, userDropDown.lastChild);
    }
} 
displayDropDownInfo();

// Need an event handler function that handles:
// // when a user is selected from the dropdown: >>> var userDropDown = document.querySelector('user-dropdown');
// // // Need onClick function to trigger the dropdown
// // it triggers showing the info card with the users data info. >>> var userInfoCard = document.querySelector('user-dropdown');
// // it triggers the 'Welcome ${userNameVariableWeChose!}` display. >>> document.querySelector('welcome-user);
// // it triggers 


welcomeUser.innerText = `Welcome ${user.returnFirstName(user)}!`;




