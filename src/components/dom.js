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
  render(targetNode, htmlFragment) {
    this[targetNode].appendChild(htmlFragment);
  }
};
