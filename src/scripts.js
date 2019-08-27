const allUsers = new UserRepository(userData);
let person = allUsers.getUser(getRandomNumber());
let user = new User(person);
const allUsersHydration = new Hydration(hydrationData, person);
let hydration = new Hydration(allUsersHydration, person)

$('.header__span').text(user.returnFirstName());
$("#step-goal").append(user.dailyStepGoal);
$('#avg-steps').append(allUsers.returnAvgStepGoal());
$('#water-consumption').append(hydration.getDailyOz('2019/06/20'));

function getRandomNumber() {
  min = Math.ceil(1);
  max = Math.floor(50);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
