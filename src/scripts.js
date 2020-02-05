const randomUser = Math.ceil(Math.random() * 50);
const userRepository = new UserRepository(userData);
const user = new User(userRepository.getUserData(randomUser));


function populateUserInfo() {
  document.getElementById("user-name").innerText = user.returnUserFirstName();
  // document.getElementById('current-date').innerText = populateCurrentDate();
}

populateUserInfo();


function populateCurrentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  // document.write(today);
  document.getElementById('current-date').innerText = today;
}

populateCurrentDate();

//
