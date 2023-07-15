function calcage(birthyear){
    const age=2023-birthyear
    function printage(){
        let output=` ${firstname} , you are ${age} , born in ${birthyear}`
        console.log(output)
        if(birthyear>=1981 && birthyear<=1996){
            var millenial=true
            const firstname='Steven'
            const str =`Oh you're a millenial, ${firstname}`
            console.log(str)
            //Redefine outer scope's variable
            output= 'New OutPut!'
        }

        console.log(millenial)
        console.log(output)
    }

    printage()

    // console.log(firstname)
    return age
}
const firstname='jonas'
calcage(1991)