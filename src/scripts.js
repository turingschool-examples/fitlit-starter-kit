let linksParent = document.querySelector('.link-container');
let userScore = document.getElementById('userScore');
let numOfSteps = document.getElementById('numOfSteps');
let minutesActive = document.getElementById('minutesActive');
let flightsOfStairs = document.getElementById('flightsOfStairs');
let numOunces = document.getElementById('numOunces');
let hoursSlept = document.getElementById('hoursSlept');
let sleepQuality = document.getElementById('sleepQuality');
let userInfo = document.querySelectorAll('.userInfo');
let friendsContainerEl = document.querySelector('.friends-container');
let averageStepContainer = document.querySelector('.averageStepContainer');
let userRepo;
let curUser;
let user;
let hydration;
let date = "2019/06/15";


function windowLoadHandler() {
  instatiateUser();
  displayUserInfo();
  displayFriends();
  displayAverageSteps();
  displayOuncesDrankToday()
}

function instatiateUser() {
  userRepo = new UserRepository(userData);
  let id = Math.floor(Math.random() * userData.length);
  user = new User(userRepo.findUserByID(id));
  hydration = new Hydration(hydrationData);
}

function displayUserInfo() {
  userInfo.forEach(function(domElement) {
    if (domElement.id === 'name') {
      domElement.innerText = user.getFirstName();
    } else {
      domElement.innerText = user[domElement.id];
    }
  });
}

function displayFriends() {
  user.friends.forEach(function(friendId) {
    let friendCardHTML = `
    <article class="card friends">
     <p>${userRepo.findUserByID(friendId).name} </p>
     <p>DailyStepGoal: ${userRepo.findUserByID(friendId).dailyStepGoal} </p>
    </article>
    `
    friendsContainerEl.insertAdjacentHTML('beforeend', friendCardHTML);
  });
}

function displayAverageSteps() {
  let averageStepsHTML = `
  <article class="averageScore">
    <p>Your average steps compared with others:</p>
    <p>${userRepo.calculateAverageStepGoal(user.dailyStepGoal)}%</p>
  </article>
  `
  averageStepContainer.insertAdjacentHTML('beforeend', averageStepsHTML);
}

function displayOuncesDrankToday() {
  let ouncesDrankTodayHTML = `
  <article class="ouncesDrankToday">
  <p>Ounces Drank today: ${hydration.getFluidConsumedDay(user.id, date)}</p>
  <p>Ounces Drank in the past week: ${hydration.getPrevDaysHydration(user.id)}</p>
  </article>
  `
  numOunces.insertAdjacentHTML('beforeend', ouncesDrankTodayHTML);
}


function activeLink(event) {
  if (event.target.classList.contains('navLink')) {
    document.querySelector('.active').classList.remove('active');
    event.target.classList.add('active');
    swapContent(event);
  }
}

linksParent.addEventListener('click', activeLink);
window.onload = windowLoadHandler();
