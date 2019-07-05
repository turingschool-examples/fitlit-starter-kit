$(document).ready(function() {
  // const hydrationRepo = new HydrationRepository(hydrationData);
  
  $('#js-h2--user').hide();
  $('#js-user-profile').hide();

  $('#js-change-user').click(function() {
    const userRepo = new UserRepository(userData);
    let userID = Math.floor((Math.random() * 50) + 1);
    const specificUser = userRepo.returnUserData(userID);
    const user = new User(specificUser);
    $('#js-user-profile').show();
    $('#js-change-user').removeClass('list-item--active');
    $('#js-user').addClass('list-item--active');
    $('#js-first-name').html(user.returnFirstName());
    $('#js-full-name').html(user.name);
    $('#js-address').html(user.address);
    $('#js-email').html(user.email);
    $('#js-friends').html(userRepo.makeFriendNames(userID));
    $('#js-h2--welcome').hide();
    $('#js-h2--user').show();
  });

  // Bar chart
  new Chart($("#step-goal-chart"), {
    type: 'bar',
    data: {
      labels: ["Africa", "Asia"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2"],
          data: [2478, 5267]
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
  });
  // let foundUser = hydrationRepo.returnUserHydrationData(userID);
  // const hydration = new Hydration(foundUser);
  // $('#js-water-consumed-today').html(hydration.returnFluidOunces("2019/06/15"));

  
});