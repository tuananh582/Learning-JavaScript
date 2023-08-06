const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
  ];

dogs.forEach(food => {
    food.recommendedFood =Math.trunc( food.weight **0.75*28);
});
console.log(dogs)
//2
const dogSarah= dogs.find(dog=>dog.owners.includes('Sarah'))
console.log(`Sarah Dog is eating too ${dogSarah.curFood > dogSarah.recommendedFood ? 'much' :'little'}`)

const ownersEatTooMuch= dogs.filter(dog=>dog.curFood>dog.recommendedFood).flatMap(dog=>dog.owners)
console.log(ownersEatTooMuch)
const ownersEatTooLittle = dogs.filter(dog=>dog.curFood<dog.recommendedFood).flatMap(dog=>dog.owners)
console.log(ownersEatTooLittle)

console.log(`${ownersEatTooMuch.join(' and ')}'s Dog eat too much`)
console.log(`${ownersEatTooLittle.join(' and ')}'s Dog eat too much`)

console.log(dogs.some(dog=>dog.curFood===dog.recommendedFood))

//8
const dogsCopy =dogs.slice().sort((a,b)=>a.recommendedFood - b.recommendedFood)
console.log(dogsCopy)