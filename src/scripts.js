console.log("Hello World");

const uniqueUser = Math.floor(Math.random() * (50 - 1 + 1)) + 1;


const userRepo = new UserRepo();
const user = new User(uniqueUser);
const hydration = new Hydration();
const sleep = new Sleep();
const activity = new Activity();
const hydrationRepo = new HydrationRepo();
const sleepRepo = new SleepRepo();
const activityRepo = new ActivityRepo();

console.log('userRepo: ', userRepo);
console.log('user: ', user);
console.log('hydration: ', hydration);
console.log('sleep: ', sleep);
console.log('activity: ', activity);
console.log('hydrationRepo: ', hydrationRepo);
console.log('sleepRepo: ', sleepRepo);
console.log('activityRepo: ', activityRepo);

$('.nav__span--name').text(`${user.name}`)
$('.nav__span--address').text(`${user.address}`)
$('.nav__span--email').text(`${user.email}`)
$('.nav__span--stepgoal').text(`${user.dailyStepGoal}`)
$('.nav__span--comparison').text(`${user.dailyStepGoal}`)//this needs a function to call the average step goal for everyone






console.log(user.name)



