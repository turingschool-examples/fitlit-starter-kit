console.log("Hello World");

const user = new User(userData[33])
const userRepo = new UserRepo(userData)

window.addEventListener('load', displayUserData);

function displayUserData() {
  const friendList = user.friends.map(friend => {
  const info = userRepo.searchUsersByID(friend)
    return info.name
  })

  const greeting = document.querySelector('.greeting');
  const userName = document.querySelector('.user-name');
  const userAddress = document.querySelector('.user-address');
  const userStrideLength = document.querySelector('.user-stride-length');
  const userDailyStepGoal = document.querySelector('.user-daily-step-goal');
  const userFriends = document.querySelector('.user-friends');
  const stepData = document.querySelector('.step-data');

  greeting.innerText = `Welcome ${user.getFirstName()}!`
  userName.innerText = user.name
  userAddress.innerText = user.address
  userStrideLength.innerText = user.strideLength
  userDailyStepGoal.innerText = user.dailyStepGoal
  userFriends.innerText = friendList
  stepData.innerText = `Your Step Goal: ${user.dailyStepGoal}, Average Step Goal: ${userRepo.calculateAverageStepGoals()}`
}



