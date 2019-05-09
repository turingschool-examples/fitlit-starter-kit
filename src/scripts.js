const userName = document.querySelector('.user-name-span');
const userEmail = document.querySelector('#user-email');
const userAddress = document.querySelector('#user-address');
const stepGoal = document.querySelector('#user-step-goal')
const strideLength = document.querySelector('#user-stride-length')

const loadName = () => {
  let randomNum = Math.floor(Math.random() * userData.length + 1)
  let user = new User(userData[randomNum]);
  userName.innerText =  `User ${user.person.name}`
  loadInfo(user)
}

const loadInfo = (user) => {
  userEmail.innerText = `Email: ${user.person.email}`
  userAddress.innerText = `Address: ${user.person.address}`
  stepGoal.innerText = `Step Goal: ${user.person.dailyStepGoal} ${compareGoal(user.person.dailyStepGoal)}`
  strideLength.innerText = `Stride Length ${user.person.strideLength}`
}

const compareGoal = (goal) => {
  let userRepo = new UserRepository(userData);
  if(goal < userRepo.averageSteps()){
    return `Your goal is lower than the average of your peers. Avg: ${userRepo.averageSteps()}`
  } else if(goal === userRepo.averageSteps()){
    return `Your goal is in-line with the average of your peers. Avg: ${userRepo.averageSteps()}`
  } else {
    return ` Your goal is higher than the average of your peers. Avg: ${userRepo.averageSteps()}`
  }
}


loadName();