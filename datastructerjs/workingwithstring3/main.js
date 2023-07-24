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

 //Split and join

console.log('a+very+nice+string'.split('+'))
console.log('Pham Tuan Anh'.split(''))

const [firstName,lastName]='Pham TuanAnh'.split(' ')
const newName=['Mr.',firstName,lastName.toUpperCase()].join(' ') // join will return an array as a string 
console.log(newName)

const capitalizeName= function(name){
    const names=name.split(' ')
    // console.log(names)
    const nameUpper=[]
    // for(const n of names){
    //    nameUpper.push( n[0].toUpperCase() + n.slice(1))
    // }
    // console.log(nameUpper.join(' '))
    for(const n of names){
    //   nameUpper.push(n[0].toUpperCase()+n.slice(1)) // Way 1
    //   console.log(nameUpper)
    //Way2
        nameUpper.push(n.replace(n[0],n[0].toUpperCase()))
    }
    console.log(nameUpper.join(' '))
}
capitalizeName('jessica anna smith david')
capitalizeName('Pham tuanAnh')

//Padding
const message=' Go to gate 23!'
console.log(message.padStart(20,'+').padEnd(30,'+'))// add + (plus) until the length is 25
console.log('Jonas'.padStart(25,'+').padEnd(30,'+'))

const markCreditCard=function(number){
    const str=number + ''// it will convert to a string
    const last=str.slice(-4)
    return last.padStart(str.length,"*")
}
console.log (markCreditCard(32317218))
console.log (markCreditCard(37218378712637812))
console.log(markCreditCard('321837126783621312321'))


//Repeat Method
const message2=' Bad weather...All Departures Delayed ... '
console.log(message2.repeat(5))

const planes=function(n){
    console.log(`There are ${n} planes in line ${'🛩️'.repeat(n)}`)
}
planes(5)
planes(3)
planes(12)
planes(8)





