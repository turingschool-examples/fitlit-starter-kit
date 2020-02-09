const welcome = {
  generateHtmlString(state) {
    let name = state.currentUser.getFirstName();
    return `
      <h3 class="user-profile__name">${name}</h3>
      <img class="user-profile__image" src="https://via.placeholder.com/75" alt="">
    `;
  }
};
