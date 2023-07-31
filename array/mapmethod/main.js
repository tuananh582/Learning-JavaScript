const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurTousd=1.1;
// const moveMenuUsd=movements.map(function(mov){
//     return  mov*eurTousd;
//     // return 23;
// })
const moveMenuUsd=movements.map(mov=>  mov*eurTousd);

console.log(moveMenuUsd)
const moveMenuUsdfor = [];;
for(const mov of movements){
    moveMenuUsdfor.push(mov*eurTousd)
}
console.log(moveMenuUsdfor)

const movementDescription=movements.map((mov,i)=>
    // if(mov>0){
    //     return `Movements ${i+1} : You deposited ${mov}`
    // }
    // else{
    //     return `Movement ${i+1}: You withdrew ${Math.abs(mov)} `
    // }
    `Movements ${i+1} : You ${mov>0 ? 'deposited':'withdrew'} ${Math.abs(mov)}`
)
console.log(movementDescription)