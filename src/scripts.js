
const user = new User(userData);
const users = new UserRepo(userData);
const hydration = new Hydration(hydrationData);
const mainContainer = document.querySelector('.main__container')
const header = document.querySelector('header');
const randomNum = Math.floor(Math.random() * 50 + 1);
const randomUser = users.getSingleUserData(randomNum);
const sleep = new Sleep(sleepData);

console.log(sleep)

header.insertAdjacentHTML('beforeend', `<h2 class='name--display'>Welcome, ${randomUser.name}</h2>
    <div class='contact--info'>
    <div class='info--wrapper'>
      <label class="contact--label">Address: </label>
      <p class="user--info">${randomUser.address}</p>
    </div>
    <div class='info--wrapper'>
      <label class="contact--label">Email: </label>
      <p class='user--info'>${randomUser.email}</p>
    </div>
    <div class='info--wrapper'>
    <label class="contact--label">Stride Length: </label> 
      <p class='user--info'>${randomUser.strideLength} ft.</p>
    </div>
    <div class='info--wrapper'>
    <label class="contact--label">Daily Step Goal: </label>
      <p class='user--info'>${randomUser.dailyStepGoal} steps</p>
    </div>
  </div> 
`)

// mainContainer.insertAdjacentHTML('afterbegin', ``)
// console.log(hydration.findAWeek(randomUser.id))

var ctx = document.getElementById('weekly--water').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
        labels: hydration.findAWeek(randomUser.id).map(day => day.date),
        datasets: [{
            label: 'Weekly Water Intake',
            backgroundColor: '#fff',
            borderColor: 'rgb(255, 99, 132)',
            data: hydration.findAWeek(randomUser.id).map(day => day.numOunces)
        }]
    },

    // Configuration options go here
    options: {}
});