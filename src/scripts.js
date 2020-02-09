(() => {
  // Global state object
  const state = {
    currentUser: null,
    currentUserData: null,
    currentDay: null
  };

  // Instantiate UserRepository, User instances
  // Set state.currentUser to the current userId
  const userRepository = new UserRepository(userData);
  userRepository.instantiateUsers(User);
  const randomId = userRepository.getRandomUserId();
  state.currentUser = userRepository.getUserData(randomId);

  // Instantiate database to hold all Hydration, Sleep, Activity data
  // Set state.currentUserData to the data of the currentUser
  const database = new Database(hydrationData, activityData, sleepData);
  state.currentUserData = database.filterUser(state.currentUser.id);
  state.currentDay = database.getCurrentDay(state.currentUserData);

  // Instantiate a new state of challenge to get data for the current user and their friends
  const challengeState = new Challenge(state.currentUser);
  challengeState.getUsers(state.currentUser);
  challengeState.getUsersData(
    Calculator,
    database.activityData,
    userRepository.users
  );

  // Start invoking render method
  // Please use state.currentDay for calculator date calls
  // Settings widget
  const settingsHtmlString = settings.generateHtmlString(state.currentUser);
  dom.render(dom.settings, settingsHtmlString);

  // Latest Activity widget
  const latestActivityHtmlString = latestActivity.generateHtmlString(
    state.currentUser.id,
    state
  );
  dom.render(dom.latestActivity, latestActivityHtmlString);

  // Latest week widget
  const latestWeekHtmlString = latestWeek.generateHtmlString(state);
  dom.render(dom.latestWeek, latestWeekHtmlString);

  // Welcome name widget
  const welcomeHtmlString = welcome.generateHtmlString(state);
  dom.render(dom.welcome, welcomeHtmlString);

  // Challenge widget
  const challengeHtmlString = challenge.generateHtmlString(challengeState);
  dom.render(dom.challenges, challengeHtmlString);

  // Community widget
  const communityHtmlString = community.generateHtmlString(state.currentUser.id, state);
  dom.render(dom.community, communityHtmlString);
})();
