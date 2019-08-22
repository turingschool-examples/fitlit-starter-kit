var users = new UserRepository(userData)
const hydration = new Hydration(hydrationData, 17)


const dailySection = document.querySelector('.daily_section')

const header = document.querySelector('header')

header.insertAdjacentHTML('beforeend', `<h2>Welcome, ${userData[16].name}</h2>`)

dailySection.insertAdjacentHTML('afterbegin', `<article class="user_info">
  <p>Address: ${userData[16].address}</p>
  <p>E-mail: ${userData[16].email}</p>
  <p>Stride Length: ${userData[16].strideLength}</p>
  <p>Daily Step Goal: ${userData[16].dailyStepGoal} / ${users.calculateAverageStepGoals()}</p>
</article>`)


let singleUserIntakeData = hydration.extractSingleUser()


let latestWaterIntake = singleUserIntakeData[singleUserIntakeData.length - 1]

dailySection.insertAdjacentHTML('beforeend', `<article>
 <p>Daily Water Intake: ${latestWaterIntake.numOunces}</p>
 </article>`)