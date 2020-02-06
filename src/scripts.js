let userNameDisplay = document.querySelector('.user-name');
let currentUser;

window.onload = loadHandler;

function loadHandler() {
  loadUser()
  console.log(currentUser);
}

function loadUser() {
  shuffleUser(userData);
  currentUser = new User(userData[0]);
}

function shuffleUser(array) {
  array.sort(() => Math.random() - 0.5);
}
