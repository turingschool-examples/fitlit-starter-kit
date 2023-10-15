//NOTE: Your DOM manipulation will occur in this file

//Here are 2 example functions just to demonstrate one way you can export/import between the two js files. You'll want to delete these once you get your own code going.
const exampleFunction1 = (person) => {
  console.log(`oh hi there ${person}`)
}

const exampleFunction2 = (person) => {
  console.log(`bye now ${person}`)
}

// query selectors

const profileSection = document.querySelector('.profile-section');
const friendsSection = document.querySelector('.friends-section');


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
    `;
  const usersFriends = array[userId - 1].friends;

  friendsSection.innerHTML = "";

  return usersFriends.forEach((friend) => {
    friendsSection.innerHTML += `
    <p>${array[friend - 1].name}</p>
    `;
  });
};


export {
  showUserInfo,
  exampleFunction1,
  exampleFunction2,
}