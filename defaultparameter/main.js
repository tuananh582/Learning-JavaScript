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