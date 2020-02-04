let linksParent = document.querySelector('.link-container');
let userScore = document.getElementById('userScore');
let numOfSteps = document.getElementById('numOfSteps');
let minutesActive = document.getElementById('minutesActive');
let flightsOfStairs = document.getElementById('flightsOfStairs');
let numOunces = document.getElementById('numOunces');
let hoursSlept = document.getElementById('hoursSlept');
let sleepQuality = document.getElementById('sleepQuality');
let userInfo = document.querySelectorAll('.userInfo');
let userRepo;
let curUser;
let user;


function windowLoadHandler() {
  instatiateUser();
  displayUserInfo();
}

function instatiateUser() {
  userRepo = new UserRepository(userData);
  let id = Math.floor(Math.random() * userData.length);
  user = new User(userRepo.findUserByID(id));
}

function displayUserInfo() {
  userInfo.forEach(function(element){
    element.innerText = user[element.id];
  });
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
