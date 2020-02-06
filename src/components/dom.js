const dom = {
  main: document.querySelector(),
  allTime: this.main.querySelector(),
  challenges: this.main.querySelector(),
  friends: this.main.querySelector(),
  goals: this.main.querySelector(),
  latestActivity: this.main.querySelector(),
  latestWeek: this.main.querySelector(),
  reportCard: this.main.querySelector(),
  settings: this.main.querySelector(),
  welcome: this.main.querySelector(),
  stringToFragment(string) {
    let renderer = document.createElement("template");
    renderer.innerHTML = string;
    return renderer.content;
  },
  render(targetNode, htmlString) {
    const fragment = this.stringToFragment(htmlString);
    this[targetNode].appendChild(fragment);
  }
};
