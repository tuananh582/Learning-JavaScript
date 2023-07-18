const rest1={
    name:'Capri',
    namGuests:0,
};
const rest2={
    name:'La Piazaa',
    owener:'Giovanni Rossi',
};

// // OR assignment operator
rest1.namGuests = rest1.namGuests || 10;
rest2.namGuests = rest2.namGuests || 10;

// rest1.namGuests||=10
// rest2.namGuests||=10
console.log(rest1)
console.log(rest2)
console.log('after')
 // // nullish assignment operator
rest1.namGuests??=10
rest2.namGuests??=10
console.log(rest1)
console.log(rest2)
// rest1.owener=  rest1.owener && 'Annymous';// Way 1 if it false will return undefined
// rest2.owener=  rest2.owener && 'Annymous';
//Way 2 short ciruiting  if it's false will be nothing happen  :
rest1.owener&&="Annoymus"
rest2.owener&&='Annoymus'

console.log(rest1)
console.log(rest2)