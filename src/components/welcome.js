const welcome = {
  generateHtmlString(state) {
    let name = state.currentUser.getFirstName();
    return `
      <p class="user-profile__name">Welcome, ${name}!</p>
      <img src="https://via.placeholder.com/75" alt="">
    `;
  }
};
