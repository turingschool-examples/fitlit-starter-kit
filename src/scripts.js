
// console.log(user)
// console.log(activityData)
// console.log(hydrationData)
// console.log(sleepData)
// console.log(userData)

let jsUserName = document.querySelector('.js_user-name');
let jsUserEmail = document.querySelector('.js_user-email');
let jsUserGoal = document.querySelector('.js_user-goal');


let user = new User(userData);


const startTracker = () => {
  let randomUserId = Math.floor(Math.random() * (userData.length - 1 + 1)) + 1;
    let currentUser = userData.filter(player => player.id === randomUserId)

    jsUserName.innerText = currentUser[0].name
    jsUserEmail.innerText = currentUser[0].email
    jsUserGoal.innerText = `Daily step goal = ${currentUser[0].dailyStepGoal}`

}


startTracker()

