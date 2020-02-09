const settings = {
  generateHtmlString(user) {
    const addressLine1 = user.address.split(",")[0];
    const addressLine2 = user.address.split(",")[1].split("-")[0];

    return `
      <h2 class="settings__title">Your profile</h2>
      <p>${user.name}</p>
      <p>${user.email}</p>
      <p>${addressLine1}</p>
      <p>${addressLine2}</p>
      `;
  }
};
