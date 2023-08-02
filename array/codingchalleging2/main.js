
const calcAverageHumanAge= function(ages){
    // let humange;
   const humanAges= ages.map(age=>age<=2?2*age:16+age*4)
    console.log(humanAges)
    const exclude = humanAges.filter(ageDog=>ageDog>=18)
    console.log(exclude)
    const average=exclude.reduce((acc,cur,i,arr)=>acc+cur/arr.length,0);
    // console.log(average);
    return average
}
const av1=calcAverageHumanAge([5,2,4,1,15,8,3])
const av2 =calcAverageHumanAge([16,6,10,5,6,1,4])
console.log(av1,av2)