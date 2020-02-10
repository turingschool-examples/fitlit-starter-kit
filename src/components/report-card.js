const reportCard = {
  generateHtmlString(state) {
    const aScore = {grade: "A", score: 5};
    const bScore = {grade: "B", score: 4};
    const cScore = {grade: "C", score: 3};
    const dScore = {grade: "D", score: 2};
    const fScore = {grade: "F", score: 1};

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

    const dailyGrades = getGrades();
    dailyGrades.overallGrade = calculateOverallGrade()

    return `<h2>Report Card: ${dailyGrades.overallGrade}</h2>
            <h2>Your Daily Average</h2>
            <section>
              <div class="steps"><i class="fas fa-shoe-prints"></i>&nbsp;&nbsp;${userDailySteps}&nbsp;&nbsp;${dailyGrades.stepsGrade.grade}</div>
              <div class="flights"><i class="far fa-building"></i>&nbsp;&nbsp;${userFloorsClimbed}&nbsp;&nbsp;${dailyGrades.flightsGrade.grade}</div>
              <div class="minutes-active"><i class="fas fa-walking"></i>&nbsp;&nbsp;${userActiveTime}&nbsp;&nbsp;${dailyGrades.minutesActiveGrade.grade}</div>
              <div class="sleep-quality"><i class="far fa-thumbs-up"></i>&nbsp;&nbsp;${userSleepQuality}&nbsp;&nbsp;${dailyGrades.sleepQualGrade.grade}</div>
              <div class="sleep-time"><i class="fas fa-bed"></i>&nbsp;&nbsp;${userSleep}&nbsp;&nbsp;${dailyGrades.sleepLengthGrade.grade}</div>
              <div class="ounces-water"><i class="fas fa-mug-hot"></i>&nbsp;&nbsp;${userHydration}&nbsp;&nbsp;${dailyGrades.hydrationGrade.grade}</div>
            </section>`;

    function getGrades() {
      let grades = {
        stepsGrade: calculateStepsGrade(),
        flightsGrade: calculateFlightsGrade(),
        minutesActiveGrade: calculateMinutesActiveGrade(),
        sleepQualGrade: calculateSleepQualGrade(),
        sleepLengthGrade: calculateSleepLengthGrade(),
        hydrationGrade: calculateHydrationGrade(),
      };
      return grades;
    };

    function calculateStepsGrade() {
      let dS = userDailySteps;
      if(dS >= 12000){
        return aScore;
      } else if(9000 <= dS && dS < 12000) {
        return bScore;
      } else if(6500 <= dS && dS < 9000) {
        return cScore;
      } else if(4000 <= dS && dS < 6500) {
        return dScore;
      } else if(dS < 4000) {
        return fScore;
      }
    };

    function calculateFlightsGrade() {
      let f = userFloorsClimbed;
      if(35 < f && f < 51){
        return aScore;
      } else if(20 < f && f < 36) {
        return bScore;
      } else if(7 < f && f < 21) {
        return cScore;
      } else if(1 < f && f < 8) {
        return dScore;
      } else if(f < 2) {
        return fScore;
      }
    };

    function calculateMinutesActiveGrade() {
      let mA = userActiveTime;
      if(mA > 200){
        return aScore;
      } else if(130 < mA && mA < 201) {
        return bScore;
      } else if(80 < mA && mA < 132) {
        return cScore;
      } else if(45 < mA && mA < 81) {
        return dScore;
      } else if(mA < 46) {
        return fScore;
      }
    };

    function calculateSleepQualGrade() {
      let sQ = userSleepQuality;
      if(sQ >= 4 ){
        return aScore;
      } else if(3 <= sQ && sQ <= 3.9) {
        return bScore;
      } else if(2 <= sQ && sQ <= 2.9) {
        return cScore;
      } else if(1.5 <= sQ && sQ <= 1.9) {
        return dScore;
      } else if(1 <= sQ && sQ <= 1.4) {
        return fScore;
      }
    };

    function calculateSleepLengthGrade() {
      let sL = userSleep;
      if(sL >= 8 ){
        return aScore;
      } else if( 7 <= sL && sL < 8) {
        return bScore;
      } else if(6 <= sL && sL < 7) {
        return cScore;
      } else if(5 <= sL && sL < 6) {
        return dScore;
      } else if(sL < 5) {
        return fScore;
      }
    };

    function calculateHydrationGrade() {
      let h = userHydration;
      if(h > 80){
        return aScore;
      } else if(65 < h && h < 81) {
        return bScore;
      } else if(50 < h && h < 66) {
        return cScore;
      } else if(35 < h && h < 51) {
        return dScore;
      } else if(h < 36) {
        return fScore;
      }
    };

    function calculateOverallGrade() {
      let score = (dailyGrades.stepsGrade.score +
      dailyGrades.flightsGrade.score +
      dailyGrades.minutesActiveGrade.score +
      dailyGrades.sleepQualGrade.score +
      dailyGrades.sleepLengthGrade.score +
      dailyGrades.hydrationGrade.score)/6
      if(score >= 1 && score < 2){return "F"}
      else if(score >= 2 && score < 3){return "D"}
      else if(score >= 3 && score < 4){return "C"}
      else if(score >= 4 && score < 4.5){return "B"}
      else if(score >= 4.5 && score < 5){return "A"}
    };
  }
}
