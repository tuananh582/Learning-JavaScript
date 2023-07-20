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

  //Task 1 :
for(const [i,player] of  game.scored.entries()){
    console.log(`Goal ${i+1} :${player} `)
}


// Task 2 :
const odds=Object.values(game.odds)
let avarage=0
for(const odd of Object.values(game.odds)){
    avarage+=odd;
}
// console.log(odds.length)
avarage/=odds.length
console.log(avarage)
// Task 3 :
for(const [team,odd] of Object.entries(game.odds)){
    // console.log(team)
    // console.log(game[team])
    // const teamStr=team==='x' ? 'draw': `victory ${game[team]}`
    // console.log(`Odd of ${teamStr} ${odd}`)

    const teamStr=team==='x'?'draw':`victory ${game[team]}`

    console.log(`Odd of ${teamStr} ${odd}`)
}




  
 