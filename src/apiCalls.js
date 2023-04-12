const fetchData = (url) => {
return fetch(url)
.then(response => response.json())
};

const fetchAll = () => {
  return Promise.all([
  fetchData('https://fitlit-api.herokuapp.com/api/v1/users'),
  fetchData('https://fitlit-api.herokuapp.com/api/v1/sleep'),
  fetchData('http://localhost:3001/api/v1/hydration'),
  fetchData('https://fitlit-api.herokuapp.com/api/v1/activity')
]);
} 


function fetchHydrationData(){
  fetch('http://localhost:3001/api/v1/hydration', {
    method: 'POST',
    body: JSON.stringify({
      userID: 1,
      date: "4/11/2023",
      numOunces: 54
  }),
    headers: {"Content-Type": "application/json"}
  })
  .then(res => res.json())
  .then(data => console.log(data))
  // .then(JSON => console.log('user',JSON))
  .catch(error => console.log(error))
 };

 fetchHydrationData()

export default fetchAll


