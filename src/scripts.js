const loadName = () => {
  let randomNum = Math.floor(Math.random() * userData.length + 1)
  let user = new User(userData[randomNum]);
  $('.user-name-span').text(`User ${user.returnFirstName()}`)
  loadInfo(user);
  loadHydrationData(user);
}

const loadInfo = (user) => {
  $('#user-email').append(` ${user.person.email}`)
  $('#user-address').append(` ${user.person.address}`)
  $('#user-step-goal').append(` ${user.person.dailyStepGoal} ${compareGoal(user.person.dailyStepGoal)}`)
  $('#user-stride-length').append(` ${user.person.strideLength}`)
}

const compareGoal = (goal) => {
  let userRepo = new UserRepository(userData);
  if (goal < userRepo.averageSteps()) {
    return `Your goal is lower than the average of your peers. Avg: ${userRepo.averageSteps()}`
  } else if (goal === userRepo.averageSteps()) {
    return `Your goal is in-line with the average of your peers. Avg: ${userRepo.averageSteps()}`
  } else {
    return ` Your goal is higher than the average of your peers. Avg: ${userRepo.averageSteps()}`
  }
}

const loadHydrationData = (user) => {
  let userHydration = new UserHydration(hydrationData);
  let dayData = userHydration.getOuncesByDay(user.person.id, moment().format('DD/MM/YYYY'));
  $('#ounces-drank').text(`you drank ${dayData} oz of water today`);
  weeklyHydrationData(user, userHydration);
}

const weeklyHydrationData = (user, userHydration) => {
  let weekData = userHydration.getWeeklyOunces(user.person.id, moment().format('DD/MM/YYYY'));
  let listedData = weekData.map(el => {
    return `<li>Date: ${el.date}</li><li>Ounces: ${el.numOunces}</li></br>`;
  });
  $('#ounces-weekly-card').append(`<ul id="ounces-weekly">${listedData.join(' ')}</ul>`)
}

loadName();