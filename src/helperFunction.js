

const checkID = function (id,data) {
    return data.some((user) => user.userID === id) 
  }

  export { checkID } 