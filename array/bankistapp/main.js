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

    const movs= sort ? movements.slice().sort((a,b)=>a-b): movements


    movs.forEach(function(mov, i){
        const type = mov>0 ?'deposit':'withdrawal'
        const html =`
        <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
        <div class="movements__value">${mov} $</div>
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
  labelSumIn.textContent=`${incomes} $ `

  const out= acc.movements.filter(mov=>mov<0).reduce((acc,mov)=>acc+mov,0)
  labelSumOut.textContent=`${Math.abs(out)} $ ` // remove sign , negative value
  
  // const interest = movements.filter(mov=>mov>0).map(deposit=>deposit*1.2/100).filter((int,i,array)=>{
  //   return int>=10
  // }).reduce((acc,int)=>acc+int,0);
  const interest =acc.movements.filter(mov=>mov>0).map(deposit=>deposit*acc.interestRate/100).filter((int,i,array)=>{
    return int>=10
  }).reduce((acc,int)=>acc+int,0);
  labelSumInterest.textContent=`${interest} $`
}

console.log(accounts)
const calcPrintBalance =function(acc){
  acc.balance=acc.movements.reduce((acc,cur)=>acc+cur,0)
  // acc.balance=balance
  labelBalance.textContent=` $ ${acc.balance}`
  

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
const amount= Number(inputLoanAmount.value)
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
