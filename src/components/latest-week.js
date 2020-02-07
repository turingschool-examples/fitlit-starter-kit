const latestWeek = {
  generateHtmlString(state) {
    const calculator = new Calculator(state.currentUser.id);
    const hydrationOunces = calculator.getUserWeekTotal(
      state.currentUserData.hydrationData,
      state.currentDay,
      "numOunces"
    );
    const sleepHours = calculator.getUserWeekTotal(
      state.currentUserData.hydrationData,
      state.currentDay,
      "hoursSlept"
    );
    const sleepQuality = calculator.getUserWeekTotal(
      state.currentUserData.hydrationData,
      state.currentDay,
      "numOunces"
    );
    const activitySteps = calculator.getUserWeekTotal(
      state.currentUserData.hydrationData,
      state.currentDay,
      "numSteps"
    );
    const activityMinutes = calculator.getUserWeekTotal(
      state.currentUserData.hydrationData,
      state.currentDay,
      "minutesActive"
    );
    const activityFlights = calculator.getUserWeekTotal(
      state.currentUserData.hydrationData,
      state.currentDay,
      "flightsOfStairs"
    );

    // set container to flex with space between
    // three columns of flex column
    return `
      <h2>This Week</h2>
<div class="latest-week-">
<article class="hydration-data-this-week">
<p>Hydration Data</p>
</article>
<article class="sleep-data-this-week">
<p>Sleep Data</p>
</article>
<article class="activity-data-this-week">
<p>Activity Data</p>
</article>
</div>
    `;
  }
};
