let userRepo = new UserRepository(userData)

const userName = document.querySelector('.user-name')
const userAddress = document.querySelector('.user-address')


function populateUserInfo(id) {
  let user = new User(userRepo.getUserData(id))
  userName.innerHTML = user.name;
  userAddress.innerHTML = user.address;
}

populateUserInfo(42)