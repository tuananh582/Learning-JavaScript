const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//  const balance = movements.reduce(function(acc,cur,i,array){
//     console.log(`Iteration ${i}:${acc}`)   
//     return  acc+cur;
//  },0);
const balance = movements.reduce((acc,cur)=>acc+cur,0)
    // console.log(`Iteration ${i}:${acc}`)   
    // return  acc+cur;
 console.log(balance)

 let balance2=0
 for (const mov of movements) balance2+=mov
 console.log(balance2)