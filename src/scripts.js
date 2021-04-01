const userRepository = new UserRepository(userData);
let selectedDate;
let currentUser;

const userInfoButton = document.getElementById('userinfoButton');
const userInfoDropdown = document.getElementById('userInfoPage');
const userEmail = document.getElementById('userinfoEmail');
const userStepGoal = document.getElementById('userinfoGoal');
const averageStepGoal = document.getElementById('averageStepGoal');
const userNameDisplay = document.getElementById('userName');
const picker = datepicker(document.querySelector('#date-picker'), {
  onSelect: (instance, date) => {
    if (date) {
      let stringifiedDateAndTime = JSON.stringify(date);
      let stringifiedDate = stringifiedDateAndTime.split('T')[0];
      let formattedDate = stringifiedDate.replaceAll('-', '/');
      selectedDate = formattedDate.substring(1);
      console.log(selectedDate);
    }
  },
  startDate: new Date(2019, 5, 15),
  minDate: new Date(2019, 5, 15),
  maxDate: new Date(2019, 8, 22),
})

window.addEventListener('load', displayUserInfo);
userInfoButton.addEventListener('click', showDropdown);


function displayUserInfo() {
  userRepository.createUsers();
  let randomIndex = getRandomIndex(userRepository.users);
  currentUser = userRepository.users[randomIndex]
  userNameDisplay.innerText = `Welcome ${currentUser.returnFirstName()}`;
  userEmail.innerText = `Email Address: ${currentUser.email};`
  userStepGoal.innerText = `Daily Step Goal: ${currentUser.dailyStepGoal}`;
  averageStepGoal.innerText = calculateStepDifference();
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function calculateStepDifference() {
  let averageSteps = userRepository.returnAverageStepGoal();
  let userSteps = currentUser.dailyStepGoal;
  let stepDifferece = averageSteps - userSteps;
  if (stepDifferece < 0) {
    return `Your step goal is ${Math.abs(stepDifferece)} steps more than the global average`
  } else if (stepDifferece > 0) {
    return `Your step goal is ${stepDifferece} steps less than the global average`
  } else {
    return 'Your step goal is on par with the global average'
  }
}

function showDropdown() {
  userInfoDropdown.classList.toggle('hide');
}
