
let randomId = Math.floor(Math.random() * 50 + 1)

let userRepository = new UserRepository(userData, randomId)
let user = new User(userRepository.getUserData())

let currentUser = userRepository.getUserData()

$(document).ready(() => {
 
$("#user-name__display").text(user.getFirstName())
$("#user-full-name__display").text(user.name)
$("#user-address__display").text(user.address)
$("#user-email__display").text(user.email)
$("#user-daily-step-goal__display").text(user.dailyStepGoal)
});