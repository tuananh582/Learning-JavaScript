const score0El= document.querySelector('#score--0')
const score1El= document.getElementById('score--1')
const diceEl=document.querySelector('.dice')
const player0El=document.querySelector('.player--0')
const player1El=document.querySelector('.player--1')

const btnnew=document.querySelector('.btn--new')
const btnroll=document.querySelector('.btn--roll')
const btnhold=document.querySelector('.btn--hold')
const current0El=document.getElementById('current--0')
const current1El=document.getElementById('current--1')
 // Starting condition
score0El.textContent=0
score1El.textContent=0
diceEl.classList.add('hidden')// add class hidden at class of index html 
let currentsocre=0// store value if you define currentscore under function the current score will run again each of click
// Rolling dice functionality
let activeplayer=0
btnroll.addEventListener('click',function(){
    //1 Generating a random dice roll 
    const dice= Math.trunc (Math.random()*6)+1
    // console.log(dice)
    //2 Display Dice
    diceEl.classList.remove('hidden')
    diceEl.src=`dice-${dice}.png`

    //3 Check for rolled it 1 : if true switch to next player
    if(dice!==1){
        // Add dice to current score
         
         currentsocre+=dice
         document.getElementById(`current--${activeplayer}`).textContent=currentsocre
        // current0El.textContent=currentsocre
    }
    else{
        // switch to next player
        document.getElementById(`current--${activeplayer}`).textContent=0
        currentsocre=0
        activeplayer=activeplayer=== 0 ? 1 : 0;
        player0El.classList.toggle('player--active')
        console.log(player0El)
        player1El.classList.toggle('player--active')
        console.log(player1El)
    }

})