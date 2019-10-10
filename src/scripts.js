$(document).ready(function(){
let user;

$("#login-page-button").click(clickLoginButton);

function instantiateUserData(usersData) {
  let userEmail = $("#login-page-input").val();
  let userRepo = new UserRepo(usersData);
  let userInfo = userRepo.getUserData($("#login-page-input").val())
  user = new User(userInfo);
}

function clickLoginButton(event) {
  if (!$("#login-page-input").val()) {
    displayErrorMessage();
    event.preventDefault();
  } else {
    instantiateUserData(userData);
    displayUserPage();
    addUserFirstName();
  }
}

function displayErrorMessage() {
  if ($("#error-message").length === 0) {
    $("#login-page-input").after("<p id='error-message'>Please enter your email</p>");
  }
}

function addUserFirstName() {
  $('#aside-user-name').html(`${user.getFirstName()}`);
}

function displayUserPage() {
    $("#main-login-page").remove();
    $("body").html(`
  <div class="body-content-container">
    <header>
      <section class="header-style header-hydration-style">
        <h1>Hydration</h1>
      </section>
      <section class="header-style header-activity-style">
          <h1>Activity</h1>
      </section>
      <section class="header-style header-sleep-style">
          <h1>Sleep</h1>
      </section>
    </header>
    <aside>
      <div class="aside-fitlit-logo">
        <h1>Fit Lit</h1>
      </div>
      <div class="aside-user-name">
      <h2>GET LIT!</h2>
      <h2 id="aside-user-name"></h2>
      </div>
      <section class="aside-style">
        <h3 class="aside-user-info-header">User Info</h3>
        <div class="aside-user-info-div">
          <h4>Address</h4>
          <p class="aside-user-info-par">asdasfdasda</p>
        </div>
        <div class="aside-user-info-div">
          <h4>Email</h4>
          <p class="aside-user-info-par">yahoo@gmail.com</p>
        </div>
        <div class="aside-user-info-div">
          <h4>Stride Length</h4>
          <p class="aside-user-info-par">1.25ft</p>
        </div>
        <div class="aside-user-info-div">
          <h4>Daily Step Goal</h4>
          <p class="aside-user-info-par">1 million</p>
        </div>
        <div class="aside-user-info-div">
          <h4>Friends</h4>
          <p class="aside-user-info-par">friend 1, friend 2</p>
        </div>
        <button class="user-logout-button">Log Out</button>
      </section>
      <section class="aside-style">
        <h3 class="aside-step-goal-header">Your Step Goal</h3>
        <div class="aside-step-goal-style user-step-goal">350</div>
        <h3 class="aside-step-goal-header">Average Step Goal</h3>
        <div class="aside-step-goal-style">200</div>
      </section>
      <section class="aside-style">
        <h3>Trends</h3>
        <div class="aside-trend-div">Trend 1</div>
        <div class="aside-trend-div">Trend 2</div>
      </section>
    </aside>
    <main class="main-user-stats">
      <article class="card-style card-daily-oz">
        <h2>Have you been drinkin'?</h2>
      </article>
      <article class="card-style card-weekly-oz">
        <h2>Weekly Water Intake</h2>
        <section class="section-style">
          <h3>day one</h3>
          <p>oz consumed</p>
        </section>
        <section class="section-style">
            <h3>day two</h3>
            <p>oz consumed</p>
        </section>
        <section class="section-style">
            <h3>day three</h3>
            <p>oz consumed</p>
        </section>
        <section class="section-style">
            <h3>day four</h3>
            <p>oz consumed</p>
        </section>
        <section class="section-style">
            <h3>day five</h3>
            <p>oz consumed</p>
        </section>
        <section class="section-style">
            <h3>day six</h3>
            <p>oz consumed</p>
        </section>
        <section class="section-style">
            <h3>day seven</h3>
            <p>oz consumed</p>
        </section>
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
