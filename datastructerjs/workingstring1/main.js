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
 const airline='TAP Air Portugal'
 const plane = 'A320';
 console.log(plane[0])
 console.log(plane[1])
 console.log(plane[2])
 console.log('B737'[0])
 console.log(airline.length)
 console.log('B737'.length)

 console.log(airline.indexOf('r'))// OutPut 6
 console.log(airline.lastIndexOf('r'))

console.log(airline.slice(4))// OUTPUT Air Portugal
console.log(airline.slice(4,8))// OUTPUT Air 

console.log(airline.slice(0,airline.indexOf('r')))
console.log(airline.slice(airline.lastIndexOf(' ')+1))

console.log(airline.slice(-2))
console.log(airline.slice(1,-1))


const checkMiddleSeat=function(seat){
    const s = seat.slice(-1)
    if(s==='B'||s==='E'){
        console.log('you got the middle seat 😀')
    }
    else{
        console.log('You got lucky 😍')
    }

}

checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')

console.log( typeof new String('Jonas'))
console.log( typeof new String('Jonas'))
console.log( typeof new String('Jonas').slice(1)) // when we call method on a string Javascript will return string Even if called on a string object


