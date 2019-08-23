let randomNum = Math.floor(Math.random() * 50 +1);
let randomUser = userData.find(user => {
  return user.id === randomNum;
})

const hydration = new Hydration(hydrationData, randomUser.id);
const users = new UserRepository(userData);


const dailySection = document.querySelector('.daily_section')

const header = document.querySelector('header')

header.insertAdjacentHTML('beforeend', `<h2>Welcome, ${randomUser.name}</h2>`)

dailySection.insertAdjacentHTML('afterbegin', `<article class="user_info">
  <p>Address: ${randomUser.address}</p>
  <p>E-mail: ${randomUser.email}</p>
  <p>Stride Length: ${randomUser.strideLength}</p>
  <p>Daily Step Goal: ${randomUser.dailyStepGoal} / ${users.calculateAverageStepGoals()}</p>
</article>`)

hydration.extractSingleUser();
let waterConsumedToday = hydration.calculateDailyWaterIntake();
let singleUserIntakeData = hydration.singleUserData;
let weeklyOunces = hydration.calculateWeeklyWaterIntake();



dailySection.insertAdjacentHTML('beforeend', `<article>
 <p>Daily Water Intake: ${waterConsumedToday}</p>
 <ul>Water consumed this week:
  <li>${weeklyOunces[0].date} : ${weeklyOunces[0].numOunces} ounces</li>
  <li>${weeklyOunces[1].date} : ${weeklyOunces[1].numOunces} ounces</li>
  <li>${weeklyOunces[2].date} : ${weeklyOunces[2].numOunces} ounces</li>
  <li>${weeklyOunces[3].date} : ${weeklyOunces[3].numOunces} ounces</li>
  <li>${weeklyOunces[4].date} : ${weeklyOunces[4].numOunces} ounces</li>
  <li>${weeklyOunces[5].date} : ${weeklyOunces[5].numOunces} ounces</li>
  <li>${weeklyOunces[6].date} : ${weeklyOunces[6].numOunces} ounces</li>
 </ul>
 </article>`)