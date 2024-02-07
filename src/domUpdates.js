//NOTE: Your DOM manipulation will occur in this file
import usersData from "./data/users";
import { getUserData, getAverageSteps } from "./scripts";
import { CircularFluidMeter } from "fluid-meter";
const info = document.querySelector("#info");
const friendsList = document.querySelector("#friends");
const waterMeter = document.querySelector("#waterMeterContainer");
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

function createWaterMeter() {
  let createdWaterMeter = new CircularFluidMeter(waterMeter, {
      borderWidth: 15,
      initialProgress: 23,
      maxProgress: 100,
      backgroundColor: '#002d59',
      borderColor: '#3e4954',
      bubbleColor: '#6bcfff',
      fontFamily: 'Codystar',
      fontSize: 34,
      progressFormatter: (value) => {
          return `${value.toFixed(0)} fl oz`;
      },
      fluidConfiguration: {
          color: '#1e90ff'
      }
  })
  return createdWaterMeter;
}

window.addEventListener("load", function () {
  updateUserInfo();
  createWaterMeter();
});



export { updateUserInfo };
