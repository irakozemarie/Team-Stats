const team = {
    _players: [],
    _games: [],
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      const newPlayer = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this._players.push(newPlayer);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      const newGame = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this._games.push(newGame);
    }
  };
  
  team.addPlayer('Peter', 'neretse', 34);
  team.addPlayer('Makenzi', 'John', 12);
  team.addPlayer('Emy', 'Stecy', 56);
  
  team.addGame('Volleyball', 100, 98);
  team.addGame('basketball', 74, 84);
  team.addGame('seetball', 94, 88);
  
  console.log(team.players);
  console.log(team.games);