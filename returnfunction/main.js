const greet = function(greeting){
    return function(name){
    console.log(`${greeting} ${name} `);
    }
}
const greeter = greet('hey');
greeter('Tuan Anh');
greeter('Phuong Anh BBi');
 
greet('Hello')('Dieu Anh')

const red=ret=>color=>console.log(`${ret} ${color}`)
// const redstar=red('Hi')
// redstar('Red')
// redstar('Yellow')
// red('Purple')

red('Hey')('Jude')