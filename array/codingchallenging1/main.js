


const checkDog= function(dogsJulia,dogsKate){

    const dogsJuiliaCorrected =dogsJulia.slice()
    dogsJuiliaCorrected.splice(0,1)
    dogsJuiliaCorrected.splice(-2)

    console.log(dogsJuiliaCorrected)
    const dogs= dogsJuiliaCorrected.concat(dogsKate)
    console.log(dogs)
    dogs.forEach(function(dog,i){
        // if(dog>=3){
        //     console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`)
        // }
        // else{
        //     console.log(`Dog number ${i+1} is still a puppy 🐶 `)
        // }
        dog= dog>=3 ? `Dog number ${i+1} is an adult, and is ${dog} years old` : `Dog number ${i+1} is still a puppy 🐶 `
        console.log(dog)
    })
}
checkDog([3,5,2,12,6],[4,1,15,8,3])
