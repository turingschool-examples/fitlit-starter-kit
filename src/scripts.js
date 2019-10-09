const user = new User(userData);
const users = new UserRepo(userData);
const mainContainer = document.querySelector('.main__container')
const header = document.querySelector('header');
const randomNum = Math.floor(Math.random() * 50 + 1);
const randomUser = users.getSingleUserData(randomNum);


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

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});