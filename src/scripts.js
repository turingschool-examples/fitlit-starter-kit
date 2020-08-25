console.log("Hello World");

const greeting = document.querySelector('.greeting');
const userCard = document.querySelector('.user-card');

window.addEventListener('load', displayUserData);

function displayUserData() {
  const user = new User(userData[33])
  const userRepo = new UserRepo(userData)
  const friendList = user.friends.map(friend => {
  const info = userRepo.searchUsersByID(friend)
    return info.name
  })

  const userName = document.querySelector('.user-name');
  const userAddress = document.querySelector('.user-address');
  const userStrideLength = document.querySelector('.user-stride-length');
  const userDailyStepGoal = document.querySelector('.user-daily-step-goal');
  const userFriends = document.querySelector('.user-friends');

  userName.innerText = user.name
  userAddress.innerText = user.address
  userStrideLength.innerText = user.strideLength
  userDailyStepGoal.innerText = user.dailyStepGoal
  userFriends.innerText = friendList
}



