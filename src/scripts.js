




window.addEventListener('load', onLoad);

function onLoad() {
  chooseRandomUser();
  displayUserInfo();
}

function chooseRandomUser() {
  const randomUser = Math.floor(Math.random() * userData.length)
  console.log(randomUser)
  user = new User(userData[randomUser])
  let greeting = document.querySelector('.user-profile-display')
  greeting.innerHTML = `Welcome, ${user.returnFristName()}!`
}



function displayUserInfo() {
  // let infoCard = document.querySelector('.user-info-card')
  // console.log(infoCard)
  // infoCard.innerHTML =
  // console.log(user)
  let userAddress = document.querySelector('.user-address')
  userAddress.innerHTML += `${user.userData.address}`
  let userEmail = document.querySelector('.user-email')
  userEmail.innerHTML += `${user.userData.email}`
  let userStride = document.querySelector('.user-stride')
  userStride.innerHTML += `${user.userData.strideLength}`
  let userStepGoal = document.querySelector('.user-step-goal')
  userStepGoal.innerHTML += `${user.userData.dailyStepGoal}`
  let userFriends = document.querySelector('.user-friends')
  userAddress.innerHTML += `${user.userData.friends}`
  console.log(user.userData.friends)
}


// <h3 class="user-address">Address:</h3>
// <h3 class="user-email">Email:</h3>
// <h3 class="user-stride">Stride:</h3>
// <h3 class="user-step-goal">Steps:</h3>
// <h3 class="user-friends">Friends:</h3>


// Create an info card on the dashboard with all of user’s info on the page--want it to display name, address, email, strideLength & stepgoal, friends

// Display their first name somewhere prominently on the page to welcome them

// For a specific user, display how their step goal compares to the average step goal amongst all users (this display should not be hard-coded)
