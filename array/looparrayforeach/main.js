const movements=[200,450,-400,3000,-650,-130,70,1300]

for(const [i,value] of movements.entries()){
    if(value>0){
        console.log(`Movement ${i+1} : You deposited ${value}`)
    }
    else{
        console.log(`Movement ${i+1} :  You withdrew ${Math.abs(value)}`)
    }
}

console.log('For Each')
movements.forEach(function(mov,i,arr){
    if(mov>0){
        console.log(`mov ${i+1} : You deposited ${mov}`)
    }
    else{
        console.log(`mov ${i+1} :  You withdrew ${Math.abs(mov)}`)
    }
}); 

// For each can not use break and continue for loop otherwise for of can do that 







// const items = ["item1", "item2", "item3"];
// const copyItems = [];

// // before
// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i]);
// }
// console.log(copyItems)
// // after
// items.forEach((item) => {
//   copyItems.push(item);
// });
// console.log(copyItems)

