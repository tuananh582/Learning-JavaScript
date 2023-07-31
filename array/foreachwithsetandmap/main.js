//Map
const currencies = new Map([
    ['Use','United States dollar'],
    ['Eur','Euro'],
    ['GBP','Pound sterling'],
]);

currencies.forEach(function(value,key,map){
    console.log(`${key} : ${value} `)
})
 
//Set
const cuurencisUnique = new Set(['USD','GPB',
'USB','EURO','EURO']);
console.log(cuurencisUnique)
cuurencisUnique.forEach(function (value,_,map){
    console.log(`${value} : ${value} `) // the key is exact the same value ... A set doesn't have the key
})


const person = new Map()
person.set('name','tuan anh')
person.set('age','20')
person.set('hobbies',['football,playing game'])
person.forEach(function (value,key){
    console.log(`${key} , ${value}`)
})