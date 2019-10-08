$(function() {
  const randomUser = Math.floor(Math.random() * 50) + 1  
  
  const user = new User(userData[randomUser]);
  const usersRepo = new UsersRepo(userData);
  //   const userSleep = new userSleep();
  //   const usersSleepRepo = new usersSleepRepo();
  const userHydration = new userHydration(userData[randomUser]);
  //   const userActivity = new userActivity();
  //   const usersActivityRepo = UsersActivityRepo();

  $('.span__currentUser').text(user.getUserFirstName())  
  $('.user__address').text(userData[randomUser].address);
  $('.user__email').text(userData[randomUser].email);
  $('.user__stride').text(userData[randomUser].strideLength);
  $('.user__step').text(userData[randomUser].dailyStepGoal);
  $('.user__friends').text(userData[randomUser].friends);
  $('.compare__user-steps-to-all').text(usersRepo.avgStepGoal())
  $('.user__dailyWater').text(userHydration.userOuncesToday())


  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
        label: '',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });

});