'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Tuan Anh',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2022-11-18T21:31:17.178Z',
    '2022-12-23T07:42:02.383Z',
    '2023-01-28T09:15:04.904Z',
    '2023-04-01T10:17:24.185Z',
    '2023-05-08T14:11:59.604Z',
    '2023-08-05T17:01:17.194Z',
    '2023-08-03T23:36:17.929Z',
    '2023-08-08T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Phuong Anh',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2022-11-01T13:15:33.035Z',
    '2022-11-30T09:48:16.867Z',
    '2022-12-25T06:04:23.907Z',
    '2023-01-25T14:18:46.235Z',
    '2023-02-05T16:33:06.386Z',
    '2023-04-10T14:43:26.374Z',
    '2023-06-25T18:49:59.371Z',
    '2023-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
const formatMovementDate=function (date,locale){
  // console.log(date)
  const calccdayPassed = (date1,date2)=>Math.round(Math.abs(date2-date1)/(1000*60*60*24));
  const dayPassed=calccdayPassed(new Date(),date)
  console.log(dayPassed)
  if(dayPassed===0){
    return 'Today'
  }
  if(dayPassed===1){
    return 'Yesterday'
  }
  if(dayPassed<=7){
    return `${dayPassed} days ago`;
  }
//   else{
    
//     const day = `${date.getDay()}`.padStart(2,0)
//     const month =`${date.getMonth()+1}`.padStart(2,0)
//     const year=date.getFullYear();
//     return `${day}/${month}/${year}`
//   }
return new Intl.DateTimeFormat(locale).format(date);
  // const hour=date.getHours();
  // const min = date.getMinutes();
  // labelDate.textContent=`${day}/${month}/${year},${hour}:${min}`;
  // const displayDate =`${day}/${month}/${year}`;
}


const displayMovements=function(acc, sort = false){
  containerMovements.innerHTML=''
  
  const movs = sort ? acc.movements.slice().sort((a,b)=>a-b): acc.movements;
  
  
  movs.forEach(function(mov, i){
    const type = mov>0 ?'deposit':'withdrawal';
    const date = new Date(acc.movementsDates[i]);

    const displayDate =formatMovementDate(date,acc.locale)


        const html =`
        <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
        <div class="movements__date">${displayDate}</div>
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
  displayMovements(acc)
  //Display balance 
calcPrintBalance(acc);
  //Display summary
calcDisplaySummary(acc)
}
//Event Handler

//Experimenting API
const news = new Date();
const options ={
    hour:'numeric',
    minute:'numeric',
    day: 'numeric',
    month:'long',
    year:'numeric', // or 2 digit
    weekday: 'long'
    
}
const locale = navigator.language;
console.log(locale)


labelDate.textContent= new Intl.DateTimeFormat(locale,options).format(news)

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
// Current Date
    // const now= new Date();
    // const day = `${now.getDate()}`.padStart(2,0);
    // const month = `${now.getMonth()+1}`.padStart(2,0);
    // const year = now.getFullYear();
    // const hour= `${now.getHours()}`.padStart(2,0);
    // const min = `${now.getMinutes()}`.padStart(2,0);
    // labelDate.textContent=`${day}/${month}/${year},${hour}:${min}`;

    //Add international time
    const news = new Date();
const options ={
    hour:'numeric',
    minute:'numeric',
    day: 'numeric',
    month:'numeric',
    year:'numeric', // or 2 digit
    // weekday: 'long'

}
// const locale = navigator.language;
// console.log(locale)


labelDate.textContent= new Intl.DateTimeFormat(currentAccount.locale,options).format(news)


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
    
    //Add Transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiveAcc.movementsDates.push(new Date().toISOString());
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
  //Add Transfer date
  currentAccount.movementsDates.push(new Date().toISOString());
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

const Transfee1 =15_00;
const Transfee2 =1_500;

console.log(2**53-1)
console.log(Number.MAX_SAFE_INTEGER)
console.log(2**53+1)
console.log(2**53+2)
console.log(2**53+3)
console.log(2**53+4)


console.log(867378621873687217387219379217n)
console.log(BigInt(867378621873687217387219379217))

//Operations
console.log(10000n+10000n)
console.log(867378621873687217387219379217n+10000n)

const huge=872163712631321321n
const num = 23;
console.log(huge*BigInt(num)) 
//Exceptions
console.log(20n>15)// true
console.log(20n===20)// false
console.log(typeof 20n)

console.log(20n=='20')
console.log(huge+' is REALLY big !!!')


//Division
console.log(10n /3n)
console.log(10/3)


//Date and Time
// const now = new Date();
// console.log(now)

// console.log(new Date('Aug 08 2023 11:57:29'))
// console.log(new Date('December 24,2015'))
// console.log(new Date(account1.movementsDates[0]))

// console.log(new Date(2037,10,19,15,23,5))
// console.log(new Date(2037,11,33))

// console.log(new Date(0))
// console.log(new Date(3*24*60*60*1000))

//Working with dates
const future = new Date(2037,10,19,15,23,5)
console.log(future)
console.log(future.getFullYear())//2037
console.log(future.getMonth())//10
console.log(future.getDate())//19
console.log(future.getDay())//4
console.log(future.getHours())//15
console.log(future.getMinutes())//23
console.log(future.getSeconds())//5
console.log(future.toISOString())//international standard time
console.log(future.getTime())//2142231785000

console.log(new Date(2142231785000))

console.log(Date.now())
console.log(new Date(1691472576849))

future.setFullYear(2040);
console.log(future)


//Fake Alaways Logged in
currentAccount=account1;
updateUi(currentAccount);
containerApp.style.opacity=100;

// const now= new Date();
// const day = `${now.getDate()}`.padStart(2,0);
// const month= `${now.getMonth()+1}`.padStart(2,0);
// const year= now.getFullYear();
// const hour= now.getHours();
// const min = now.getMinutes();
// labelDate.textContent=`${day}/${month}/${year},${hour}:${min}`;
//Day/month/year


//Add Date to bankistapp


//Operation Date
const future2= new Date(2037,10,19,15,23)
console.log(+future2)

const calccdayPassed = (date1,date2)=>Math.abs(date2-date1)/(1000*60*60*24);
const days1=calccdayPassed(new Date(2037,3,4), new Date(2037,3,14));
console.log(days1);

