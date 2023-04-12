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
    body: JSON.stringify(),
    headers: {"Content-Type": "application/json"}
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
 };


export default fetchAll