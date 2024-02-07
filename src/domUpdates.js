//NOTE: Your DOM manipulation will occur in this file
import usersData from "./data/users";
import { getUserData, getAverageSteps } from "./scripts";
const info = document.querySelector("#info");
const friendsList = document.querySelector("#friends");
//Here are 2 example functions just to demonstrate one way you can export/import between the two js files. You'll want to delete these once you get your own code going.
function updateUserInfo() {
  
  let randomIndex = Math.floor(Math.random() * (usersData.users.length - 1)) + 1;
  let user = getUserData(randomIndex, usersData.users);
  let avgStep = getAverageSteps(usersData.users)
  info.innerHTML = `<h1 id="name">Welcome: ${user.name}</h1>
  <h3 id="id">ID: ${user.id} </h3>
  <h3 id="adress">Address: ${user.address} </h3>
  <h3 id="adress">Email: ${user.email} </h3>
  <h3 id="strideLength">Stride Length: ${user.strideLength}</h3>
  <h3 id="stepGoal">My Step Goal: ${user.dailyStepGoal} steps</h3>
  <h3 id="comparedStepGoal"> Avg Step Goal: ${avgStep} steps`;
  console.log(user.friends)
  updateFriendsList(user.friends);
}

function updateFriendsList(friends) {
  friends.forEach((friend) => {
    friendsList.insertAdjacentHTML("beforeend",`
    <aside>
    <h3>${friend.name}</h3>
    <h3>Step Goal: ${friend.dailyStepGoal}</h3>
    </aside>`
  )});
}

window.addEventListener("load", function () {
  updateUserInfo();
});


export { updateUserInfo};
