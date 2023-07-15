'use strict';
 const restaurant ={
    name :'Tuan Anh',
    location:'New York',
    categories:['Italian','vegetarian','Pizzeria','Organic'],
    startermenu:['Garlic','Bread','Focaccia'],
    mainMenu:['Pizza','Pasta','Rissto'],

    order:function(starterIndex,mainIndex){
        return [this.startermenu[starterIndex],this.mainMenu[mainIndex]]
    }
 }

 const arr=[2,3,4]
 const a=arr[0]
 const b=arr[1]
 const c=arr[2]
 const [x,y,z]=arr
 console.log(x,y,z)
 console.log(arr)

 let [main, , secondary]= restaurant.categories;
 console.log(main,secondary);

 // Switching variable
//  const temp=main
//  main=secondary
//  secondary=temp
//  console.log(main,secondary)

//Tricky switch variable
[main,secondary]=[secondary,main];
console.log(main, secondary);

 console.log(restaurant.order(2,0));
// Receive 2 return values from the function
 const [starter,menu]=restaurant.order(2,0);
//  [starter,menu] = [menu,starter];
 
 console.log(starter,menu);
 

 // Destructuring nested array
 const nested=[2,4,[5,6]]
 const [i,,[j,k]]=nested
 console.log(i,j,k)


 //Default values
 const [p,q,r]=[8,9]
 console.log(p,q,r)


