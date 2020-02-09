const friends = {
  generateHtmlString(state, userRepository) {
    let htmlString = `<h2 class="friend__title">Friends</h2>`;
    const friendIds = state.currentUser.friends;
    const friends = friendIds.map(id => {
      return userRepository.getUserData(id).getFirstName();
    });

    friends.forEach(friend => {
      htmlString += `
        <div class="friend">
          <p class="friend__name">${friend}</p>
          <img class="friend__image" src="https://via.placeholder.com/25" alt="">
        </div>
      `;
    });

    return htmlString;
  }
};
