const currentUser = new User(userData[0]);
const firstNameDisplay = document.querySelector('.first-name-section');
const fullNameDisplay = document.querySelector('.full-name');
const addressDisplay = document.querySelector('.address');
const emailDisplay = document.querySelector('.email');
const strideLengthDisplay = document.querySelector('.stride');
const dailyStepGoal = document.querySelector('.daily-step-goal');
const friendsList = document.querySelector('.friends');


// const displayUsersFirstName = () => {
//   firstNameDisplay.innerText = `Hello ${currentUser.provideUsersFirstName()}!`
// }

const displayAllUserData = () => {
  firstNameDisplay.innerText = `Hello ${currentUser.provideUsersFirstName()}!`
  fullNameDisplay.innerText += `${currentUser.name}`;
  addressDisplay.innerText += `${currentUser.address}`;
  emailDisplay.innerText += `${currentUser.email}`;
  strideLengthDisplay.innerText += `${currentUser.strideLength}`;
  dailyStepGoal.innerText += `${currentUser.dailyStepGoal}`;
  displayFriendsByName();
};

function displayFriendsByName() {
  currentUser.friends.forEach(id => {
  friendsList.innerText += ` ${userData[id - 1].name}. `;
  });
};
