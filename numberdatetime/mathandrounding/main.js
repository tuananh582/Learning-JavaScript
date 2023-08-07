'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Tuan Anh',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Phuong Anh',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Truong Ngoc Ha',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Dieu Anh',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
console.dir(account4)
console.log(account4)

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//Write Code inside
const displayMovements=function(movements , sort = false){
    containerMovements.innerHTML=''

    const movs = sort ? movements.slice().sort((a,b)=>a-b): movements


    movs.forEach(function(mov, i){
        const type = mov>0 ?'deposit':'withdrawal'
        const html =`
        <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
        <div class="movements__value">${mov.toFixed(3)} $</div>
      </div>
        `
        containerMovements.insertAdjacentHTML('afterbegin',html)
        // console.log(containerMovements.innerHTML)
    })
}

const creatUserNames = function(accs){
  accs.forEach(function(acc){
   acc.username=acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');// Create username
  })

//   const username = user.toLowerCase().split(' ').map(name => name[0]).join('');
//  return username;
}

creatUserNames(accounts)
const calcDisplaySummary = function(acc){
  const incomes=acc.movements.filter(mov=>mov>0).reduce((acc,mov)=>acc+mov,0)
  labelSumIn.textContent=`${incomes.toFixed(3)} $ `

  const out= acc.movements.filter(mov=>mov<0).reduce((acc,mov)=>acc+mov,0)
  labelSumOut.textContent=`${Math.abs(out).toFixed(3)} $ ` // remove sign , negative value
  
  // const interest = movements.filter(mov=>mov>0).map(deposit=>deposit*1.2/100).filter((int,i,array)=>{
  //   return int>=10
  // }).reduce((acc,int)=>acc+int,0);
  const interest =acc.movements.filter(mov=>mov>0).map(deposit=>deposit*acc.interestRate/100).filter((int,i,array)=>{
    return int>=10
  }).reduce((acc,int)=>acc+int,0);
  labelSumInterest.textContent=`${interest.toFixed(3)} $`
}

console.log(accounts)
const calcPrintBalance =function(acc){
  acc.balance=acc.movements.reduce((acc,cur)=>acc+cur,0)
  // acc.balance=balance
  labelBalance.textContent=` $ ${acc.balance.toFixed(2)}`
  

}
const updateUi=function(acc){ // Refactoring code
  displayMovements(acc.movements)
  //Display balance 
calcPrintBalance(acc);
  //Display summary
calcDisplaySummary(acc)
}
//Event Handler
let currentAccount;

btnLogin.addEventListener('click',function(e){
  //Prevent form from submitting 

  e.preventDefault()

   currentAccount=accounts.find(acc=>acc.username ===inputLoginUsername.value || acc.owner===inputLoginUsername.value)
  //  currentAccount=accounts.find(acc=>{
  //       return acc.username||acc.owner===inputLoginUsername.value
  //  })
  // console.log('Login')
  console.log(currentAccount)
  if(currentAccount?.pin===Number(inputLoginPin.value)){
    //Display Ui and message
    console.log('login')
    // labelWelcome.textContent=`Welecomback, ${currentAccount.owner.split(' ')[0]}`; // Welcomback First Name
    labelWelcome.textContent=`Welecomback, ${currentAccount.owner}`; // Welcomback Full Name
    containerApp.style.opacity=100;
    //Clear input fields
    inputLoginUsername.value=inputLoginPin.value='';
    // inputLoginPin.value=inputLoginUsername.value='';
    inputLoginPin.blur()


    //DisPlay movement


    updateUi(currentAccount)

  



  };
  
})

btnTransfer.addEventListener('click',function(e){
  e.preventDefault()
  const amount= Number(inputTransferAmount.value)
  const receiveAcc= accounts.find ((acc)=>acc.username===inputTransferTo.value|| acc.owner===inputTransferTo.value)
  inputTransferAmount.value=inputTransferTo.value='';
  inputTransferAmount.blur()
  
  if(amount>0 && currentAccount.balance >=amount&&receiveAcc?.username!==currentAccount.username ){
    // console.log('Completely Transfered');
    currentAccount.movements.push(-amount)
    receiveAcc.movements.push(amount)
    //Update UI
    updateUi(currentAccount)
  }

});

btnLoan.addEventListener('click',function(e){
  e.preventDefault();
const amount= Math.floor(inputLoanAmount.value)
if( amount>0 && currentAccount.movements.some(mov=>mov>=amount*0.1) ){
  // Add movement
  currentAccount.movements.push(amount);
  //Update UI
  updateUi(currentAccount)
}
inputLoanAmount.value=''

})


//close //findIndex
btnClose.addEventListener('click',function(e){
  e.preventDefault()
  if(inputCloseUsername.value===currentAccount.username &&Number(inputClosePin.value)===currentAccount.pin){
    const index= accounts.findIndex((acc)=>acc.username===currentAccount.username)
    console.log(index);
    // Delete account
    accounts.splice(index,1)

    //Hide UI
    containerApp.style.opacity=0
  };
  inputCloseUsername.value=inputClosePin.value='';
  inputClosePin.blur();

  
});

