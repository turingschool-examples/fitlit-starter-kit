const challenge = {
  generateHtmlString(challengeState) {

    const leaderboard = challengeState.getLeaderboardPercentages();

    console.log(leaderboard);

    let nameBlocks = leaderboard.map(person => {
      const htmlString = `<p>${person[0]}</p>
      <div class="light-red activity-data-today-2 widget-block" data-name="${name}" style="width: ${person[1]}%"}>
      </div>`;
      return htmlString;
    })

    nameBlocks = nameBlocks.join('');

    const initialBlock = `<h2>Challenges</h2>
    <div class="challenges-top widget-block red">
      <p>This Week: <b>50K Steps</b></p>
    </div>
    `;

    const html = `${initialBlock}${nameBlocks}`;

    return html;
  }
};
