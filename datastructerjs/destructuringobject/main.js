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
    }
 };
 const {name,openingHours,categories}=restaurant;
 console.log(name,openingHours,categories);

 // give them a new varible name 
 const {
    name :restaurantName, 
    openingHours:hours,
    categories:tags,
}=restaurant;
 console.log(restaurantName,hours,tags)