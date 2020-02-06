const settings = {
  generateHtmlString(user) {
    return `
      <h2>Your profile</h2>
      <p>${user.name}</p>
      <p>${user.email}</p>
      <p>${user.address}</p>
      `;
  }
};
