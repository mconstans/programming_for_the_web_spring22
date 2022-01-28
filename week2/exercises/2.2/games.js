const response = window.prompt('There are a total of 5 games in my collection. Pick a random number between 1 and 5 and let me tell you about one of the games.');
const favGames = [
    {title: 'Scrabble', type: 'board game', numberOfPlayers: '2-4', rating: '8 out of 10. ', shortDescription: 'a crossword style game with wooden tiles each with a letter of the alphabet words that can be used to create words and score points'},
    {title: 'What Do You Meme?', type: 'Card Game', numberOfPlayers: '2-8', rating: '10 out of 10. ', shortDescription: 'a humorous game in which players propose caption cards as a match to a designated photo (or meme) card. The judge of the round chooses the caption that they think is the best match to photo card, and whoever played that card gets a point.'},
    {title: 'Ticket to Ride', type: 'board game', numberOfPlayers: '2-5', rating: '7 out of 10. ', shortDescription: 'a cross-country train adventure in which players collect and play matching train cards to claim railway routes connecting cities throughout North America. The longer the routes, the more points they earn.'},
    {title: 'Clue', type: 'board game', numberOfPlayers: '2-6', rating: '9 out of 10. ', shortDescription: 'a murder mystery game whose objective is to determine who murdered the victim, where the crime took place, and which weapon was used. Each player assumes the role of one of the six suspects and attempts to deduce the correct answer by strategically moving around a game board representing the rooms of a mansion and collecting clues about the circumstances of the murder from the other players.'},
    {title: 'Cribbage', type: 'Card game', numberOfPlayers: '2-4', rating: '6 out of 10. ', shortDescription: 'a mathematical based game, involving playing and grouping cards in combinations which gain points.'}
]
const arrIndex = Number(response) - 1;

window.alert('You selected ' + favGames[arrIndex].title + ' which is a ' + favGames[arrIndex].type + '. This game is for ' + favGames[arrIndex].numberOfPlayers + ' players. I rate it as ' + favGames[arrIndex].rating + 'It is ' + favGames[arrIndex].shortDescription);
console.log(favGames);