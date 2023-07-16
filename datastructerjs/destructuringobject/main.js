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
 };

 restaurant.orderDeliver({
    time:'22:30',
    address:'United-Kingdom',
    mainIndex:2,
    starterIndex:2,
 });
 restaurant.orderDeliver({
    address:'London',
    starterIndex:1,
 });

 const {name,openingHours,categories}=restaurant;
 console.log(name,openingHours,categories);

 // give them a new varible name 
 const {
    name :restaurantName, 
    openingHours:hours,
    categories:tags,
}=restaurant;
 console.log(restaurantName,hours,tags);
 
 // Default Values
 const {menu=[],startermenu:starter=[]}=restaurant;
console.log(menu,starter);

// Mutating variables
let a =111;
let b=999;
const obj = {a:23,b:7,c:14};

 ({a,b}=obj) // Wrap it into parenthesis 
 console.log(a,b)

 //nested objects
 const {fri:{open,close}}= openingHours
 console.log(open,close)






 

//  let [a,,,b]=restaurant.categories;
//  [a,b]=[b,a]
//  console.log(a,b)
