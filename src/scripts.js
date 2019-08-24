console.log("Hello World");
$(document).ready(() => {
    
  const today = dateToday();
  const todayString = dateTodayString();
  const idRandom = Math.ceil(Math.random() * 50 - 1);
  const userRepository = new UserRepository(userData);
  const userDataArray = userRepository.fetchUserData(idRandom);
  const currentUser = new User(userDataArray);
  const hydration = new Hydration(hydrationData, currentUser.id);
  hydration.findCurrentUserData();
  

  const $profileInfoSection = $('.profile-info');
  const $sleepinfo = $('.sleep-info');
  const $hydrationInfo = $('.hydration-info');
  const $activityInfo = $('.activity-info');

  $('.today').text(dateToday());

  $('.profile-first-name').text(currentUser.findUserFirstName());
  $('.profile-name').text(currentUser.name);
  $('.profile-address').text(currentUser.address);
  $('.profile-email').text(currentUser.email);
  $('.profile-stride-length').text(currentUser.strideLength);
  $('.profile-daily-step-goal').text(currentUser.dailyStepGoal);
  $('.avg-step-goal-of-all-users').text(userRepository.findAverageStepGoalOfAllUsers());

  $('.water-consumed-today').text(hydration.findAverageFluidOzConsumedforSpecificDay(todayString));
//   $('.default-display').text(displayThisWeeksHydration());


})


const dateToday = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; 
    // console.log(new Intl.DateTimeFormat('en-US', mm).format(today));
    const yyyy = today.getFullYear();
    if (dd<10) {
        dd=`0${dd}`;
    } 
    if (mm<10) {
        mm=`0${mm}`;
    } 
// today = `${yyyy}/${mm}/${dd}`;
today = `${mm}/${dd}/${yyyy}`;
// console.log(today);
return today;
}

const dateTodayString = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; 
    const yyyy = today.getFullYear();
    if (dd<10) {
        dd=`0${dd}`;
    } 
    if (mm<10) {
        mm=`0${mm}`;
    } 
today = `${yyyy}/${mm}/${dd}`;
return today;
}

const startTodayString = () => {
    let today = new Date();
    let dd = today.getDate(); - 7;
    let mm = today.getMonth() + 1; 
    const yyyy = today.getFullYear();
    if (dd<10) {
        dd=`0${dd}`;
    } 
    if (mm<10) {
        mm=`0${mm}`;
    } 
today = `${yyyy}/${mm}/${dd}`;
return today;
}

const displayThisWeeksHydration = () => {
    let endDate = dateTodayString();
    let startDate = startTodayString();
    console.log("YO", startDate);
    console.log("Hydration:", hydration)
    let weekArray = hydration.findFluidOzConsumedEveryDayOverSpecificWeek(startDate, endDate);
    // console.log("week", weekArray)
    weekArray.forEach((day) => {
        // '<li> `On ${day.date} you drank ${day.numOunces}` </li>'
        $('.default-display').append(`<li> On ${day.date} you drank ${day.numOunces} </li>`)
    })
    
}

displayThisWeeksHydration();