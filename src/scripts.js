
// console.log(user)
// console.log(activityData)
// console.log(hydrationData)
// console.log(sleepData)
// console.log(userData)

let jsUserName = document.querySelector('.js_user-name');
let jsUserEmail = document.querySelector('.js_user-email');
let jsUserGoal = document.querySelector('.js_user-goal');
let jsStepsAverage = document.querySelector('.js_steps-average');


const startTracker = () => {
  let randomUserId = Math.floor(Math.random() * (userData.length - 1 + 1)) + 1;

  let user = userData.filter(player => player.id === randomUserId)
  let currentUser = user[0]
  let userRepo = new UserRepository(userData, activityData)
  jsUserName.innerText = currentUser.name
  jsUserEmail.innerText = currentUser.email
  jsUserGoal.innerText = `Daily step goal = ${currentUser.dailyStepGoal}`
  jsStepsAverage.innerText = userRepo.averageStepGoal()
}

const getUserById = () => {
	let repo = new UserRepository(userData)
  repo.locateUserById()
}


startTracker()

