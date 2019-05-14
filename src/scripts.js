const loadName = () => {
  let randomNum = Math.floor(Math.random() * userData.length + 1)
  let user = new User(userData[randomNum]);
  $('.user-name-span').text(`User ${user.returnFirstName()}`)
  loadInfo(user);
  loadHydrationData(user);
  loadSleepInfo(user);
}

const loadInfo = (user) => {
  $('#user-email').append(` ${user.person.email}`)
  $('#user-address').append(` ${user.person.address}`)
  $('#user-step-goal').append(` ${user.person.dailyStepGoal} </br> ${compareGoal(user.person.dailyStepGoal)}`)
  $('#user-stride-length').append(` ${user.person.strideLength}`)
}

const compareGoal = (goal) => {
  let userRepo = new UserRepository(userData);
  if (goal < userRepo.averageSteps()) {
    return `Avg: ${userRepo.averageSteps()} </br> Your goal is lower than the average.`
  } else if (goal === userRepo.averageSteps()) {
    return `Avg: ${userRepo.averageSteps()} </br> Your goal is in-line with the average.`
  } else {
    return `Avg: ${userRepo.averageSteps()} </br> Your goal is higher than the average.`
  }
}

const loadHydrationData = (user) => {
  let userHydration = new UserHydration(hydrationData);
  let dayData = userHydration.getOuncesByDay(user.person.id, moment().format('DD/MM/YYYY'));
  $('#ounces-drank').text(`${dayData}oz`);
  weeklyHydrationData(user, userHydration);
}

const weeklyHydrationData = (user, userHydration) => {
  let weekData = userHydration.getWeeklyOunces(user.person.id, moment().format('DD/MM/YYYY'));
  let listedData = weekData.map(el => {
    return `<tr><td>${el.date}</td><td>${el.numOunces}</td>`;
  });
  $('#hydration-table-data').append(`${listedData.join(' ')}`)
}

const loadSleepInfo = (user) => {
  let info = sleepData.filter((el) => {return el.userID === user.person.id})[0]
  let sleep = new Sleep(user, info)
  $('#todays-hours-slept').append(` ${sleep.hoursSlept(moment().format('DD/MM/YYYY'))}`)
  $('#avg-hours-slept').append(` ${sleep.avgHoursSlept()}`)
  weeklyHrsSlept(sleep)
}

const weeklyHrsSlept = (sleep) => {
  let weekData = sleep.weekSleep(moment().format('DD/MM/YYYY'))
  let listedData = weekData.map(el => {
    return `<tr><td>${el.date}</td><td>${el.hoursSlept}</td>`
  })
  $('#weekly-sleep-info').append(` ${listedData.join(' ')}`)
  weeklySleepQual(sleep)
  // $('#weekly-sleep-qual').append(`${sleep.weekQuality(moment().format('DD/MM/YYYY'))} </br>` )
}

const weeklySleepQual = (sleep) => {
  let weekData = sleep.weekSleep(moment().format('DD/MM/YYYY'))
  let listedData = weekData.map(el => {
    return `<tr><td>${el.date}</td><td>${el.sleepQuality}</td>`
  })
  $('#weekly-sleep-qual').append(` ${listedData.join(' ')}`)
}


loadName();