//NOTE: Your DOM manipulation will occur in this file
import usersData from "./data/users";

import { CircularFluidMeter } from "fluid-meter";
import hydration from "./data/hydration"
import {
  getUserData,
  getAverageSteps,
  getFluidOunceForDay,
  getFluidOunceForWeek,
  getAverageFluidOunce,
} from "./scripts";

const info = document.querySelector("#info");
const friendsList = document.querySelector("#friends");
const waterMeter = document.querySelector("#waterMeterContainer"); 
const userHydrationDate = document.querySelector("#dateHydrationTitle");
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
  updateFriendsList(user.friends);
  updateHydration(user)
  // showHydrationWeek(user)
}

function updateFriendsList(friends) {
  friends.forEach((friend) => {
    friendsList.insertAdjacentHTML(
      "beforeend",
        `<aside>
        <h3>${friend.name}</h3>
        <h3>Step Goal: ${friend.dailyStepGoal}</h3>
        </aside>`
    );
  });
}

// function updateHydration(user){
//   const currentDay = getFluidOunceForWeek(user.id , hydration.hydrationData);
//   const userHydration = getFluidOunceForDay(user.id,hydration.hydrationData,currentDay[0].date);
//   console.log("Current Day:",currentDay[0].date);
//   console.log("User Hydration:", userHydration.numOunces);
//   friendsList.insertAdjacentHTML("beforebegin", `<h4> ${userHydration.numOunces}</h4>`);
//   return userHydration.numOunces;
// }

function updateHydration(user, day = 0) {
  const flOzDays = getFluidOunceForWeek(user.id, hydration.hydrationData);
  console.log("flOzDays:", flOzDays);
  const userHydration = getFluidOunceForDay(user.id, hydration.hydrationData, flOzDays[day].date);
  console.log("User Hydration:", userHydration);
  let createdWaterMeter = new CircularFluidMeter(waterMeter, {
    borderWidth: 15,
    initialProgress: userHydration.numOunces,
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
  userHydrationDate.innerHTML = `<h1>Water Consumption</h1><h3>${userHydration.date}</h3>`;
}

// function showHydrationWeek(user){
//   const week = getFluidOunceForWeek(user.id , hydration.hydrationData)
//   week.splice(7)
//   week.forEach((day) => {
//     friendsList.insertAdjacentHTML("beforeEnd",`<h3>${day.ounces} ${day.date} </h3>`)
//   })
//   console.log("Week:",week)
// }
 
window.addEventListener("load", function () {
  updateUserInfo();
});

export { updateUserInfo };
