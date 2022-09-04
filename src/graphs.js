function generateGraphs() {
  
console.log("graphs online");

  var xValues = ["Friend 1", "Friend 2", "Friend 3", "Friend 4", "Friend 5", "friend 6", "friend 7"]; 
  var yValues = [55, 49, 44, 24, 15, 100, 45];
  var barColors = [
    "rgb(255, 0, 0, .6)", 
    "rgb(255, 125, 0, .6)",
    "rgb(255, 255, 0, .6)",
    "rgb(0, 255, 0, .6)",
    "rgb(0, 0, 255, .6)",
    "rgb(75, 0, 130, .6)",
    "rgb(150, 0, 210, .6)"];
    
  new Chart("compare-avg-goal", {
    type: "bar",
    data: {
      labels: ["Your goal", "Average FitLit Goal"], 
      datasets: [{
        label: 'Your Goal VS AVG', // steps / sleep / hydro
        backgroundColor: barColors,
        data: [currentUser.dailyStepGoal, userRepo.calculateAvgStepGoal()] // array containing user goal, average of all users goals
      }]
    },
    // options: {...}
  }); 
}


// new Chart("steps-friends-chart", {
//   type: "bar",
//   data: {
//     labels: xValues, // bar titles - add friends' names here
//     datasets: [{
//       label: "Friends' Step Goals",
//       backgroundColor: barColors,
//       data: yValues // add friends' step goal data here
//     }]
//   },
//   // options: {...}
// });

// var hydroColors = [
//   "rgba(4, 104, 255, 0.6)"];

// new Chart("week-in-water", {
//   type: "bar",
//   data: {
//     labels: xValues, // bar titles - relevant dates here
//     datasets: [{
//       label: 'OZ Drank Per Day', 
//       backgroundColor: hydroColors,
//       data: yValues // add friends' data here
//     }]
//   },
//   // options: {...}
// });

// new Chart("chosen-week-in-water", {
//   type: "bar",
//   data: {
//     labels: xValues,  // bar titles - relevant dates here
//     datasets: [{
//       label: 'OZ Drank Per Day', // steps / sleep / hydro
//       backgroundColor: hydroColors,
//       data: yValues // add friends' data here
//     }]
//   },
//   // options: {...}
// });



// new Chart("hydro-homies", {
//   type: "bar",
//   data: {
//     labels: xValues, // bar titles - add friends' names here
//     datasets: [{
//       label: 'Hydro Homies', // steps / sleep / hydro
//       backgroundColor: hydroColors,
//       data: yValues // add friends' data here
//     }]
//   },
//   // options: {...}
// });

var sleepColors = [
  "rgb(95, 0, 160, .6)"]

// new Chart("average-sleep-hours", {
//   type: "bar",
//   data: {
//     labels: xValues, // bar titles - add friends' names here
//     datasets: [{
//       label: 'Hours Slept By Day', // steps / sleep / hydro
//       backgroundColor: sleepColors,
//       data: yValues // add friends' data here
//     }]
//   },
//   // options: {...}
// });


// new Chart("average-sleep-quality", {
//   type: "bar",
//   data: {
//     labels: xValues, // bar titles - add friends' names here
//     datasets: [{
//       label: 'Hours Slept By Day', // steps / sleep / hydro
//       backgroundColor: sleepColors,
//       data: yValues // add friends' data here
//     }]
//   },
//   // options: {...}
// });

// new Chart("sleep-quality", { // missing from DOM
//   type: "bar",
//   data: {
//     labels: xValues, // bar titles - add friends' names here
//     datasets: [{
//       label: 'Sleep Quality By Day', // steps / sleep / hydro
//       backgroundColor: sleepColors,
//       data: yValues // add friends' data here
//     }]
//   },
//   // options: {...}
// });

export default generateGraphs()