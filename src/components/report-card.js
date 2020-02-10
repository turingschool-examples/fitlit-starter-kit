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
    if(dS >= 12000){

    } else if(9000 <= dS < 12000) {

    } else if(6500 <= dS < 9000) {

    } else if(4000 <= dS < 6500) {

    } else if(dS < 4000) {

    }
  },

  calculateFlightsGrade: function() {
    let f = userFloorsClimbed;
    if(35 < f < 51){

    } else if(20 < f < 36) {

    } else if(7 < f < 21) {

    } else if(1 < f < 8) {

    } else if(f < 2) {

    }
  },

  calculateMinutesActiveGrade: function() {
    let mA = userActiveTime;
    if(mA > 200){

    } else if(130 < mA < 201) {

    } else if(80 < mA < 132) {

    } else if(45 < mA < 81) {

    } else if(mA < 46) {

    }
  },

  calculateSleepQualGrade: function() {
    let sQ = userSleepQuality;
    if(sQ >= 4 ){

    } else if(3 <= sQ <= 3.9) {

    } else if(2 <= sQ <= 2.9) {

    } else if(1.5 <= sQ <= 1.9) {

    } else if(1 <= sQ <= 1.4) {

    }
  },

  calculateSleepLengthGrade: function() {
    let sL = userSleep;
    if(sL >= 8 ){

    } else if( 7 <= sL < 8) {

    } else if(6 <= sL < 7) {

    } else if(5 <= sL < 6) {

    } else if(sL < 5) {

    }
  },

  calculateHydrationGrade: function() {
    let h = userHydration;
    if(h > 80){

    } else if(65 < h < 81) {

    } else if(50 < h < 66) {

    } else if(35 < h < 51) {

    } else if(h < 36) {

    }
  },
}
