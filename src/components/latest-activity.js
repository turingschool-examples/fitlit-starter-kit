const latestActivity = {
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

    return `<h2>Latest Activity</h2>
              <div class="activity-data-today-1 widget-block red">
                <i class="fas fa-shoe-prints"></i>
                <p class="user-daily-steps-js">${userDailySteps}</p>
                <i class="fas fa-walking"></i>
                <p class="user-daily-active-time-js">${userActiveTime}</p>
              </div>
              <div class="light-red activity-data-today-2 widget-block">
                <i class="fas fa-ruler"></i>
                <p class="user-daily-miles">${userMiles}</p>
                <i class="far fa-building"></i>
                <p class="user-daily-floors-js">${userFloorsClimbed}</p>
              </div>
              <div class="sleep-data-today widget-block blue">
                <i class="fas fa-bed"></i>
                <p class="user-daily-sleep-js">${userSleep}</p>
                <i class="far fa-thumbs-up"></i>
                <p class="user-daily-sleep-quality-js">${userSleepQuality}</p>
                <i class="fas fa-mug-hot"></i>
                <p class="user-daily-hydration-js">${userHydration}oz</p>
              </div>
              <h2 class="middle-label">Your Daily Average</h2>
              <div class="activity-data-today-average-1 widget-block-small">
                <i class="fas fa-shoe-prints"></i>
                <p class="user-daily-steps-js">${userAllTimeSteps}</p>
                <i class="fas fa-walking"></i>
                <p class="average-daily-active-time-js">${userAllTimeActive}</p>
              </div>
              <div class="activity-data-today-average-2 widget-block-small">
                <i class="fas fa-ruler"></i>
                <p class="user-daily-miles-js">5.2m</p>
                <i class="far fa-building"></i>
                <p class="average-daily-floors-js">${userAllTimeFloorsClimbed}</p>
              </div>
              <div class="sleep-data-today-average widget-block-small">
                <i class="fas fa-bed"></i>
                <p class="user-daily-sleep-js">${overallSleep}</p>
                <i class="far fa-thumbs-up"></i>
                <p class="average-daily-sleep-quality-js">${overallSleepQuality}</p>
                <i class="fas fa-mug-hot"></i>
                <p class="average-daily-hydration-js">${overallHydration}oz</p>
              </div>`;
  }
};
