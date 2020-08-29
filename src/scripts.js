




window.addEventListener('load', onLoad);

function onLoad() {
  chooseRandomUser();
  displayUserInfo();
  compareUsersSteps();

}

function chooseRandomUser() {
  const randomUser = Math.floor(Math.random() * userData.length)
  console.log(randomUser)
  user = new User(userData[randomUser])
  let greeting = document.querySelector('.user-profile-display')
  greeting.innerHTML = `Welcome, ${user.returnFristName()}!`
}

function displayUserInfo() {
  let infoCard = document.querySelector('.user-info-card')
  infoCard.innerHTML +=
    `<h2>INFO</h2>
    <p>Name: ${user.userData.name}</p>
    <p>Address: ${user.userData.address}</p>
    <p>Email: ${user.userData.email}</p>
    <p>Stride: ${user.userData.strideLength} feet.</p>
    <p>Steps: ${user.userData.dailyStepGoal} steps per day.</p>
    <p>Friends: ${user.userData.friends}</p>`
}


function compareUsersSteps() {
  userRepository = new UserRepository(userData)
  console.log(userRepository)
  let displayUserStepGoal = document.querySelector('.display-single-user-step-goal')
  displayUserStepGoal.innerHTML += `${user.userData.dailyStepGoal}`
  let allUserStepGoal = document.querySelector('.display-all-user-step-goal')
  allUserStepGoal.innerHTML += `${userRepository.getAvgStepGoal()}`
}



// Create an info card on the dashboard with all of user’s info on the page--want it to display name, address, email, strideLength & stepgoal, friends

// Display their first name somewhere prominently on the page to welcome them

// For a specific user, display how their step goal compares to the average step goal amongst all users (this display should not be hard-coded)
