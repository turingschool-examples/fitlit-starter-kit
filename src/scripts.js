$(document).ready(() => {
    currentDate = new Date();
    const userRepository = new UserRepository(userData);
    const randomId = Math.ceil(Math.random() * 50 - 1);
    userRepository.returnCurrentUser(randomId)
    const currentPerson = userRepository.currentUser
    console.log(currentPerson)
    const user = new User(currentPerson);
    const firstName = currentPerson.name.split(' ');
    const hydration = new Hydration(hydrationData, currentPerson.id);
    console.log(hydration.calculateAvgDailyAmtDrankByUserIdAllTime(currentPerson.id))
    console.log(hydration.returnDrinkAmtEachDayOverWeekByUser(currentPerson.id))


    $('.date').text(currentDate);
    $('.welcome-user').text(firstName[0]);
    $('#myChart').text(hydration.calculateAvgDailyAmtDrankByUserIdAllTime(currentPerson.id))
          var myChart = new Chart($('#myChart'), {
              type: 'bar',
              data: {
                  labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6","Day 7"],
                  datasets: [{
                      label: 'Daily Amount Water For Week',
                      data: hydration.returnDrinkAmtEachDayOverWeekByUser(currentPerson.id),
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
        
})
