const dom = {
  allTime: document.querySelector(".all-time"),
  challenges: document.querySelector(".challenge-goals"),
  community: document.querySelector(".community"),
  friends: document.querySelector(".friends"),
  // goals: this.main.querySelector(),
  latestActivity: document.querySelector(".latest-activity"),
  latestWeek: document.querySelector(".latest-week"),
  main: document.querySelector("main"),
  reportCard: document.querySelector(".report-card"),
  settings: document.querySelector(".settings"),
  welcome: document.querySelector(".user-profile"),

  stringToFragment(string) {
    let renderer = document.createElement("template");
    renderer.innerHTML = string;
    return renderer.content;
  },
  
  render(targetNode, htmlString) {
    const fragment = this.stringToFragment(htmlString);
    targetNode.appendChild(fragment);
  }
};
