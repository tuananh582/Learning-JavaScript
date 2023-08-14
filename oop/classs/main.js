// Class expression


//Class Declaration
class PersonCl{
    constructor(fullName,birthYear){
        this.fullName=fullName;
        this.birthYear=birthYear;
    }
    calcAge(){
        console.log(2023-this.birthYear);
    }
    get age(){
        return 2037-this.birthYear;
    }
    set fullName(name){
        console.log(name)
        if(name.includes(' '))this._fullName=name;
        else console.log(`${name} is not a full name !`)
    }
    get fullName(){
        return this._fullName;
    }
    static hey(){
        console.log('Hey There')
    }
}
const jessica= new PersonCl('Pham Tuan Anh',2003);
console.log(jessica)
jessica.calcAge();
console.log(jessica.age)

PersonCl.prototype.greet= function(){
    console.log(`Hey ${this.firstName}`)
}
jessica.greet()
const walter = new PersonCl('Walter',1965)
const account = {
    owner : 'tuananh',
    movements:[200,530,120,300],

    get latest(){
        return this.movements.slice(-1).pop();
    },
    set latest(mov){
        this.movements.push(mov)
    }
}
console.log(account.latest)
account.latest=50;
console.log(account.movements)

//Static Methods
// PersonCl.hey=function(){
//     console.log('Hey There ')
//     console.log(this)
// }
// PersonCl.hey();
PersonCl.hey();


//Obeject.creat
const PersonProto = {
    calcAge(){
        console.log(2037-this.birthYear);
    },
    init(firtName,birthYear){
        this.firstName=firtName;
        this.birthYear=birthYear;
    },
};

const steven = Object.create(PersonProto);
steven.name='Steven';
steven.birthYear=2002;
steven.calcAge()
const sarah = Object.create(PersonProto);
sarah.init('Sarah',1979);
sarah.calcAge()


const Person = function(firstName, birthYear){
    this.firstName=firstName;
    this.birthYear=birthYear;
};
Person.prototype.calcAge= function(){
    console.log(2037- this.birthYear);
};

const Student = function(firstName,birthYear,course){
   Person.call(this,firstName,birthYear)
    this.course=course;
}
console.log(Student.prototype)

//Linking prototype

Student.prototype = Object.create(Person.prototype);



Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and i study ${this.course}`)
}

const mike = new Student('Mike',2020,'Computer Science');
console.log(mike)
mike.introduce();
mike.calcAge();

console.log(mike.__proto__)

class StudentsCl extends PersonCl{
    constructor(fullName,birthYear,course){
        //Always need to happen first 
        super(fullName,birthYear)
        this.course=course;
    }
    introduce(){
        console.log(` My name is ${this.fullName} and I study ${this.course}`)
    }
    calcAge(){
        console.log(`I'm ${2037-this.birthYear} years old, but as a student i feel more like ${2037-this.birthYear+10}`)
    }
}

const martha = new StudentsCl('Phun Anh',2003,'Information Teachnology')
martha.introduce();
martha.calcAge();

//
const StudentProto= Object.create(PersonProto);
StudentProto.init=function(firstName,birthYear,course){
    PersonProto.init.call(this,firstName,birthYear);
    this.course=course
}
StudentProto.introduce = function(){
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
}
const jay = Object.create(StudentProto)
jay.init('Jay',2010,'Compputer')
jay.introduce()
jay.calcAge()

//
class Account{
    //Public fiels
    locale=navigator.language;
    //Private Fields
    #movements = [];

     #pin;

    constructor(owner,currency,pin){
        this.owner=owner;
        this.currency=currency;
        this.#pin=pin;
        //Protected property
        // this._movements=[];
        // this.locale = navigator.language
    }
    
    //Public interface
    getMovement(){ // can access movements
        return this.#movements;
    }
    deposit(val){
        this.#movements.push(val)
        return this
    }
    withdraw(val){
        this.deposit(-val)
        return this;
    }
    _approveLoan(val){
        return true;
    }
    requestLoan(val){
        if(this._approveLoan(val)){
            this.deposit(val)
            console.log(`${this}`)// this is current object
            return this;
            
        }
    }
    //Private  Methods
    #approveLoan(val){
        return true;
    }
}
const acc1= new Account('Tuan Anh','EuRO',111,)
// acc1.movements.push(250)
// acc1.movements.push(-14)
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1._approveLoan(1200)
console.log(acc1)

console.log(acc1.getMovement())
//Protect
// Private Class
// console.log(acc1.#pin)// Euro

//Chaining 
acc1.deposit(300).deposit(400).withdraw(353).requestLoan(25000).withdraw(4000)// you have to return this in order to do that
console.log(acc1.getMovement())