const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);

//Task 1:
const events= [...new Set(gameEvents.values())]
console.log(events)
 
//Task 2:
gameEvents.delete(64)

//Task 3:


const time =[... gameEvents.keys()].pop() // get keys and it will delete  the last key 
console.log(time)
console.log(`An event happend , on average , every ${time/gameEvents.size} minutes`)

// Task 4:
for(const [min,event] of gameEvents){
    const half=min<=45?'First' : 'Second'
    console.log(` ${half} [HALF] ${min} : ${event}`)
}
