const challenge = {
  generateHtmlString(challengeState) {

    const names = challengeState.userData.map(person => person.name);

    const leaderboard = challengeState.getLeaderboardPercentages();

    let nameBlocks = names.map(name => {
      const htmlString = `<p>${name}</p>
      <div class="light-red activity-data-today-2 widget-block">
      </div>`;
      return htmlString;
    })

    nameBlocks = nameBlocks.join('')

    const initialBlock = `<h2>Challenges</h2>
    <div class="challenges-top widget-block red">
      <p>This Week: <b>50K Steps</b></p>
    </div>
    `;

    const html = `${initialBlock}${nameBlocks}`;

    return html;
  }
};
