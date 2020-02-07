const latestWeek = {
  // TODO requires minutes to hours method
  // TODO requires substantial formatting
  renderRows(rows, suffix, renderDate = true) {
    let dates = rows.dates;
    let metrics = rows.metrics;
    let htmlString = "";

    dates.forEach((date, i) => {
      let dateString = `${date.toString().split(" ", 1)}:`;
      htmlString += `
        <p>${renderDate ? dateString : ""} ${metrics[i]}${suffix}</p>`;
    });

    return htmlString;
  },
  generateHtmlString(state) {
    const calculator = new Calculator(state.currentUser.id);
    const hydrationOunces = calculator.getUserWeekTotal(
      state.currentUserData.hydrationData,
      state.currentDay,
      "numOunces"
    );
    const sleepHours = calculator.getUserWeekTotal(
      state.currentUserData.sleepData,
      state.currentDay,
      "hoursSlept"
    );
    const sleepQuality = calculator.getUserWeekTotal(
      state.currentUserData.sleepData,
      state.currentDay,
      "sleepQuality"
    );
    const activitySteps = calculator.getUserWeekTotal(
      state.currentUserData.activityData,
      state.currentDay,
      "numSteps"
    );
    const activityMinutes = calculator.getUserWeekTotal(
      state.currentUserData.activityData,
      state.currentDay,
      "minutesActive"
    );
    const activityFlights = calculator.getUserWeekTotal(
      state.currentUserData.activityData,
      state.currentDay,
      "flightsOfStairs"
    );

    return `
      <h2>This Week</h2>
      <div class="latest-week__wrapper">
        <article class="latest-week__article latest-week__hydration">
          <h2>Water</h2>
          ${this.renderRows(hydrationOunces, "oz")}
        </article>
        <div class="latest-week__wrapper-sleep">
          <article class="latest-week__article latest-week__sleep">
            <h2>Hours</h2>
            ${this.renderRows(sleepHours, "hrs")}
          </article>
          <article class="latest-week__article latest-week__sleep">
            <h2>Quality</h2>
            ${this.renderRows(sleepQuality, "", false)}
          </article>
        </div>
        <div class="latest-week__wrapper-activity">
          <article class="latest-week__article latest-week__activity">
            <h2>Steps</h2>
              ${this.renderRows(activitySteps, "")}
          </article>
          <article class="latest-week__article latest-week__activity">
            <h2>Flights</h2>
              ${this.renderRows(activityFlights, "", false)}
          </article>
          <article class="latest-week__article latest-week__activity">
            <h2>Minutes</h2>
              ${this.renderRows(activityMinutes, "", false)}
          </article>
        </div>
      </div>
    `;
  }
};
