
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
   

  };
 

  // Task 1: 
  const [player1,player2]=game.players
  console.log(player1,player2)
  
  // Task 2:
  const [gk,...fieldPlayers]=player1
  console.log(gk,fieldPlayers)
 
  // Task 3 :
  console.log('--Task 3---')
const allPlayers=[...player1,...player2]
console.log(allPlayers)

// Task 4 :
console.log('--Task 4---')
const playerFinals=[...player1,'Thiago','Coutinho','Perisic']
console.log(playerFinals)
 
//Task 5:
console.log('--Task--5--')
const {odds:{
    team1,
    x:draw,
    team2

}}=game
console.log(team1,draw,team2)

//Task 6 

const printGoals = function(...players){
    console.log(players)
    console.log(`We have ${players.length} who scored`)

}
printGoals(...game.scored)

// Task 7 :
team1>team2 && console.log(' Team 1 is more likely to win')
team2>team1 && console.log(' Team 2 is more likely to win')


  