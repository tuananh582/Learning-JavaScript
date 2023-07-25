'use strict ';
const weekdays=['mon','tue','wed','thu','fri','sat','sun'];
// const [,,,thu,fri,sat]=weekdays
const hours={
    [weekdays[3]]:{
        open:12,
        close:22,
    },
    [weekdays[4]]:{
        open:11,
        close:23,
    },
    [`day-${2+4}`]:{
        open:0, // open 24 hours
        close:24,
    },
};




const restaurant ={
    name :'Tuan Anh',
    location:'New York',
    categories:['Italian','vegetarian','Pizzeria','Organic'],
    startermenu:['Garlic','Bread','Focaccia'],
    mainMenu:['Pizza','Pasta','Rissto'],
    // enhanced object literals
    // openingHours:openingHours,
    hours,

    order(starterIndex,mainIndex){
        return [this.startermenu[starterIndex],this.mainMenu[mainIndex]];
    },
    // orderDeliver:function(obj){  
    //     console.log(obj)
    // },
    orderDeliver({starterIndex=1,mainIndex=0,time='20:00',address}){ // We received object and we do immediately destructuring  
        console.log(`Order received ${this.startermenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} ant at ${time} `)
    },

    oderPasta(ing1,ing2,ing3){
        console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`)
    },

    oderPizza(MainIngredient,...otherIngredient){
        console.log(MainIngredient)
        console.log(otherIngredient)
    }
 };

//  const card = function(card){
//         const cardimg= card+""
//         const last=cardimg.slice(-4)
//         return last.padStart(cardimg.length,'*')
//  }
//  console.log(card(21378127321321))
//  console.log(card(37218937131))
// console.log (card(2317391723921))


// const capitialname = function(name){
//     const names=name.split(' ')
//     const nameUpper=[]
//     for(const n of names){
//         nameUpper.push(n.replace(n[0],n[0].toUpperCase()))
//     }
//     console.log(nameUpper.join(' '))
    

// }
// capitialname('anna depaul micheal' )
// capitialname('pham tuan anh')
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


document.querySelector('button').addEventListener('click',function(){
    const text = document.querySelector('textarea').value
    console.log(text)
    const rows=text.split('\n')
    console.log(rows)

    for(const [i,row] of rows.entries()){
       const [first,second] =  row.toLowerCase().trim().split('_')
    //    console.log(i,row)
//    console.log(row,first,second)
    //    const output=`${first}${second.replace(second[0],second[0].toUpperCase())}`
    //     console.log(output)
    const output=`${first}${second.replace(second[0],second[0].toUpperCase())}`
    console.log(`${output.padEnd(20)}${'✅'.repeat(i+1)}`)
    }

})

// underscore_case
//  first_name
// Some_Variable 
//   calculate_AGE_Name
// delayed_departure




