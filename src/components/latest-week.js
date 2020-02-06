const latestWeek = {
  generateHtmlString(userData) {
    // set container to flex with space between
    // three columns of flex column
    const calculator = new Calculator(state.currentUser.id);
    const hydrationData = calculator.getUserWeekTotal();

    return `
      <h2>This Week</h2>
      <div class="hydration-data-this-week">
        <p>Hydration Data</p>
      </div>
      <div class="sleep-data-this-week">
        <p>Sleep Data</p>
      </div>
      <div class="activity-data-this-week">
        <p>Activity Data</p>
      </div>
    `;
  }
};
