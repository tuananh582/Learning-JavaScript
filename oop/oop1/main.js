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
