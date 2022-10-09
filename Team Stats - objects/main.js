const team = {
  _players: [
    {
      firstName: "Pete",
      lastName: "Wheeler",
      age: 54,
    },
    {
      firstName: "Rosie",
      lastName: "Down",
      age: 36,
    },
    {
      firstName: "Emil",
      lastName: "Dupont",
      age: 27,
    },
  ],
  _games: [
    {
      opponent: "Maigc",
      teamPoint: 316,
      opponentPoint: 210,
    },
    {
      opponent: "Cooking",
      teamPoint: 290,
      opponentPoint: 302,
    },
    {
      oponent: "Singing",
      teamPoint: 187,
      opponentPoint: 164,
    },
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  // Adds new player object to players array
  addPlayer(firstName, lastName, age) {
    const newPlayer = {
      firstName,
      lastName,
      age,
    };
    this.players.push(newPlayer);
  },

  // Adds new game object to game array
  addGame(opponent, teamPoints, opponentPoints) {
    const newGame = {
      opponent,
      teamPoints,
      opponentPoints,
    };
    this.games.push(newGame);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
team.addPlayer("Harry", "Potter", 25);
team.addPlayer("Bilbo", "Beggins", 104);

team.addGame("Hawks", 104, 127);
team.addGame("Forrests", 99, 83);
team.addGame("Paris", 113, 109);

console.log(team.players);
console.log(team.games);
