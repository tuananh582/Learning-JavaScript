// 'use strict'
const lufthansa={
    airline:'Lufthansa',
    itataCode:'LH',
    bookings:[],
    book(flightNum,name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.itataCode} ${flightNum}`);
        this.bookings.push({flight:`${this.itataCode} ${flightNum}`,name})
    }

};
lufthansa.book(239,'Phuong Anh Bbi')
lufthansa.book(6356,'Pham Tuan Anh')
console.log(lufthansa)
const eurowing={
    airline:'Eurowings',
    itataCode:'Ew',
    bookings:[],
};

const book =lufthansa.book;
//Does not work
// book(23,'Truong Ngoc Ha')
//Call method


book.call(eurowing,23,'Truong Ngoc Ha') // use call to new object to tell the pointer point to  the new object
console.log(eurowing)

book.call(lufthansa,238,'Bao Bao')
console.log(lufthansa)

const swiss={
    airline :'Swiss Air Lines',
    itataCode:'LX',
    bookings:[]
}
book.call(swiss,583,"Marry Cooper")
console.log(swiss)

//Apply Method
const flightData = [584,'Geogrial Coper'];
book.apply(swiss,flightData)
console.log(swiss)

book.call(swiss,...flightData)

//Bind method
const bookEw=book.bind(eurowing)// return a new function
const bookLH=book.bind(lufthansa)
const bookLx=book.bind(swiss)
bookEw(23,'Sten Williams')

const bookEw23=book.bind(eurowing,23)
bookEw23('Pham Tuan Anh Bind')
bookEw23('Jhon coper')

// With Event Listenrs
lufthansa.planes=300
lufthansa.buyPlane=function(){
    console.log(this)
    this.planes++;
    console.log(this.planes)
};

document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa ))

//Partial application
const addTax=(rate,value)=>value+value*rate;
console.log( addTax(0.1,200))

const addVat = addTax.bind(null,0.23);
// addVat=value=>value+value*0.23
console.log(addVat(100))
console.log(addVat(23))

const addTaxrate=function(rate){
    return function(value){
        return value+value*rate;
    }
}
const addVat2= addTaxrate(0.23)
console.log(addVat2(100))
console.log(addVat2(23))

// console.log(addTaxrate(0.23)(100))