let sorted = false;
 btnSort.addEventListener('click',function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements,!sorted);
  console.log(sorted)
  sorted=!sorted
 })





/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const max = movements.reduce((acc,mov)=>{
//   if(acc>mov){
//   return acc;
//   }
//   else{
//     return mov;
//   }

// },movements[0])
const max = movements.reduce((acc,mov)=>{
  
    if(acc>mov){
      return acc
    }
    else{
      return mov
    }
},movements[0])
console.log(max)

/////////////////////////////////////////////////

// const fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];

// const fruitCounts = fruits.reduce((accumulator, fruit) => {
//   console.log(`${accumulator} , ${fruit}`)
//   accumulator[fruit] = (accumulator[fruit] || 0) + 1;
//   return accumulator;
// }, {});

const euroToUsd=1.1
console.log(movements)
const totalDepositToUsd=movements.filter(mov=>mov>0)
// .map(mov=>mov*euroToUsd)
.map((mov,i,array)=>{
    // console.log(array) 
  return mov*euroToUsd
})
.reduce((acc,mov)=>acc+mov,0)
console.log(totalDepositToUsd)


//some
const anyDeposit = movements.some(mov=>mov>1500)
console.log(anyDeposit)

//every 
console.log(movements.every(mov=>mov>0));

//separate callback
const deposit =mov=>mov>0
console.log(movements.some(deposit))
console.log(movements.every(deposit))
console.log(movements.filter(deposit))


// sorting array
const owners=['Jonas','Zach','Adam','Martha']
console.log(owners.sort())
// console.log()

//Numbers
console.log(movements);
// console.log(movements.sort())
 //return <0 A,B(keep order)
 //return >0 B,A(switch order)

 //Ascending
// movements.sort((a,b) => {
//   if(a>b){
//     return 1;
//   }
//   if(a<b){
//     return -1;
//   }
// });
movements.sort((a,b) => a-b );
console.log(movements)
//Descending
// movements.sort((a,b) => {
//   if(a>b){
//     return -1;
//   }
//   if(a<b){
//     return 1;
//   }
// });
movements.sort((a,b) => b - a );
console.log(movements);


//Empty array + fill method 
const arr= [1,2,3,4,5,6,7];
console.log(new Array(1,2,3,4,5,6,8))

const x = new Array(7)
console.log(x)
x.fill(1)
x.fill(1,3,5)
console.log(x)
arr.fill(23,2,6) // It's similar to slice method
console.log(arr)

//Array.from
const y = Array.from({length:7},()=>1);
console.log(y)

const z = Array.from({length:7},(cur,i)=>i+1) // Array.From to generate Array, it's like a map
console.log(z)

labelBalance.addEventListener('click',function(){
  const movementUi = Array.from(document.querySelectorAll('.movements__value'),el=>el.textContent.replace('$',''));
  console.log(movementUi)

})

  

  console.log(23===23.0)
  console.log(0.1+0.2)

 console.log(Math.sqrt(25))
 console.log(25**(1/2))//output 5
 console.log(8**(1/3))//output 2

 console.log(Math.max(5,18,23,11,2))// return 23
 console.log(Math.max(5,18,'23',11,2))// return 23 
 console.log(Math.max(5,18,'23px',11,2))// return NaN 

 console.log(Math.min(5,18,23,11,2)) // return 2

 console.log(Math.PI * Number.parseFloat('10px') **2)
 console.log(2**3)

 console.log(Math.trunc(Math.random()*6)+1)

 const randomInt =(min,max)=>Math.trunc(Math.random()*(max-min)+1)+min;
 //0...20 --> 0...(max-min) --> if we plus min we have --> min...(max-min+min)
 console.log(randomInt(10,20))


 //Rounding integer

 console.log(Math.round(23.3))//output 23
 console.log(Math.round(23.9))//output 24
 console.log(Math.round(23.9))
console.log(Math.ceil(23.9))// output 24

console.log(Math.floor(23.9))// like trunc but different with negative number

console.log(Math.trunc(-23.3))//output -23
console.log(Math.floor(-23.3))// output -24


// Rouding decimals
console.log((2.7).toFixed(0)) // to fixed will return a string not a number 
console.log((2.7).toFixed(3)) //return 2.700
console.log((2.345).toFixed(2)) //return 2.35

console.log(+(2.345).toFixed(2))// convert string to number

console.log((70000).toFixed(3))



//Remainder Operator
console.log(5%2)
console.log(5/2)

console.log(8%3)
console.log(6%2)

labelBalance.addEventListener('click',function(){

    [...document.querySelectorAll('.movements__row')].forEach(function(row,i){
            if(i%2===0){
                row.style.backgroundColor=' #ed74e7  '
            }
            if(i%3===0){
                row.style.backgroundColor=' #8b9ee8 '
            }
    })
})

//numeric
const diameter = 287_450_000_000
console.log(diameter)

const priceCents = 345_99;
console.log(priceCents)

const Transfee1 =15_00;''
const Transfee2 =1_500;


