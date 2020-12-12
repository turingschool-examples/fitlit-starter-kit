const userMain = document.querySelector('.userMain')
const userProfile = document.querySelector('.userProfile')
const friends = document.querySelector('.friends')
const userStepGoal = document.querySelector('.userStepGoal')
const communityStepGoal = document.querySelector('.communityStepGoal')
const waterDisplay = document.querySelector('.water');
//since multiple classes will need these, global
let community = null
let user = null

window.addEventListener('load', loadPage)

//this could just be done on lines 5 and 6,
//but if we want to ever load from local storage...
const createCommunity = () => {
  community = new UserRepository(userData)
  user = community.users[0]
}

//populates the greeting
//could be refactored to one line if stil readible
const greetUser = () => {
  const userFirstName = user.getFirstName()
  userMain.insertAdjacentHTML('afterbegin', `<h2>Welcome ${userFirstName}!</h2>`)
}

//sets up the user userProfile
//we could make some of this hidden unless clicked?
//could also add a picture <img src=...> ?
const showProfile = () => {
  userProfile.insertAdjacentHTML('beforeend', `Name: ${user.name}<br>
  Address: ${user.address}<br>
  Email: ${user.email}<br>
  Stride Length: ${user.strideLength} ft<br>
  FitFriends: ${user.friends.length}
  `)
}

//loads a display of the user's step goal
//also loads display of community step goal
const showStepGoalComparison = () => {
  userStepGoal.insertAdjacentHTML('beforeend', `<p>${user.dailyStepGoal}</p>`)
  communityStepGoal.insertAdjacentHTML('beforeend', `<p>${community.findAverageStepGoal()}</p>`)
}

//displays userFriends by first name, could also add images?
const showFriends = () => {
  const friendDisplay = user.friends.map(friend => {
    const friendName = community.getUserData(friend).getFirstName()
    return `<div>${friendName}</div>`
  })

  friends.innerHTML += friendDisplay.join(' ')
}

//we can add other calls to this onlaod function
function loadPage() {
  createCommunity()
  greetUser()
  showProfile()
  showStepGoalComparison()
  showFriends()
}
