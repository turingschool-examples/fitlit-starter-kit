const latestWeek = {
  // TODO requires minutes to hours method
  // TODO requires substantial formatting
  renderRows(rows, suffix, renderDate = true) {
    let dates = rows.dates;
    let metrics = rows.metrics;
    let htmlString = "";

    dates.forEach((date, i) => {
      let dateString = `${date
        .toString()
        .split(" ", 1)
        .join("")
        .charAt(0)}:`;

      htmlString += `
        <p class="latest-week__type"><span class="latest-week__type-date">${
          renderDate ? dateString : ""
        }</span> <span>${metrics[i]}${suffix}</span></p>`;
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
      <h2 class="latest-week__title-main">This Week</h2>
      <div class="latest-week__wrapper">
        <div class="latest-week__wrapper-hydration">
          <h2 class="latest-week__title">Hydration</h2>
          <div class="latest-week__content">
            <article class="latest-week__article latest-week__hydration">
              ${this.renderRows(hydrationOunces, "oz")}
            </article>
          </div>
        </div>
        <div class="latest-week__wrapper-sleep">
          <h2 class="latest-week__title">Sleep hours @ quality</h2>
          <div class="latest-week__content">
            <article class="latest-week__article latest-week__sleep">
              ${this.renderRows(sleepHours, "hrs")}
            </article>
            <article class="latest-week__article latest-week__sleep">
              ${this.renderRows(sleepQuality, "", false)}
            </article>
          </div>
        </div>
        <div class="latest-week__wrapper-activity">
          <h2 class="latest-week__title">Steps / flights / minutes active</h2>
            <div class="latest-week__content">
              <article class="latest-week__article latest-week__activity">
                ${this.renderRows(activitySteps, "")}
              </article>
              <article class="latest-week__article latest-week__activity">
                ${this.renderRows(activityFlights, "", false)}
              </article>
              <article class="latest-week__article latest-week__activity">
                ${this.renderRows(activityMinutes, "min", false)}
            </article>
          </div>
        </div>
      </div>
    `;
  }
};
