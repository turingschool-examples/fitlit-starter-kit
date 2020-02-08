const dom = {
  main: document.querySelector("main"),
  // allTime: this.main.querySelector(),
  challenges: document.querySelector('.challenge-goals'),
  // friends: this.main.querySelector(),
  // goals: this.main.querySelector(),
  latestActivity: document.querySelector(".latest-activity"),
  latestWeek: document.querySelector(".latest-week"),
  // reportCard: this.main.querySelector(),
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
