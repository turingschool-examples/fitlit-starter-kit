let retrieveData = fetch("http:localhost:3001/api/v1/users")
  .then(response => response.json())
  .then(data => console.log(data));
