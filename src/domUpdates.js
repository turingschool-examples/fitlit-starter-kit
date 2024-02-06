//NOTE: Your DOM manipulation will occur in this file
import users from "./data/users";
import { getUserData } from "./scripts";
const info = document.querySelector("#info");
const friendsList = document.querySelector("#friends");
//Here are 2 example functions just to demonstrate one way you can export/import between the two js files. You'll want to delete these once you get your own code going.
const exampleFunction1 = (person) => {
  console.log(`oh hi there ${person}`);
};

const exampleFunction2 = (person) => {
  console.log(`bye now ${person}`);
};

function updateUserInfo() {
  let randomIndex = Math.floor(Math.random() * (users.length - 1)) + 1;
  let user = getUserData(randomIndex, users);

  info.innerHTML = `<h1>Activity Tracker</h1>
  <h2 id = "name">Welcome ${user.name}</h2>
  <h3 id = "id">Id : ${user.id} </h3>
  <h3 id = "adress">Adress : ${user.address} </h3>
  <h3 id = "adress">Email : ${user.email} </h3>
  <h3 id = "strideLength">Stride Length : ${user.strideLength}</h3>
  <h3 id = "stepGoal">Step Goal : ${user.dailyStepGoal}</h3>`;
  updateFriendsList(user.friends);
}

function updateFriendsList(friends) {
  friends.forEach((friend) => {
    friendsList.insertAdjacentHTML = `
    <aside>
    <h4>${friend.name}</h4>
    <h4>StepGoal : ${friend.dailyStepGoal}</h4>
    </aside>`;
  });
}

window.addEventListener("load", function () {
  updateUserInfo();
});


export { exampleFunction1, exampleFunction2 };
