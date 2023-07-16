
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
    }
 };
const arr=[7,8,9]
const badnewArr=[1,2,arr[0],arr[1],arr[2]]
console.log(badnewArr)
const newArr=[1,2,...arr];
console.log(newArr)

console.log(...newArr)

const newMenu=[...restaurant.mainMenu,'Gnocci']
console.log(newMenu)

//Copy array
const mainMenuCopy=[...restaurant.mainMenu];

//join 2 arrays
const menu=[...restaurant.startermenu,...restaurant.mainMenu];
console.log(menu);

//Iterablees :arrays,strings,maps,sets , not Objects
const str='Jonas'
const letters=[...str,'','S.']
console.log(letters)
console.log(...str)
// console.log(`${...str}`)
// const ingredients=[prompt('Let \'s make pasta Ingredient 1?'),prompt('Ingredient2?'),prompt('Ingredient 3 ')]
// console.log(ingredients)

// restaurant.oderPasta(...ingredients)

//Objects
const newRestaurant={Foundedin:1998,...restaurant,founder:'Guiness'}
console.log(newRestaurant)

const restaurantcopy={...restaurant}
restaurantcopy.name='Risorant Roma'
console.log(restaurantcopy.name)
console.log(restaurant.name)



// const drinks={
//     name:'Wine',
//     type:['alcohol','Slight','Addiction'],
//     year:2003,
//     typeofcus:['employee','boss','pilot','student'],
//     oderdrinks:function(statedrink,maindrinks ){
//         return [this.type[statedrink],this.typeofcus[maindrinks]]
//     },

// }



