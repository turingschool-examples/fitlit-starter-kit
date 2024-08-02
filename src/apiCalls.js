// Your fetch requests will live here
function fetchData(endpoint) {
  return fetch('http://localhost:3000/api/v1/' + endpoint)
    .then(res => {
      console.log('res: ', res)
      return res.json()
    })  
  
}

function postData(endpoint, body) {
  const base = 'http://localhost:3000/api/v1/'
  return fetch(base + endpoint, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
}

// await fetch("https://example.org/post", {
//   method: "POST",
//   body: JSON.stringify({ username: "example" }),
//   headers: myHeaders,
// });

export {
  fetchData,
  postData
}