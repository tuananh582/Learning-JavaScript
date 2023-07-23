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
console.log(airline.toLowerCase())
console.log(airline.toUpperCase())

//Fix capitialization in name
const passenger='jOnAs'//Jonas
const passengeLower=passenger.toLowerCase()
const passengerCorrect = passengeLower[0].toUpperCase()+passengeLower.slice(1)

console.log(passengerCorrect)

// Comparing Email

const email='hello@tuananh.io'
const loginEmail=' Hello@TuanAnh.IO \n'

// const lowerEmail= loginEmail.toLowerCase()
// const trimEmail= lowerEmail.trim()
// console.log(trimEmail)
// console.log(lowerEmail)

const normalizedEmail = loginEmail.toLowerCase().trim()
console.log(normalizedEmail)
console.log(email===normalizedEmail)

//Replacing 
const priceGB='288,97&'
const priceUs=priceGB.replace('&','$').replace(',','.');
console.log(priceUs)

const announcement= 'All passengers come to barding door 23,Boarding door 23'

console.log(announcement.replace('door','gate')) // it just change the first string was found
// console.log(announcement.replace('door','gate'))
console.log(announcement.replace( /door/g ,'gate')) // Using regular Experrsion to change all replacement


//Booleans
const plane='Airbus A320neo'
console.log(plane.includes('A320')) //ouput true
console.log(plane.includes('Boeing'))//ouput false
console.log(plane.startsWith('Air'))//ouput true

if(plane.startsWith('Airbus')&&plane.endsWith('neo')){
    console.log('Part of the New AirBus Family')
}
// Pratice Excersise
const checkBaggage= function(items){
        const baggage = items.toLowerCase()
        if(baggage.includes('knife') || baggage.includes('gun')){
            console.log('Your are not allowed on board')
        }
        else{
            console.log('Welecome aboard')
        }
}
checkBaggage('I have a laptop, some Food and a pocket Knife')
checkBaggage('Socks and camera')
checkBaggage('Got some snacks and a gun for protection')

// Set in mind: Alway convert input from user to to LowerCase. That is easy to handle 