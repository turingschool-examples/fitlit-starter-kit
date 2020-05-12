const greeting = document.querySelector('.greeting')
const users = document.querySelector('.users')
const hydration = document.querySelector('.hydration')
const sleep = document.querySelector('.sleep')
const activity = document.querySelector('.activity')
const stepGoal = document.querySelector('.step-goal')
var userRepo = new UserRepository(userData);



function makeUser() {
  let randomUser = Math.floor(Math.random() * userData.length)

  user = new User(userData[randomUser])

}

function showInfoCard() {
  users.innerHTML = `<p>User: ${user.name}</p>
                     <p>Address: ${user.address}</p>
                     <p>Email: ${user.email}</p>                     
                     <p>Stride Length: ${user.strideLength}</p>
                     <p>Daily Step Goal: ${user.dailyStepGoal}</p>
                     <p>Friends: ${user.userFriends}</p>
                     <p>ID: ${user.id}</p>
                     `;
}

function showFirstName() {
  greeting.innerHTML = `<p>Welcome ${user.getFirstName()}</p>`
}

function compareStepGoal() {
  let average = user.dailyStepGoal / userRepo.getAverageStepGoal()
  let averagePercent = (average * 100).toFixed(2)
  console.log(user.dailyStepGoal)
  stepGoal.innerHTML =
                      `<p>${user.getFirstName()}'s goal is  ${user.dailyStepGoal} steps per day, and the average is  ${userRepo.getAverageStepGoal()} steps per day.
                          ${user.getFirstName()}'s goal is ${averagePercent}% of the average
                      </p>`
}


makeUser()
showInfoCard()
showFirstName()
compareStepGoal()




// Create an info card on the dashboard with all of user’s info on the page
// Display their first name somewhere prominently on the page to welcome them
// For a specific user, display how their step goal compares to the average step
//  goal amongst all users (this display should not be hard-coded)
