let welcomeDisplay = document.querySelector('.display-name');
let userFullName = document.querySelector('.full-name');
let userAddress = document.querySelector('.address');
let userEmail = document.querySelector('.email');
let userStrideLength = document.querySelector('.stride-length');
let userStepGoal = document.querySelector('.daily-step-goal');
let allUsersAvgStepGoal = document.querySelector('.all-users-step-goal-average');
let userAverageOunceIntakeAllTime = document.querySelector('.average-fluid-ounces-all-time');
let currentUserDate = document.querySelector('.current-date');
let userOunceIntakeOnDay = document.querySelector('.fluid-ounces-consumed-on-day');
let userWeeklyOunceIntake = document.querySelector('.fluid-ounces-one-week');
let totalStepsOfCurrentDay = document.querySelector('.total-steps-current-day');
let minutesActiveOfCurrentDay = document.querySelector('.minutes-active-current-day');
let milesWalkedOfCurrentDay = document.querySelector('.miles-walked-current-day');


window.onload = function() {
  const usersRepository = new UsersRepository(getRandomNumber());
  const userInfo = usersRepository.getUserDataById(userData);
  const user = new User(userInfo);
  const hydration = new Hydration(usersRepository);
  const activity = new Activity(usersRepository);
  const userDateRange = ["2019/06/16","2019/06/17","2019/06/18","2019/06/19","2019/06/20","2019/06/21","2019/06/22"];
  const currentDate = '2019/06/22';

  welcomeDisplay.innerText = `Welcome, ${user.returnUserFirstName()}`;
  userFullName.innerText = `Full Name: ${user.name}`;
  userAddress.innerText = `Address: ${user.address}`;
  userEmail.innerText = `Email: ${user.email}`;
  userStrideLength.innerText = `Stride Length: ${user.strideLength}`;
  userStepGoal.innerText = `Your Daily Step Goal: ${user.dailyStepGoal}`;
  allUsersAvgStepGoal.innerText = `Average User's Step Goal: ${usersRepository.calculateAverageStepGoal(userData)}`;
  userAverageOunceIntakeAllTime.innerText = `Average Fluid Ounce Intake: ${hydration.calculateAverageFluidIntakeForUser(hydrationData)}`;
  currentUserDate.innerText = `Today's Date: ${currentDate}`;
  userOunceIntakeOnDay.innerText = `Today's Fluid Intake: ${hydration.calculateFluidIntakeForDay(hydrationData, currentDate)}`;

  let userIntakeForWeek = hydration.calculateDailyIntakeForWeek(hydrationData, userDateRange);
  userWeeklyOunceIntake.innerHTML = hydrationWeek(userIntakeForWeek);

  // activity section
  let currentUserActivityData = activity.findUserActivityDataByDate(currentDate, activityData);
  totalStepsOfCurrentDay.innerText = currentUserActivityData.numSteps;
  minutesActiveOfCurrentDay.innerText = activity.findMinutesActiveByDay(currentDate, activityData);
  milesWalkedOfCurrentDay.innerText = activity.findMilesWalkedByDay(userInfo, currentDate, activityData);
}

function hydrationWeek(userWeekIntake) {
  return userWeekIntake.reduce((acc, el) => {
    acc += `<div>Date: ${el.date}</div>
            <div>Intake: ${el.intake}</div>`
    return acc;
  }, ``)
}

function getRandomNumber() {
 randomNumber = Math.floor(Math.random() * (50 - 1) + 1);
 return randomNumber;
}
