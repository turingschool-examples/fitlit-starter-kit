const newUserRepo = new UserRepository(userData);
const newUser = new User(userData[0]);


/* *****Query Selectors***** */
const welcomeMessage = document.querySelector("#welcomeMessage");
const infoCard = document.querySelector("#infoCard");
const stepGoals = document.querySelector("#stepGoals");

/* *****Event Listeners***** */
window.addEventListener("load", displayUser);


/* *****Functions***** */
function displayUser() {
  welcomeUser();
  displayInfoCard();
  compareStepGoal();
}

function welcomeUser() {
  welcomeMessage.innerText = `Welcome, ${newUser.firstName()}!`;
}

function displayInfoCard() {
  infoCard.innerHTML = `
    <p>Name: ${newUser.name}</p>
    <p>Address: ${newUser.address}</p>
    <p>Email: ${newUser.email}</p>
    <p>Stride Length: ${newUser.strideLength}</p>
    <!-- <p>Daily Step Goals: ${newUser.dailyStepGoal}</p> -->
    <p>Friends: ${newUser.friends}</p>
  `
}

function compareStepGoal() {
  stepGoals.innerHTML = `
    <p>Your Step Goal: ${newUser.dailyStepGoal}</p>
    <p>Average of Other Users' Step Goals: ${newUserRepo.calculateAvgStepGoal()}</p>
  `
  //display how user step goal compares to average step goal of all users
}
