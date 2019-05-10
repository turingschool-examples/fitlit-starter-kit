const userRepository = new UserRepository()
const hydrationRepository = new HydrationRepository();

const users = userRepository.instantiateUsers();
const waters = hydrationRepository.instantiateHydration();


var randomId = function generateRandomId() {
  return Math.ceil(Math.random() * 50);
}

var user = userRepository.getUserDataFromId(randomId())
function compareStepGoal(user) {
  return user.dailyStepGoal > userRepository.getAverageStepGoal() ? 'above' : 'below';
}
// WE NOW HAVE FIFTY INSTANTIATIONS OF HYDRATION, 
// INSIDE THEY SHOULD PROPERTY OF ID WITH INSTANTIATED USER ID,
// AND A PROPERTY OF HYDRATIONDATA.
// WE WANT TO MOVE THE BELOW INSTANTIATION INTO THE HYDRATIONREPO METHOD WITH PARAMETERS OF USER ID AND CORRECT DATA SOURCE.

let instantiatedUser = users.find(item => item.id === user.id)

let hydrationUserData = hydrationRepository.getHydrationDataFromId(instantiatedUser.id);

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

