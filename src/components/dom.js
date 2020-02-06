const dom = {
  main: document.querySelector("main"),
  // allTime: this.main.querySelector(),
  // challenges: this.main.querySelector(),
  // friends: this.main.querySelector(),
  // goals: this.main.querySelector(),
  // latestActivity: this.main.querySelector(),
  // latestWeek: this.main.querySelector(),
  // reportCard: this.main.querySelector(),
  settings: document.querySelector(".settings"),
  // welcome: this.main.querySelector(),
  stringToFragment(string) {
    let renderer = document.createElement("template");
    renderer.innerHTML = string;
    return renderer.content;
  },
  render(targetNode, htmlString) {
    console.log(targetNode);
    const fragment = this.stringToFragment(htmlString);
    console.log(htmlString);
    console.log(fragment);
    targetNode.appendChild(fragment);
  }
};
