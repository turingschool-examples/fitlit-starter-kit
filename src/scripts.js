$(document).ready(function() {
  const randomIndex = Math.floor(Math.random() * (userData.length - 1) + 1)       
  const randomUser = userData.find(user => user.id === randomIndex)
  const user = new User(randomUser);
  const users = new UserRepo(userData);
  const hydro = new Hydration(hydrationData);
  const sleep = new Sleep(sleepData);
  const activity = new Activity(activityData);
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const day = new Date().getDate()
  const todaysDate = year + "/" + month + "/" + day
  $('.user-name').text(`${user.returnFirstName(randomUser)}`)
  $('#user-address').text(`Address: ${user.randomUser.address}`)
  $('#user-email').text(`Email: ${user.randomUser.email}`)
  $('#user-stats').text(`Daily Step Goal: ${user.randomUser.dailyStepGoal}, Stride Length: ${user.randomUser.strideLength}`)
  $('#user-stepGoal').text(`Your daily step goal is set to ${user.randomUser.dailyStepGoal} steps.`)
  $('#avg-stepGoal').text(`The average step goal among all users is ${users.averageGoalSteps()}.`)

  $('#')

})

