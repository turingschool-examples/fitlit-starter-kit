// Your fetch requests will live here!
import { getUserFromId } from "../test/users-functions";

console.log('I will be a fetch request!')

let fetchedUsersArray = [];

// const pushData = (data) => {
//   fetchedUsersArray.push(...data);
//   //console.log("worked", fetchedUsersArray);
// };

export const fetchUserData = () => {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } // handles errors with the network request
      return response.json();
    })
    .then((data) => {
      
       //console.log("USER DATA", userData)
       return data.users
      // You can add additional logic to handle the data here
    })
    .catch((err) => {
      console.error("Fetch error:", err);
      // Handle errors with the promise obect such as json parsing errors
      // You can display an error message to the user or retry the request
    });
};

// fetchUserData()

// export {fetchedUsersArray}