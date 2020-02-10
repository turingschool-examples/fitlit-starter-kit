const reportCard = {
  generateHtmlString(state) {
    const calculator = new Calculator(state.currentUser.id);
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

    const dailyGrades = this.getGrades();

    return `<h2>Report Card: </h2>
            <h2>Your Daily Average</h2>
            <section>
              <div class="steps"><i class="fas fa-shoe-prints"></i>&nbsp;&nbsp;${userDailySteps}</div>
              <div class="flights"><i class="far fa-building"></i>&nbsp;&nbsp;${userFloorsClimbed}</div>
              <div class="minutes-active"><i class="fas fa-walking"></i>&nbsp;&nbsp;${userActiveTime}</div>
              <div class="sleep-quality"><i class="far fa-thumbs-up"></i>&nbsp;&nbsp;${userSleepQuality}</div>
              <div class="sleep-time"><i class="fas fa-bed"></i>&nbsp;&nbsp;${userSleep}</div>
              <div class="ounces-water"><i class="fas fa-mug-hot"></i>&nbsp;&nbsp;${userHydration}</div>
            </section>`;

  },
  getGrades: function() {
    let grades = [];
    grades.push(this.calculateStepsGrade(),
                this.calculateFlightsGrade(),
                this.calculateMinutesActiveGrade(),
                this.calculateSleepQualGrade(),
                this.calculateSleepLengthGrade(),
                this.calculateHydrationGrade());
    return grades;
  },

  calculateStepsGrade: function() {
    let dS = userDailySteps;
    if(dS >= ){

    } if else() {

    } if else() {

    } if else() {

    } if else() {

    }
  },

  calculateFlightsGrade: function() {
    let dS = userDailySteps;
    if(dS >= ){

    } if else() {

    } if else() {

    } if else() {

    } if else() {

    }
  },

  calculateMinutesActiveGrade: function() {
    let dS = userDailySteps;
    if(dS >= ){

    } if else() {

    } if else() {

    } if else() {

    } if else() {

    }
  },

  calculateSleepQualGrade: function() {
    let dS = userDailySteps;
    if(dS >= ){

    } if else() {

    } if else() {

    } if else() {

    } if else() {

    }
  },

  calculateSleepLengthGrade: function() {
    let dS = userDailySteps;
    if(dS >= ){

    } if else() {

    } if else() {

    } if else() {

    } if else() {

    }
  },

  calculateHydrationGrade: function() {
    let dS = userDailySteps;
    if(dS >= ){

    } if else() {

    } if else() {

    } if else() {

    } if else() {

    }
  },
}
