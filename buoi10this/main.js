// console.log(this)
const calcage= function (birthyear){
    console.log(2023-birthyear)
    console.log(this)
}
calcage(2003)

const calcage2= (birthyear)=>{
    console.log(2023-birthyear)
    console.log(this)
}
calcage2(2002)

const jonas={
    year:1991,
    age:function(){
        console.log(this)
        console.log(2023-this.year )
    }
}
jonas.age()

const matilda={
    year:2017,

};
matilda.age=jonas.age
matilda.age()

const fin = jonas.age
fin()


// var firstname='joe biden'
const micheal={
    firstname:'tuananh',
    year:1991,
    age:function(){
        //Solution 1
        // console.log(2037-this.year)
        // const self=this
        // const isMilleninal=function(){
        //     console.log(self.year>=1981&&self.year<=1996)
        // }
        // isMilleninal()

        //Solution 2 using arrow functions
        console.log(2037-this.year)
        // const self=this
        const isMilleninal=()=>{
            console.log(this.year>=1981&&this.year<=1996)
        }
        isMilleninal()
    },
    greet:()=>{// never use arrow function in object just using expression function
        console.log(`Hey ${this.firstname}`)
    }
}
micheal.greet()
micheal.age()

//Arguments keyword
const addExpr=function(a,b){
    console.log(arguments)
    return a+b
}
addExpr(2,5)
addExpr(2,5,6,7,8,9)
var addArrow=(a,b)=>a+b


