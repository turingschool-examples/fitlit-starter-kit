


// console.log("Hello World");
// console.log("DATA", userData)
// console.log("A", Activiy)

// window.addEventListener('load', onLoad);

// function onLoad() {
//   chooseRandomUser();
// }

function chooseRandomUser() {
  const randomUser = Math.floor(Math.random() * userData.length)
  console.log(randomUser)
  user = new User(userData[randomUser])
  let greeting = document.querySelector('.user-profile-display')
  greeting.innerHTML = `Welcome, ${user.returnFristName()}!`
}

chooseRandomUser();




// Create an info card on the dashboard with all of user’s info on the page--want it to display name, address, email, strideLength & stepgoal

// Display their first name somewhere prominently on the page to welcome them

// For a specific user, display how their step goal compares to the average step goal amongst all users (this display should not be hard-coded)
