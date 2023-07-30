// const rest= new Map()
// rest.set(1,'tuananh')
// rest.set(2,'tuananh')
// rest.set(3,'tienananh')
// console.log(rest)
// rest.set('ingredient',['tomato','banana','avacoda','gratefruit'])
// rest.set('open',11)
// rest.set('close',9)

// rest.set(true,'opened ')
// rest.set(false,'closed')
// const time=12
// console.log(rest.get(time>rest.get('open')&& time>rest.get('close')));

// console.log(rest.size)
// // console.log(rest.get(arr))
// // const arr=[1,2]
// // rest.set(arr,'test')
// // console.log(rest.get(arr))

// const arr=[1,2]
// rest.set(arr,'test')
// console.log(rest.get(arr))

//  rest.delete(3)
// console.log(rest)

//Set
// const rest = new Set()
// rest.add({
//     name:'tuananh',
//     age:18,
// })
// rest.add({
//     hotel:'restaurant'
// })
// // console.log(rest)
// console.log(rest.has(3))
// const staff = ['Chef','Service','Assitant Chef','Manager']
// const newarr =[...new Set(staff)]
// console.log(newarr)

// for(const day of rest.values()){
//     console.log(day)
// }


// const nameChange = function(name){
//     const dlname=name.split(' ')
//     const upername=[]
//     for(const names of dlname){
//         upername.push(names.replace(names[0],names[0].toUpperCase()))
//         // upername.push(names[0].toUpperCase()+names.slice(1))
//     }
//     console.log(upername.join('-'))


// }
// nameChange('pham tuan anh')
// nameChange('anna david micheal')

const inforperson=[
    {
        id:1,
        name:'Tuan Anh',
    },
    {
        id:2,
        name:'Phuong Anh Bbi',
    },
    {
        id:3,
        name:'Truong Ngoc Ha'
    }
]

const person = new Set()
for(const value of inforperson){
    person.add(value)

}
console.log(person)

//convert to array
const person2 = [...person]
console.log(person2)


// const myMap = new Map();
// myMap.set("key1", "value1");
// myMap.set("key2", "value2");
// myMap.set("key3", "value3");

// const myArray = [...myMap];
// console.log(myArray);

// const myMap = new Map();
// myMap.set("key1", "value1");
// myMap.set("key2", "value2");
// myMap.set("key3", "value3");

// const myArray = Array.from(myMap);
// console.log(myArray);

const myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key3", "value3");

// const valuesArray = Array.from(myMap.values());
// const keysArray = Array.from(myMap.keys());

// console.log(valuesArray);
// console.log(keysArray);

// for (const [key,value] of myMap)
// {
//     console.log(`${key} : ${value}`)
// }



