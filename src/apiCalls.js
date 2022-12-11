function getAPIData(info) {
  const fetchedInfo = fetch(`https://fitlit-api.herokuapp.com/api/v1/${info}`)
    .then((res) => res.json())
  return fetchedInfo
}

export { getAPIData }