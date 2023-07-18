const restaurant ={
    name :'Tuan Anh',
    location:'New York',
    categories:['Italian','vegetarian','Pizzeria','Organic'],
    startermenu:['Garlic','Bread','Focaccia'],
    mainMenu:['Pizza','Pasta','Rissto'],
    openingHours:{
        // mon:{
        //     open:10,// output 10
        // },
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
if(restaurant.openingHours&&restaurant.openingHours.mon){
    console.log(restaurant.openingHours.mon.open)
}
console.log(restaurant.openingHours.mon?.open)// if it exist it will be return values and it does not exsit it will be return undefined
console.log(restaurant.openingHours?.mon?.open)

// Example
const days =['mon','tue','wed','thu','fri','sat','sun']
 for(const day of days){
    console.log(day)
const open = restaurant.openingHours[day]?.open ?? 'closed'
    console.log(`On ${day}, we open at ${open}`)
 }


 //Methods
 console.log(restaurant.order ?.(0,1)??'Method does not exsist')
 console.log(restaurant.orderEz ?.(0,1)??'Method does not exsist')

 // Arrays
 const users=[{
    name:'Jonas',
    email:'Hello@gmail',
 }];
console.log(users[0]?.name??'User array empty')
