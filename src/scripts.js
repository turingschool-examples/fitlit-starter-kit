const userName = document.querySelector('.user-name-span');
const userEmail = document.querySelector('#user-email');
const userAddress = document.querySelector('#user-address');
const stepGoal = document.querySelector('#user-step-goal')
const strideLength = document.querySelector('#user-stride-length')
const ouncesDrankToday = document.querySelector('#ounces-drank');
const ouncesThisWeek = document.querySelector('#ounces-weekly-card');

const loadName = () => {
  let randomNum = Math.floor(Math.random() * userData.length + 1)
  let user = new User(userData[randomNum]);
  userName.innerText = `User ${user.returnFirstName()}`
  loadInfo(user);
  loadHydrationData(user);
}

const loadInfo = (user) => {
  userEmail.innerText = `Email: ${user.person.email}`
  userAddress.innerText = `Address: ${user.person.address}`
  stepGoal.innerText = `Step Goal: ${user.person.dailyStepGoal} ${compareGoal(user.person.dailyStepGoal)}`
  strideLength.innerText = `Stride Length ${user.person.strideLength}`
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
  let dayData = userHydration.getOuncesByDay(user.person.id, "12/05/2019");
  ouncesDrankToday.innerText = `you drank ${dayData} oz of water today`;
  loadWeeklyData(user, userHydration);
}

const loadWeeklyData = (user, userHydration) => {
  let weekData = userHydration.getWeeklyOunces(user.person.id, "12/05/2019");
  let listedData = weekData.map(el => {
    return `<li>Date: ${el.date}</li><li>Ounces: ${el.numOunces}</li></br>`;
  });
  ouncesThisWeek.innerHTML = `<ul id="ounces-weekly">${listedData.join(' ')}</ul>`;
  console.log(weekData)
}

loadName();