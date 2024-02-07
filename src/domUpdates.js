//NOTE: Your DOM manipulation will occur in this file
import usersData from "./data/users";

import { getUserData, getAverageSteps } from "./scripts";
import { CircularFluidMeter } from "fluid-meter";
import hydration from "./data/hydration"
import {
  getUserData,
  getAverageSteps,
  getFuildOunceForDay,
  getFuildOunceForWeek,
  getAverageFuildOunce,
} from "./scripts";

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

  updateUserCard(user)
  updateFriendsList(user.friends);
  updateHydration(user)
  showHydrationWeek(user)
}

function updateUserCard (user){
  let avgStep = getAverageSteps(usersData.users);
  info.innerHTML = `<h1>Activity Tracker</h1>
  <h2 id = "name">Welcome : ${user.name}</h2>
  <h3 id = "id">Id : ${user.id} </h3>
  <h3 id = "adress">Adress : ${user.address} </h3>
  <h3 id = "adress">Email : ${user.email} </h3>
  <h3 id = "strideLength">Stride Length : ${user.strideLength}</h3>
  <h3 id = "stepGoal">My Step Goal : ${user.dailyStepGoal} steps</h3>
  <h3 id = "comparedStepGoal"> Avg Step Goal : ${avgStep} steps`;

}

function updateFriendsList(friends) {
  friends.forEach((friend) => {
    friendsList.insertAdjacentHTML(
      "beforeend",
      `
    <aside>
    <h3>${friend.name}</h3>
    <h3>Step Goal: ${friend.dailyStepGoal}</h3>
    </aside>`
    );
  });
}

function updateHydration(user){
  const currentDay = getFuildOunceForWeek(user.id , hydration.hydrationData)
  const userHydration = getFuildOunceForDay(user.id,hydration.hydrationData,currentDay[0].date)
  console.log(currentDay[0].date)
  friendsList.insertAdjacentHTML("beforebegin", `<h4> ${userHydration.numOunces}</h4>`)
}
function showHydrationWeek(user){
  const week = getFuildOunceForWeek(user.id , hydration.hydrationData)
  week.splice(7)
  week.forEach((day) => {
    friendsList.insertAdjacentHTML("beforeEnd",`<h3>${day.ounces} ${day.date} </h3>`)
  })
  console.log(week)
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
