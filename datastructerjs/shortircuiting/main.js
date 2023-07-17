const restaurant ={
    name :'Tuan Anh',
    location:'New York',
    categories:['Italian','vegetarian','Pizzeria','Organic'],
    startermenu:['Garlic','Bread','Focaccia'],
    mainMenu:['Pizza','Pasta','Rissto'],
    openingHours:{
        thu:{
            open:12,
            close:22,
        },
        fri:{
            open:11,
            close:23,
        },
        sat:{
            open:0, // open 24 hours
            close:24,
        },
    },

    order:function(starterIndex,mainIndex){
        return [this.startermenu[starterIndex],this.mainMenu[mainIndex]];
    },
    // orderDeliver:function(obj){  
    //     console.log(obj)
    // },
    orderDeliver:function({starterIndex=1,mainIndex=0,time='20:00',address}){ // We received object and we do immediately destructuring  
        console.log(`Order received ${this.startermenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} ant at ${time} `)
    },

    oderPasta:function(ing1,ing2,ing3){
        console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`)
    },

    oderPizza:function(MainIngredient,...otherIngredient){
        console.log(MainIngredient)
        console.log(otherIngredient)
    }
 };
 console.log(3||'Jonas')
 console.log(''||'Jonas')// the first is false and the second will be evaluated
 console.log(true||0)
 // 0 '' undefined are false values
 console.log(undefined||null)
 console.log(undefined||0||''||'Hello'||23||null) // Hello is the first truly value so it will return 

//  restaurant.numGuest=23
const guest = restaurant.numGuest ? restaurant.numGuest : 10
console.log(guest)

const guest2=restaurant.numGuest||10
console.log(guest2)
console.log('---And---')

console.log(0 && 'Jonas' ) // if the first is false the all of it will be false
console.log(7 && 'Jonas' )// if the first is true the alll of it will be true

console.log('Hello' && 23 && null && 'Jonas' )

// Practical example

if(restaurant.oderPizza){ // check if it exist
    restaurant.oderPizza('mushroom','spinach')
}
restaurant.oderPizza && restaurant.oderPizza('mushroom','spinach')
