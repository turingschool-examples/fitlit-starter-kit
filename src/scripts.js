const currentUserRepo = new UserRepo(userData);
const currentUser = new User(currentUserRepo.data[0]);
const currentHydrationRepo = new HydrationRepo(hydrationData);
const currentHydration = new Hydration(currentHydrationRepo.data[1700]);
const firstNameDisplay = document.querySelector('.first-name-section');
const fullNameDisplay = document.querySelector('.full-name');
const addressDisplay = document.querySelector('.address');
const emailDisplay = document.querySelector('.email');
const strideLengthDisplay = document.querySelector('.stride');
const dailyStepGoal = document.querySelector('.daily-step-goal');
const friendsList = document.querySelector('.friends');
const averageStepGoal = document.querySelector('.average-step-goal');
const waterConsumed = document.querySelector('.water-consumed');
const hydrationHeading = document.querySelector('.hydration-data');
const hydrationDay = document.querySelector('.hydration-day');
const hydrationWeek = document.querySelector('.hydration-week');

hydrationWeek.addEventListener('click', hydrationWeekView(currentUser.id, currentHydration.date));
hydrationDay.addEventListener('click', hydrationDayView());

function hydrationWeekView(id, date) {
  waterConsumed.innerText = `Water Consumed this past week: ${currentHydrationRepo.returnWaterConsumed(id, date)}`;
}

function hydrationDayView() {
  waterConsumed.innerText = `Water Consumed Today -     ${currentHydration.numOunces} ounces!`;
}

const displayAllUserData = () => {
  firstNameDisplay.innerText = `Hello ${currentUser.provideUsersFirstName()}!`
  fullNameDisplay.innerText += `${currentUser.name}`;
  addressDisplay.innerText += `${currentUser.address}`;
  emailDisplay.innerText += `${currentUser.email}`;
  strideLengthDisplay.innerText += `${currentUser.strideLength}`;
  dailyStepGoal.innerText += `${currentUser.dailyStepGoal}`;
  averageStepGoal.innerText += `        ${currentUserRepo.userStepGoalAverage()}.`;
  waterConsumed.innerText = `Water Consumed Today -   ${currentHydration.numOunces} ounces!`;
  displayFriendsByName();
};

function displayFriendsByName() {
  currentUser.friends.forEach(id => {
  friendsList.innerText += ` ${userData[id - 1].name}. `;
  });
};
