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
  stepGoal.innerText = `Step Goal: ${user.person.dailyStepGoal}`
  strideLength.innerText = `Stride Length ${user.person.strideLength}`
}

loadName();