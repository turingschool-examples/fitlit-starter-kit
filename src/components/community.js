const community = {
  generateHtmlString(id, state) {
    const calculator = new Calculator(id);
    const userDailySteps = calculator.getUserDayTotal(
      state.currentUserData.activityData,
      state.currentDay,
      "numSteps"
    );
    const userActiveTime = calculator.getUserDayTotal(
      state.currentUserData.activityData,
      state.currentDay,
      "minutesActive"
    );
    const userMiles = calculator.stepsToMiles(state, state.currentDay);
    const userFloorsClimbed = calculator.getUserDayTotal(
      state.currentUserData.activityData,
      state.currentDay,
      "flightsOfStairs"
    );

    const userSleep = calculator.getUserDayTotal(
      state.currentUserData.sleepData,
      state.currentDay,
      "hoursSlept"
    );
    const userSleepQuality = calculator.getUserDayTotal(
      state.currentUserData.sleepData,
      state.currentDay,
      "sleepQuality"
    );

    const userHydration = calculator.getUserDayTotal(
      state.currentUserData.hydrationData,
      state.currentDay,
      "numOunces"
    );

    const userAllTimeSteps = calculator.getUserAllTimeAvg(
      state.currentUserData.activityData,
      "numSteps"
    );
    const userAllTimeActive = calculator.getUserAllTimeAvg(
      state.currentUserData.activityData,
      "minutesActive"
    );
    const userAllTimeMiles = calculator.stepsToMiles(state, state.currentDay);
    const userAllTimeFloorsClimbed = calculator.getUserAllTimeAvg(
      state.currentUserData.activityData,
      "flightsOfStairs"
    );

    const overallSleep = calculator.getUserAllTimeAvg(
      state.currentUserData.sleepData,
      "hoursSlept"
    );
    const overallSleepQuality = calculator.getUserAllTimeAvg(
      state.currentUserData.sleepData,
      "sleepQuality"
    );

    const overallHydration = calculator.getUserAllTimeAvg(
      state.currentUserData.hydrationData,
      "numOunces"
    );

    return `<h2 class="community-label">Community Daily Average</h2>
    <div class="widget-block-small red">
      <i class="fas fa-shoe-prints"></i>
      <p class="overall-steps-average-js">10.5K</p>
    </div>
    <br>
    <div class="widget-block-small red">
      <i class="fas fa-walking"></i>
      <p class="overall-active-time-js">10.5K</p>
    </div>
    <br>
    <div class="widget-block-small light-red">
      <i class="fas fa-ruler"></i>
      <p class="user-daily-miles-js">5.2m</p>
    </div>
    <br>
    <div class="widget-block-small light-red">
      <i class="far fa-building"></i>
      <p class="average-daily-floors-js">2</p>
    </div>
    <br>
    <div class="widget-block-small blue">
      <i class="fas fa-bed"></i>
      <p class="overall-sleep-js">8.2hrs</p>
      <i class="far fa-thumbs-up"></i>
      <p class="overall-sleep-quality-js">3</p>
    </div>
    <br>
    <div class="widget-block-small yellow">
      <i class="fas fa-mug-hot"></i>
      <p class="overall-hydration-js">55oz</p>
    </div>`;
  }
};


// <h2 class="middle-label">Community Daily Average</h2>
// <div class="sleep-data-community-average widget-block-small">
//   <i class="fas fa-bed"></i>
//   <p class="overall-sleep-js">8.2hrs</p>
//   <i class="far fa-thumbs-up"></i>
//   <p class="overall-sleep-quality-js">3</p>
//   <i class="fas fa-mug-hot"></i>
//   <p class="overall-hydration-js">55oz</p>
// </div>
//
// <div class="sleep-data-today-average widget-block-small">
//   <i class="fas fa-bed"></i>
//   <p class="user-daily-sleep-js">${overallSleep}</p>
//   <i class="far fa-thumbs-up"></i>
//   <p class="average-daily-sleep-quality-js">${overallSleepQuality}</p>
//   <i class="fas fa-mug-hot"></i>
//   <p class="average-daily-hydration-js">${overallHydration}oz</p>
// </div>
