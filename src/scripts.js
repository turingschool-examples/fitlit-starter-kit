
// Variables
let user;

// QuerySelectors
const displayUserInfo = document.querySelector('.display-user-info');
const displayUserFirstName = document.querySelector('#welcome-message');

// Events
window.onload = createRandomUser(), displayUserData(), displayFirstName()


// Functions
function displayFirstName() {
    displayUserFirstName.innerHTML = `<h1>Welcome ${user.displayFirstNameOnly()}!</h1>`
}

function createRandomUser() {
  let randomUser = Math.floor(Math.random() * userData.length)
  return user = new User(userData[randomUser])
}

function displayUserData() {
  displayUserInfo.innerHTML = `
  <p>User: ${user.name}</p>
  <p>Address: ${user.address}</p>
  <p>Email: ${user.email}</p>
  <p>Stride Length: ${user.strideLength}</p>
  <p>Daily Step Goal: ${user.dailyStepGoal}</p>
  <p>Friends: ${user.friends}</p>
  <p>User Id: ${user.id}</p>
  `
}