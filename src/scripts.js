// ~~~~~ QUERY SELECTORS ~~~~~
const userNameGreeting = document.querySelector(".user-greeting");
const userInfoCard = document.querySelector(".user-info-card");

// ~~~~~ EVENT LISTENERS ~~~~~
window.onload = start;

// ~~~~~ GLOBAL VARIABLES ~~~~~
const users = userData.map(userObject => {
  const user = new User(userObject);
  return user;
});
const userRepository = new UserRepository(users);

// ~~~~~ FUNCTIONS ~~~~~
function start() {
  userNameGreeting.innerText = `Hello, ${users[5].returnFirstName()}`;
  displayUserInfoCard(users[5]);
}

function displayUserInfoCard(user) {
  userInfoCard.innerHTML = `
    <p>User ID: ${user.id}</p>
    <p>Name: ${user.name}</p>
    <p>Email: ${user.email}</p>
    <p>Stride length: ${user.strideLength}</p>
    <p>Friends: ${user.friends}</p>
    <p>Daily Step Goal: ${user.dailyStepGoal}</p>
    <p>Avg User Step Goal: ${userRepository.calculateAverageStepGoal()}</p>`;
}
