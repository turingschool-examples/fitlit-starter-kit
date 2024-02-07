//NOTE: Your DOM manipulation will occur in this file
import usersData from "./data/users";
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
//Here are 2 example functions just to demonstrate one way you can export/import between the two js files. You'll want to delete these once you get your own code going.
function updateUserInfo() {
  let randomIndex = Math.floor(Math.random() * (usersData.users.length - 1)) + 1;
  let user = getUserData(randomIndex, usersData.users);
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
    <h4>${friend.name}</h4>
    <h4>StepGoal : ${friend.dailyStepGoal}</h4>
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
window.addEventListener("load", function () {
  updateUserInfo();
});

export { updateUserInfo };
