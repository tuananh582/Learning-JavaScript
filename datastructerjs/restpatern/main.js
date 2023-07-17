const arr=[1,2,...[3,4]]

//Rest, beaucse on left side of
const [a,b,...others]=[1,2,3,4,5]
console.log(a,b,others)

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

 const [pizza,,risoto,...otherfood]=[...restaurant.mainMenu,...restaurant.startermenu];
 console.log(pizza,risoto,otherfood);


//Objects
const {sat,...weekdays}=restaurant.openingHours
console.log(weekdays)

//2 Funtions
const add = function(...numbers){
    // console.log(numbers)
    let sum=0
    for(let i =0;i<numbers.length;i++){
        sum+=numbers[i]
    }
    console.log(sum)
}
add(2,3,4,5,6)
add(8,15,16,12,22)
add(0,36,37)

const x=[23,5,7];
add(...x);
restaurant.oderPizza('mushroom','onion','olives','spinach');
restaurant.oderPizza('mushroom');