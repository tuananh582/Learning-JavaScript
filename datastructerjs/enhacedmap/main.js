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
const question = new Map([
    ['question','what is the best progamming language in the world ? '] ,
    [1,'C'],
    [2,'Java'],
    [3,'JavaScript'],
    ['Correct',3],
    [true,'Correct 😍'],
    [false,'Try Again! 😍'],

]);
console.log(question);

//Convert obejct to Map
console.log(Object.entries(hours))
const hoursMap= new Map(Object.entries(hours))
console.log(hoursMap)


console.log(question.get('question'))
for(const [key,value] of question){
    if(typeof key ==='number')
    console.log(`Answer ${key} :${value}`)

}

// const anwer= Number(prompt('Your answer'))
const answer=3
// if(answer!=)
console.log(question.get(question.get('Correct')===answer ))

// convert map to an  array
console.log([...question])
console.log([...question.keys()])
console.log([...question.values()])
// console.log()