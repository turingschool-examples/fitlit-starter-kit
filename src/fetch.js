export const userData = () => {
  return fetch('https://pacific-badlands-43237.herokuapp.com/api/v1/users')
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.log(err));
}

export const userSleepData = () => {
  return fetch('https://pacific-badlands-43237.herokuapp.com/api/v1/sleep')
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.log(err));
}

export const userActivityData = () => {
  return fetch('https://pacific-badlands-43237.herokuapp.com/api/v1/activity')
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.log(err));
}

export const userHydrationData = () => {
  return fetch('https://pacific-badlands-43237.herokuapp.com/api/v1/hydration')
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.log(err));
}
