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
 const rest = new Map()
 rest.set('name','Classsic Italiano')
 rest.set(1,'Firenze,Italy')
console.log( rest.set(2,'Lisonn,Portugal'))

rest.set('categories',['Italian','vegetarian','Pizzeria','Organic'])
.set('open',11)
.set('close',23)
.set(true,'We are open')
.set(false,'We are  closed')

console.log(rest.get('name'))
console.log(rest.get(true))
console.log(rest.get(1))

const time =21
console.log(rest.get(time>rest.get('open')&& time<rest.get('close')))


console.log(rest.has('categories'))
rest.delete(2)
// console.log(rest)
// rest.clear()// erase all element inside map
const arr=[1,2]
// rest.set([1,2],'test') // can not retrieve beacause it's object . This is object in memory
rest.set(arr,'test')
rest.set(document.querySelector('h1'),'Heading')
console.log(rest)
console.log(rest.size)

// console.log(rest.get([1,2]))//   this arrray
console.log(rest.get(arr))


