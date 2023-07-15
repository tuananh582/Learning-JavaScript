let age=30
let oldAge=age
age=31
console.log(age)
console.log(oldAge)

const me={
    name:'Jonas',
    age:30,
}
const friend=me
friend.age=27
console.log('Friend',friend)
console.log('Me',me)


//Primitive types
let lastname='William'
let oldlastname=lastname
lastname='Davis'

// now the value of lastname = Davis and the oldlastname still equal initial lastname
console.log(lastname,oldlastname)
//Reference Types
const jessica={
    firstname:'Jessica',
    lastname:'Williams',
    age:27,
}

const marriedjessica=jessica
marriedjessica.lastname='David'
console.log('Before marriage',jessica)
console.log('After marriage',marriedjessica)


//Copying Object
const jessica2={
    firstname:'Jessica',
    lastname:'Williams',
    age:27,
    family:['Alice','Bob'] // if we change the array one of them, it's also gonna be changed in the other one
}
const jesiicacopy=Object.assign({},jessica2) //Assigin using when we want to copy object we can use the function to store object or empty object
jesiicacopy.lastname='Davis'

jesiicacopy.family.push('John')
// jesiicacopy.family.push('Micheal')

console.log('Before Marriage',jessica2)
console.log('After Marriage',jesiicacopy)


