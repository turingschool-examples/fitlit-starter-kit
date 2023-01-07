import { userDataForDate, weeklyData, checkID } from "./helperFunctions";
class Activity {
  constructor(data) {
    this.data = data;
  }

  calculateMilesForDate(id, date, strideLength) {
    const userActivity = userDataForDate(this.data, id, date);
    if (!userActivity) {
      return "No data found for inputs";
    }
    return ((userActivity.numSteps * strideLength) / 5280).toFixed(2) * 1;
  }

  findMintuesActiveForDate(id, date) {
    const userActive = userDataForDate(this.data, id, date);
    if (!userActive) {
      return "No data found for inputs";
    }
    return userActive.minutesActive;
  }

  averageMinutesActiveForWeek(id, date) {
    const minutesActiveObject = weeklyData(
      this.data,
      "minutesActive",
      "Minutes Active",
      id,
      date
    );
    if (minutesActiveObject.count.some(el => el !== null)) {
      return (
        minutesActiveObject.count
          .filter(element => element !== null)
          .reduce((acc, curr, _, arr) => acc + curr / arr.length, 0)
          .toFixed(0) * 1
      );
    } else {
      return "No data found for date selected"
    }
  }

  dailyStepGoaAchieved(id, date, stepGoal) {
    const userData = userDataForDate(this.data, id, date);
    if (!userData) {
      return "No data found for inputs";
    }
    return userData.numSteps > stepGoal;
  }

  findDatesOverStepGoal(id, stepGoal) {
    const userData = this.data.filter((user) => user.userID === id);
    if (userData.length === 0) {
      return "No User Found";
    }
    const datesAchivedGoal = userData.filter((el) => el.numSteps > stepGoal);
    if (datesAchivedGoal.length === 0) {
      return "No Step Goals Met";
    }
    return datesAchivedGoal.map((el) => el.date);
  }

  findHighestStairsClimbed(id) {
    if(!checkID(id, this.data)) {
      return 'User Not Found'
    }
    const highestStairCount = this.data.reduce((highest, data) => {
      if (data.userID === id && data.flightsOfStairs > highest) {
        highest = data.flightsOfStairs
        return highest
      }
      return highest
    }, -1);
    if(highestStairCount === -1) {
      return 'No Data Found'
    }
    return highestStairCount
  }

  allUserAveragesForDate(date) {
    const allUserData = this.data.filter(key => key.date === date)
    if(allUserData.length === 0) {
      return 'No Data Found'
    }
    const userAverages = allUserData.reduce((acc, cur, _ , arr) => {
      return {
        stairs: acc.stairs + cur.flightsOfStairs / arr.length,
        steps: acc.steps + cur.numSteps / arr.length,
        minutesActive: acc.minutesActive + cur.minutesActive / arr.length
      }
    }, {stairs: 0, steps: 0, minutesActive: 0})
    return {
      stairs: userAverages.stairs.toFixed() * 1,
      steps: userAverages.steps.toFixed() * 1,
      minutesActive: userAverages.minutesActive.toFixed() * 1,
    }
  }

  weeklyStepCountByDay(id, date) {
    return weeklyData(this.data, "numSteps", "Steps", id, date)
  }

  weeklyMinutesActiveByDay(id, date) {
    return weeklyData(this.data, "minutesActive", "Minutes Active", id, date)
  }

  weeklyStairsClimbedByDay(id, date) {
    return weeklyData(this.data, "flightsOfStairs", "Stairs Climbed", id, date)
  }
}

export default Activity;
