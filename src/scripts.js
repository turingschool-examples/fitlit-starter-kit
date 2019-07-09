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
//   const todaysDate = year + "/" + "0" + month + "/" + "0" + day;
  const today = "2019/07/10"


  $('.user-name').text(`${user.returnFirstName(randomUser)}`)
  $('#user-address').text(`Address: ${user.randomUser.address}`)
  $('#user-email').text(`Email: ${user.randomUser.email}`)
  $('#user-stride').text(`Your stride length is ${user.randomUser.strideLength}`)
  $('#user-stepGoal').text(`Your daily step goal is set to ${user.randomUser.dailyStepGoal} steps.`)
  $('#avg-stepGoal').text(`The average step goal among all users is ${users.averageGoalSteps()}.`)

  $('#daily-water').text(`Today you have consumed ${hydro.fluidOzsPerDay(randomIndex, today)} ounces of water.`)
  $('#weekly-water').text(`In the past week, you've consumed the following amounts of water per day ${hydro.userFluidsPerWeek(randomIndex, today)}.`)
  
//   $('#user-numSteps-today').text(`Today, you've walked ${}`)



})

