// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import Chart from 'chart.js'


// (async function() {
//   const data = [
//     { year: 2010, count: 10 },
//     { year: 2011, count: 20 },
//     { year: 2012, count: 15 },
//     { year: 2013, count: 25 },
//     { year: 2014, count: 22 },
//     { year: 2015, count: 30 },
//     { year: 2016, count: 28 },
//   ];

//   const test = [ 3, 13, 7, 13, 10, 13, 16]
//   const placement = document.getElementById('test')


//   new Chart(
//     placement,
//     {
//       type: 'line',
//       data: {
//         labels: data.map(row => row.year),
//         datasets: [
//           {
//             label: "none",
//             data: test,
//             backgroundColor: "#FF6384"
//           }
//         ]
//       }
//     }
//   );
// })();

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';
console.log("User Data:", userData);



// get a radom number based on the amount of IDs we have
// fetch data based off the id ADN the end-point key
// funciotn test ( 1, urlhttpsAPI//a.com) {
  // first go to end point 
  // .then () resolve .as
  // .then () filter( userID === id argument)
  // let hydration = new Hydration(whole array of info)

  // hyration class construcot(id, whole array) {
  //   data: this is where the arguments goes
  // }
// }