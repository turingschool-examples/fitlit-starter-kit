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

hydration.extractSingleUser()
let singleUserIntakeData = hydration.singleUserData;
let weeklyOunces = hydration.calculateWeeklyWaterIntake();
console.log("it worked", weeklyOunces)
// let latestWaterIntake = singleUserIntakeData[singleUserIntakeData.length - 1]

// hydration.calculateWeeklyWaterIntake()

dailySection.insertAdjacentHTML('beforeend', `<article>
 <p>Daily Water Intake: ${latestWaterIntake.numOunces}</p>
 </article>`)