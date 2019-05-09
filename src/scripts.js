const userRepository = new UserRepository()

const users = userRepository.instantiateUsers();


var randomId = function generateRandomId() {
  return Math.ceil(Math.random() * 50);
}

var user = userRepository.getUserDataFromId(randomId())
function compareStepGoal(user) {
  return user.dailyStepGoal > userRepository.getAverageStepGoal() ? 'above' : 'below';
}

let instantiatedUser = users.find(item => item.id === user.id)


$(document).ready(() => {
  $('main').append( 
    "<article class='main-widget'>" +
      `<p class='main-widget__address'>Address: ${instantiatedUser.address} </p>` +
      `<p class='main-widget__email'>Email: ${instantiatedUser.email} </p>` +
      `<p class='main-widget__Stride'>Stride: ${instantiatedUser.strideLength} </p>` +
      `<p class='main-widget__daily-step'>Daily Step Goal: ${instantiatedUser.dailyStepGoal}</p>` +
    "</article> "
  )
  $('.footer-greeting-js').append(`Hello, ${instantiatedUser.getFirstName()}!  Your daily step goal is ${compareStepGoal(instantiatedUser)} average.`);
});

