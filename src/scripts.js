const userMain = document.querySelector('.userMain')
const userProfile = document.querySelector('.userProfile')
const friends = document.querySelector('.friends')

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

