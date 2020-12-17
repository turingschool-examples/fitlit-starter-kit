const currentUserRepo = new UserRepo(userData);
const currentUser = new User(currentUserRepo.data[0]);
const currentHydrationRepo = new HydrationRepo(hydrationData);
const currentHydration = new Hydration(currentHydrationRepo.data[currentUser.id - 1]);
const firstNameDisplay = document.querySelector('.first-name-section');
const fullNameDisplay = document.querySelector('.full-name');
const addressDisplay = document.querySelector('.address');
const emailDisplay = document.querySelector('.email');
const strideLengthDisplay = document.querySelector('.stride');
const dailyStepGoal = document.querySelector('.daily-step-goal');
const friendsList = document.querySelector('.friends');
const averageStepGoal = document.querySelector('.average-step-goal');
const waterConsumed = document.querySelector('.water-consumed');


const displayAllUserData = () => {
  firstNameDisplay.innerText = `Hello ${currentUser.provideUsersFirstName()}!`
  fullNameDisplay.innerText += `${currentUser.name}`;
  addressDisplay.innerText += `${currentUser.address}`;
  emailDisplay.innerText += `${currentUser.email}`;
  strideLengthDisplay.innerText += `${currentUser.strideLength}`;
  dailyStepGoal.innerText += `${currentUser.dailyStepGoal}`;
  averageStepGoal.innerText += `        ${currentUserRepo.userStepGoalAverage()}.`;
  waterConsumed.innerText = `Water Consumed Today:     ${currentHydration.numOunces} ounces!`;
  displayFriendsByName();
};

function displayFriendsByName() {
  currentUser.friends.forEach(id => {
  friendsList.innerText += ` ${userData[id - 1].name}. `;
  });
};
