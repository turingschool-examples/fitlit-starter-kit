function generateRandomUser(people) {
    const randomIndex = Math.floor(Math.random() * people.users.length);
    return people.users[randomIndex];
  }


export {
    generateRandomUser
};