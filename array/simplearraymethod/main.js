let arr = ['a','b','c','d','e'];
console.log(arr.slice(2))
console.log(arr.slice(2,4))//output c,d
console.log(arr.slice(-2)) //output d,e
console.log(arr.slice(-1))//output e
console.log(arr.slice(1,-2))//output b,c

//Splice
console.log(arr.splice(2))// delete them
console.log(arr)


//Reverse 
const arr2=[1,2,3,4,5,6,7];
console.log(arr2.reverse())

//Concat
const letters = arr.concat(arr2)
console.log(letters)