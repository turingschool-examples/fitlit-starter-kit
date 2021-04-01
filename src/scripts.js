const userRepository = new UserRepository(userData);
let selectedDate;
let startDate;
let endDate;
let currentUser;

const userInfoButton = document.getElementById('userinfoButton');
const userInfoDropdown = document.getElementById('userInfoPage');
const userEmail = document.getElementById('userinfoEmail');
const userStepGoal = document.getElementById('userinfoGoal');
const averageStepGoal = document.getElementById('averageStepGoal');
const userNameDisplay = document.getElementById('userName');
const picker = datepicker(document.getElementById('date-picker'), {
  onSelect: (instance, date) => {
    if (date) {
      let stringifiedDateAndTime = JSON.stringify(date);
      let stringifiedDate = stringifiedDateAndTime.split('T')[0];
      let formattedDate = stringifiedDate.replaceAll('-', '/');
      selectedDate = formattedDate.substring(1);
    }
  },
  startDate: new Date(2019, 8, 1),
  minDate: new Date(2019, 5, 15),
  maxDate: new Date(2019, 8, 22),
})

const start = datepicker(document.getElementById('dateRangePickerStart'), {
  id: 'dateRangePicker',
  startDate: new Date(2019, 8, 1),
  minDate: new Date(2019, 5, 15),
  maxDate: new Date(2019, 8, 22),
});
const end = datepicker(document.getElementById('dateRangePickerEnd'), {
  id: 'dateRangePicker',
  startDate: new Date(2019, 8, 1),
  minDate: new Date(2019, 5, 15),
  maxDate: new Date(2019, 8, 22),
  onSelect: (instance, date) => {
    let stringifiedRange = JSON.stringify(end.getRange());
    let splitRange = stringifiedRange.split("\"");
    let startRange = splitRange[3]
    let endRange = splitRange[7]
    startDate = startRange.substring(0,10).replaceAll('-', '/');
    endDate = endRange.substring(0,10).replaceAll('-', '/');

  }
});

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
    return `Your step goal is ${Math.abs(stepDifferece)} steps more than the average user`
  } else if (stepDifferece > 0) {
    return `Your step goal is ${stepDifferece} steps less than the average user`
  } else {
    return 'Your step goal is on par with the average user'
  }
}

function showDropdown() {
  userInfoDropdown.classList.toggle('hide');
}
