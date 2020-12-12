const userMain = document.querySelector('.user-main')
const userProfile = document.querySelector('.user-profile')
const friends = document.querySelector('.friends')
const userStepGoal = document.querySelector('.user-step-goal')
const communityStepGoal = document.querySelector('.community-step-goal')
const water = document.querySelector('.water');
const waterStats = document.querySelector('.water-stats');
//since multiple classes will need these, global
let community = null
let user = null
let communityHydration = null;
let hydration = null;

window.addEventListener('load', loadPage)

//this could just be done on lines 5 and 6,
//but if we want to ever load from local storage...
const createCommunity = () => {
  community = new UserRepository(userData)
  user = community.users[0]
  communityHydration = new CommunityHydration(hydrationData)
  hydration = communityHydration.hydrations[0]
}

//GREETING:
//populates the greeting
//could be refactored to one line if stil readible
const greetUser = () => {
  const userFirstName = user.getFirstName()
  userMain.insertAdjacentHTML('afterbegin', `<h2>Welcome ${userFirstName}!</h2>`)
}

//USER DATA:
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

//ADD ALL-TIME SLEEP STATS:

//loads a display of the user's step goal
//also loads display of community step goal
const showStepGoalComparison = () => {
  userStepGoal.insertAdjacentHTML('beforeend', `<p>${user.dailyStepGoal}</p>`)
  communityStepGoal.insertAdjacentHTML('beforeend', `<p>${community.findAverageStepGoal()}</p>`)
}

//ADD TODAY's HYDRATION STATS:
const showHydrationStats = () => {
  waterStats.insertAdjacentHTML('beforeend',
  `<p class="water-stats">Water consumed today: ${communityHydration.calculateTotalWaterOnDay(hydration.userID, "2019/09/20")}</p>
  `)
}

//ADD WEEKLY HYDRATION STATS:

//ADD ACTIVITY STATS:

//ADD SLEEP STATS:

//GRAPH:

//FRIENDS:

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
  showHydrationStats()
  showFriends()
}
