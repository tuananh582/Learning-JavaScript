'use strict'
const bookings=[]
const creatBooking= function(
    flightNum,numPassengers=1,price=199*numPassengers
    ){
    //ES5
    // numPassengers=numPassengers||1
    // price=price||199
  
    const booking={
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
}
creatBooking('LH123')
creatBooking('Lh123',2,800)
creatBooking('LH123',2)
creatBooking('LH123',5)
creatBooking('LH123',undefined,1000)

// New Lecture
const flight ='LH234'
const tuananh={
    name :'Tuan Anh',
    passport:3215367215321,
}
const checkIn=function(flightnum,passenger){
    flightnum='LH999'
    passenger.name='Mr.'+passenger.name
    if(passenger.passport===3215367215321){
        alert('Check in ') 
    }else{
        alert('Wrong passport')
    }
}
checkIn(flight,tuananh)
console.log(flight)
// console.log(tuananh)
 
// Is the same as doing ...
// const flightnum=flight
// const passenger=tuananh

const newPassport = function(person){
    person.passport=Math.trunc(Math.random()*100000000000)
}
newPassport(tuananh)
checkIn(flight,tuananh)
console.log(tuananh)