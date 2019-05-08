const userRepository = new UserRepository()

console.log(sampleData);

var randomId = function generateRandomId() {
  return Math.floor(Math.random() * 50);
}

var currentUser = userRepository.getUserDataFromId(randomId())

const user = new User(currentUser);
// console.log(userRepository.userData);

function compareStepGoal(user) {
  return user.dailyStepGoal > userRepository.getAverageStepGoal() ? 'above' : 'below';
}

// console.log(userRepository.instantiateUsers(userData));

$(document).ready(() => {
  $('main').append( 
    "<article class='main-widget'>" +
      `<p class='main-widget__address'>Address: ${user.address} </p>` +
      `<p class='main-widget__email'>Email: ${user.email} </p>` +
      `<p class='main-widget__Stride'>Stride: ${user.strideLength} </p>` +
      `<p class='main-widget__daily-step'>Daily Step Goal: ${user.dailyStepGoal}</p>` +
    "</article> "
  )
  $('.footer-greeting-js').append(`Hello, ${user.name}!  Your daily step goal is ${compareStepGoal(user)} average.`);
});


// module.exports = Scripts;