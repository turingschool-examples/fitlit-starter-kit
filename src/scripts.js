$(document).ready(function(){
let user;
let userRepo;
let hydroUser;
let hydroRepo;
let sleepRepo;

$("#login-page-button").click(clickLoginButton);

function clickLoginButton(event) {
  if (!$("#login-page-input").val()) {
    displayErrorMessage();
    event.preventDefault();
  } else {
    instantiateUserData(userData);
    instantiateHydroData(hydrationData);
    instantiateSleepData(sleepData);
    displayUserPage();
    addUserFirstName();
    addUserInfo(user);
    addStepComparison(user, userRepo);
    addOzToday();
    addWeeklyOzByDay();
  }
}

function instantiateUserData(usersData) {
  let userEmail = $("#login-page-input").val();
  userRepo = new UserRepo(usersData);
  let userInfo = userRepo.getUserData($("#login-page-input").val())
  user = new User(userInfo);
}

function instantiateHydroData(data) {
  hydroRepo = new HydroRepo(data);
  let hydroUserInfo = hydroRepo.getUserHydroData(user.id);
  hydroUser = new HydroUser(hydroUserInfo);
}

function instantiateSleepData(data) {
  sleepRepo = new SleepRepo(data);
  sleepRepo.getGreatSleepersByweek("2019/08/05");
}

function displayErrorMessage() {
  if ($("#error-message").length === 0) {
    $("#login-page-input").after("<p id='error-message'>Please enter your email</p>");
  }
}

function addUserFirstName() {
  $('#aside-user-name').html(`${user.getFirstName()}`);
}

function addStepComparison(user, userRepo) {
  $("#aside-user-step-comparison").html(`
    <h3 class="aside-step-goal-header">Your Step Goal</h3>
    <div class="aside-step-goal-style user-step-goal">${user.dailyStepGoal}</div>
    <h3 class="aside-step-goal-header">Average Step Goal</h3>
    <div class="aside-step-goal-style">${userRepo.calcAvgStepGoal()}</div>`);
}

function addUserInfo(user) {
  let userProperties = Object.keys(user);
  userProperties.splice(0, 4);
  let orderedUserProperties = userProperties.reverse();
  orderedUserProperties.forEach(function(property, index) {
    $("#aside-user-info-header").after(`
      <div class="aside-user-info-div">
        <h4>${property}</h4>
        <p class="aside-user-info-par">${user[property]}</p>
      </div>`);
  });
}

function addOzToday() {
  $("#card-daily-oz-header").after(`
  <p class="card-daily-oz-paragraph">${hydroUser.getOzByDate("2019/06/22")}</p>`);
}

function addWeeklyOzByDay() {
 let weeklyUserOz =  hydroUser.getDailyOzPerWeek();
  weeklyUserOz.forEach(day => {
    $("#card-weekly-oz-header").after(`
    <section class="section-style">
      <h3>${day.date}</h3>
      <p>${day.numOunces}</p>
    </section>`);
  })

}

function displayUserPage() {
    $("#main-login-page").remove();
    $("body").html(`
  <div class="body-content-container">
    <header>
      <div class="aside-fitlit-logo">
        <h1>Fit Lit</h1>
      </div>
      <section class="header-section-categories">
        <h1 class="header-style header-hydration-style">Hydration</h1>
        <h1 class="header-style header-activity-style">Activity</h1>
        <h1 class="header-style header-sleep-style">Sleep</h1>
      </section>
    </header>
    <aside>
      <div class="aside-user-name">
      <h2>GET LIT!</h2>
      <h2 id="aside-user-name"></h2>
      </div>
      <section class="aside-style">
        <h3 class="aside-user-info-header" id="aside-user-info-header">User Info</h3>
        <button class="user-logout-button">Log Out</button>
      </section>
      <section class="aside-style" id="aside-user-step-comparison">
      </section>
      <section class="aside-style">
        <h3>Trends</h3>
        <div class="aside-trend-div">Trend 1</div>
        <div class="aside-trend-div">Trend 2</div>
      </section>
    </aside>
    <main class="main-user-stats">
      <article class="card-style card-daily-oz">
        <h2 id="card-daily-oz-header">Have you been drinkin'?</h2>
      </article>
      <article class="card-style card-weekly-oz">
        <h2 id="card-weekly-oz-header">Weekly Water Intake</h2>
      </article>
      <article class="card-style card-daily-activity">
        <h2>Today's Activity</h2>
        <section class="section-style">daily info compared to friends</section>
      </article>
      <article class="card-style card-weekly-activity">
        <h2>Previous Activity</h2>
        <section class="section-style">
          <h3>day one</h3>
          <div>steps</div>
          <div>flights</div>
          <div>mins</div>
        </section>
        <section class="section-style">
          <h3>day two</h3>
          <div>steps</div>
          <div>flights</div>
          <div>mins</div>
        </section>
        <section class="section-style">
          <h3>day three</h3>
          <div>steps</div>
          <div>flights</div>
          <div>mins</div>
        </section>
        <section class="section-style">
          <h3>day four</h3>
          <div>steps</div>
          <div>flights</div>
          <div>mins</div>
        </section>
        <section class="section-style">
          <h3>day five</h3>
          <div>steps</div>
          <div>flights</div>
          <div>mins</div>
        </section>
        <section class="section-style">
          <h3>day six</h3>
          <div>steps</div>
          <div>flights</div>
          <div>mins</div>
        </section>
        <section class="section-style">
          <h3>day seven</h3>
          <div>steps</div>
          <div>flights</div>
          <div>mins</div>
        </section>
      </article>
      <article class="card-style card-daily-sleep">
        <h2>Previous Night's Sleep Stats</h2>
        <section class="section-style">daily hours slept</section>
        <section class="section-style">daily quality of sleep</section>
      </article>
      <article class="card-style card-weekly-sleep">
        <h2>Seven Days of Sleep</h2>
        <section class="section-style">
          <h3>day one</h3>
          <div>hours slept</div>
          <div>quality of sleep</div>
        </section>
        <section class="section-style">
          <h3>day two</h3>
          <div>hours slept</div>
          <div>quality of sleep</div>
        </section>
        <section class="section-style">
          <h3>day three</h3>
          <div>hours slept</div>
          <div>quality of sleep</div>
        </section>
        <section class="section-style">
          <h3>day four</h3>
          <div>hours slept</div>
          <div>quality of sleep</div>
        </section>
        <section class="section-style">
          <h3>day five</h3>
          <div>hours slept</div>
          <div>quality of sleep</div>
        </section>
        <section class="section-style">
          <h3>day six</h3>
          <div>hours slept</div>
          <div>quality of sleep</div>
        </section>
        <section class="section-style">
          <h3>day seven</h3>
          <div>hours slept</div>
          <div>quality of sleep</div>
        </section>
      </article>
      <article class="card-style card-all-time-sleep">
        <h2>All Time Sleep Stats</h2>
        <section class="section-style">
        <h3>all time avg hours slept</h3>
        <div>stats here</div>
        </section>
        <section class="section-style">
          <h3>all time avg sleep quality</h3>
          <div>stats here</div>
        </section>
      </article>
    </main>
  </div>`)
}

});
