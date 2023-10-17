//NOTE: Your DOM manipulation will occur in this file

//Here are 2 example functions just to demonstrate one way you can export/import between the two js files. You'll want to delete these once you get your own code going.
const exampleFunction1 = (person) => {
  console.log(`oh hi there ${person}`)
}

const exampleFunction2 = (person) => {
  console.log(`bye now ${person}`)
}

// query selectors

const profileSection = document.querySelector('#user-expandable-content');
const friendsSection = document.querySelector('.friends-section');
const welcome = document.querySelector('.welcome-sign');

// global variables

let currentUser;
let index;

const showUserInfo = (userId, array) => {
  let user = array[userId - 1];
  
  profileSection.innerHTML = '';

  profileSection.innerHTML += `
     <p>Id Number: ${user.id}</p>
     <p>Name: ${user.name}</p>
     <p>Address: ${user.address}</p>
     <p>Email: ${user.email}</p>
     <p>Stride Length - ${user.strideLength}</p>
     <p>Daily Step Goal - ${user.dailyStepGoal}</p>
     <p>FRIENDS</p>
    `;
  const usersFriends = array[userId - 1].friends;

   usersFriends.forEach((friend) => {

    profileSection.innerHTML += `
    <p>${array[friend - 1].name}</p>
    `;
  });
};

const welcomeUser = (users) => {
  welcome.innerText = `Hey1`
  
}




export {
  showUserInfo,
  welcomeUser,
  
  exampleFunction1,
  exampleFunction2,
}