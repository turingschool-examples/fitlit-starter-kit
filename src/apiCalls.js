// Your fetch requests will live here!
import { getUserFromId } from "../test/users-functions";

console.log('I will be a fetch request!')

export const fetchUserData = () => {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } 
      return response.json();
    })
    .then((data) => {
       return data.users
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
};

export const fetchHydrationData = () => {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } 
      return response.json();
    })
    .then((data) => {
       return data.hydrationData
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
};


export const fetchSleepData = () => {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } 
      return response.json();
    })
    .then((data) => {
       return data.sleepData
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
};

export const fetchActivityData = () => {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/activity")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } 
      return response.json();
    })
    .then((data) => {
       return data.activityData
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
};
