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