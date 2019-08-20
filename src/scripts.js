
// console.log(userRepository)
var users = new UserRepository(userData)
console.log(users)

const dailySection = document.querySelector('.daily_section')

const header = document.querySelector('header')

header.insertAdjacentHTML('beforeend', `<h2>Welcome, ${userData[16].name}</h2>`)

dailySection.insertAdjacentHTML('afterbegin', `<article class="user_info">
  <p>Address: ${userData[16].address}</p>
  <p>E-mail: ${userData[16].email}</p>
  <p>Stride Length: ${userData[16].strideLength}</p>
  <p>Daily Step Goal: ${userData[16].dailyStepGoal} / ${users.calculateAverageStepGoals()}</p>
</article>`)