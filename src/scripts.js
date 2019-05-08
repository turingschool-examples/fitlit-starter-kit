var userRepository = new UserRepository()

function compareStepGoal(sampleUser) {
  return sampleUser.dailyStepGoal > userRepository.getAverageStepGoal() ? 'above' : 'below';
}


$(document).ready(() => {
  $('main').append( 
    "<article class='main-widget'>" +
      `<p class='main-widget__address'>Address: ${sampleUser.address} </p>` +
      `<p class='main-widget__email'>Email: ${sampleUser.email} </p>` +
      `<p class='main-widget__Stride'>Stride: ${sampleUser.strideLength} </p>` +
      `<p class='main-widget__daily-step'>Daily Step Goal: ${sampleUser.dailyStepGoal}</p>` +
    "</article> "
  )
  $('.footer-greeting-js').append(`Hello, ${sampleUser.name}!  Your daily step goal is ${compareStepGoal(sampleUser)} average.`)
  console.log(userRepository.getAverageStepGoal())
});


// module.exports = Scripts;