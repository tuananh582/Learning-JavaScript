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
console.log(restaurant)

