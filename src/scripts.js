(() => {
  // Global state object
  const state = {
    currentUser: null,
    currentUserData: null
  };

  // Instantiate UserRepository, User instances
  // Set state.currentUser to the current userId
  const userRepository = new UserRepository(userData);
  userRepository.instantiateUsers();
  const randomId = userRepository.getRandomUserId();
  state.currentUser = userRepository.getUserData(randomId);

  // Instantiate database to hold all Hydration, Sleep, Activity data
  // Set state.currentUserData to the data of the currentUser
  const database = new Database(hydrationData, activityData, sleepData);
  state.currentUserData = database.filterUser(state.currentUser.id);

  // Start invoking render method

  // Settings widget
  const settingsHtmlString = settings.generateHtmlString(state.currentUser);
  dom.render(dom.settings, settingsHtmlString);

  // Latest Activity widget
  const latestActivityHtmlString = latestActivity.generateHtmlString(state.currentUser.id, state);
  dom.render(dom.latestActivity, latestActivityHtmlString);
})();
