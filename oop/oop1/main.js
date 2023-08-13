'use strict';

const Person = function(firstName,birthYear){
    // console.log(this)
    this.firstName=firstName;
    this.birthYear=birthYear;

    //Never to this 
    // this.calcAge=function(){
    //     console.log(2027-this.birthYear)
    // }

}
const tuananh = new Person('Tuan Anh',2003);
console.log(tuananh)
//1. New {} is created
//2. Function is called, this ={}
//3. {} linked to prototype 
//4. function automatically return {}

const matilda = new Person('Matilda',2017);
const jack = new Person('Jack',2015);
const jay ='Jay';
console.log(matilda,jack)
console.log(jack instanceof Person)// true
console.log(jay instanceof Person)// false

//Prototypes
console.log(Person.prototype);
Person.prototype.calcAge=function(){
    console.log(2037-this.birthYear);
};
tuananh.calcAge();//it can access beacause inheritance
matilda.calcAge();
console.log(tuananh.__proto__)
console.log(tuananh.__proto__===Person.prototype)// true

console.log(Person.prototype.isPrototypeOf(jack))
console.log(Person.prototype.isPrototypeOf(Person))// false


Person.prototype.species='Homo Sapienes';
console.log(jack.species,matilda.species)

console.log(jack.hasOwnProperty('firstName'));

//Object.prototype (top of prototype chain)
console.log(jack.__proto__.__proto__)
console.log(jack.__proto__.__proto__.__proto__)

console.dir(Person.prototype.constructor)

const arr=[3,6,6,7,7,8,9,11];
console.log(arr.__proto__)
console.log(arr.__proto__===Array.prototype)

Array.prototype.unique = function(){
     return [...new Set(this)]
}
console.log(arr.unique())

const h1 = document.querySelector('h1')