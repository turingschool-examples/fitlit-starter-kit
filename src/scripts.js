const uniqueUserIndex = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
const uniqueUserId = uniqueUserIndex + 1;

const userRepo = new UserRepo();
const user = new User(uniqueUserIndex);
const hydrationRepo = new HydrationRepo(uniqueUserId);
const sleepRepo = new SleepRepo(uniqueUserId);
const activityRepo = new ActivityRepo(uniqueUserId);

// User Info
$(".nav__span--name").text(`${user.name.split(" ")[0]}`);
$(".nav__span--address").text(`${user.address}`);
$(".nav__span--email").text(`${user.email}`);
$(".nav__span--stepgoal").text(`${user.dailyStepGoal}`);
$(".nav__span--comparison").text(`${userRepo.findAverageStepGoal()}`); //this needs a function to call the average step goal for everyone

// Sleep Info
$(".sleep__span--hours").text(
  `${sleepRepo.users.findHoursSleptForSpecificDay("2019/06/15")}`
); 
$(".sleep__span--quality").text(
  `${sleepRepo.users.findSleepQualityForSpecificDay("2019/06/15")}`
); 
$(".sleep__span--weekHours").text(
  `${sleepRepo.users.findHoursSleptForWeek("2019/06/23")}`
); 
$(".sleep__span--weekQuality").text(
  `${sleepRepo.users.findSleepQualityForWeek("2019/06/23")}`
); 
$(".sleep__span--overallHours").text(
  `${sleepRepo.users.findAverageHoursSleptForUser()}`
);
$(".sleep__span--overallQuality").text(
  `${sleepRepo.users.findAverageSleepQualityForUser()}`
);
$(".sleep__span--worstHours").text(
  `${sleepRepo.users.findWorstDayOfSleepHours(2)}`
);
$(".sleep__span--worstQuality").text(
  `${sleepRepo.users.findWorstDayOfSleepQuality(2)}`
);

// Hydration Info
$(".hydro__span--today").text(
  `${hydrationRepo.findSpecificDayHydrationOunces(2, "2019/06/23")}`
); 
$(".hydro__span--average").text(
  `${hydrationRepo.weeklyConsumptionAverage("2019/06/23")}`
);
$(".hydro__span--week").text(
  `${hydrationRepo.returnHydrationValuesForWeek("2019/06/23")}`
);

// Activity Info
$(".activity__span--minutes").text(
  `${activityRepo.users.findActiveMinutesForDay(2, "2019/06/23")}`
);
$(".activity__span--steps").text(
  `${activityRepo.users.findStepsForDay(2, "2019/06/23")}`
);
$(".activity__span--flights").text(
  `${activityRepo.users.findFlightsForDay(2, "2019/06/23")}`
);
$(".activity__span--miles").text(
  `${activityRepo.users.findMilesForDay(2, "2019/06/23")}`
);
$(".activity__span--worst").text(`${activityRepo.users.findLeastActiveDay(2)}`);

// Friends
$(".friends__div--name").html(`${insertFriend()}`);
$(".friends__div--steps").html(`${insertFriendSteps()}`);

// Challenges
$(".challenges__div--stairs").html(`${insertStairStreak()}`)
$(".challenges__div--steps").html(`${insertStepStreak()}`)

function insertFriend() {
  let list = `<ul class="friends__ul">`;
  let friends = activityRepo.users.showFriends("2019/06/23", uniqueUserIndex);
  friends.forEach(friend => {
    list += `<li class="friends__li">
        <span class="friends--name">${friend}</span>
      </li>`;
  });
  list += "</ul>";
  return list;
}

function insertFriendSteps() {
  let list = `<ul class="friends__ul">`;
  let friendsSteps = activityRepo.users.showFriendsSteps(
    "2019/06/23",
    uniqueUserIndex
  );
  friendsSteps.forEach(step => {
    list += `<li class="friends__li">
        <span class="friends--steps">${step}</span>
      </li>`;
  });
  list += "</ul>";
  return list;
}

function insertStairStreak() {
  let list = `<ul class="challenges--stairs">`;
  let stairStreak = activityRepo.users.threeDayStepStreak(uniqueUserIndex);
  list += `<li class="challenges__li">
        <span class="challenges--steps">${stairStreak[0]}</span>
        <span class="challenges--steps">${stairStreak[1]}</span>
        <span class="challenges--steps">${stairStreak[2]}</span>
      </li>`;
  list += "</ul>";
  return list;
}

function insertStepStreak() {
  let list = `<ul class="challenges--steps">`;
  let stepStreak = activityRepo.users.threeDayStairStreak(uniqueUserIndex);
  list += `<li class="challenges__li">
        <span class="challenges--steps">${stepStreak[0]}</span>
        <span class="challenges--steps">${stepStreak[1]}</span>
        <span class="challenges--steps">${stepStreak[2]}</span>
      </li>`;
  list += "</ul>";
  return list;
}

function insertStepStreakQuote() {
  let list = `<span class="challenges--stepQuote">3 Day Increase: Steps</span>`
  return list;
}