var greeting = document.querySelector('.greeting')
var users = document.querySelector('.users')
var hydration = document.querySelector('.hydration')
var sleep = document.querySelector('.sleep')
var activity = document.querySelector('.activity')

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
  users.innerHTML = `<section class="step-goal"> Step Goal </section>`
}


makeUser()
showInfoCard()
showFirstName()




// Create an info card on the dashboard with all of user’s info on the page
// Display their first name somewhere prominently on the page to welcome them
// For a specific user, display how their step goal compares to the average step
//  goal amongst all users (this display should not be hard-coded)
