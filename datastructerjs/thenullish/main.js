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

 //Nullish : null and undefined (Not 0 or '')
 restaurant.numerGuse=0
 const guestCorrt = restaurant.numerGuse ?? 10
 console.log(guestCorrt)
