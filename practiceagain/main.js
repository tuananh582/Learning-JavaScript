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


const creatusername=function(accs){
        // acc.user=acc.owner.
        accs.forEach(function(acc){
            acc.user=acc.owner.toLowerCase().split(' ').map(acc=>acc[0]).join('');
        });
}
creatusername(accounts)
// console.log(accounts)
const displayMovements = function(movements,sort = false){
    containerMovements.innerHTML= '';
    const movs =sort? movements.slice().sort((a,b)=>a-b):movements
    
    movs.forEach(function(mov,i){
    const type = mov>0? 'deposit' :'withdrawal';
       const html =`<div class="movements__row">
       <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
       <div class="movements__value">${mov.toFixed(3)} $</div>
     </div>`
     containerMovements.insertAdjacentHTML('afterbegin',html)
    });

}
const calcPrintBalance=function(accs){
    accs.balance= accs.movements.reduce((acc,cur)=>acc+cur,0)
    labelBalance.textContent=`${accs.balance} $`
}
const displaySummary=function(acc){
    const incomes= acc.movements.filter(acc=>acc>0).reduce((ac,cur)=>ac+cur,0)
    labelSumIn.textContent=`${incomes.toFixed(3)}$`
    const out= acc.movements.filter(acc=>acc<0).reduce((ac,cur)=>ac+cur,0)
    labelSumOut.textContent=`${out.toFixed(3)}$`
    const intersest= acc.movements.filter(acc=>acc>0).map(deposit=>deposit*acc.interestRate/100).filter(acc=>acc>10).reduce((ac,cur)=>ac+cur,0)
    labelSumInterest.textContent=`${intersest.toFixed(3)}$`


}



const updateUi=function(acc){
    displayMovements(acc.movements)
    calcPrintBalance(acc)
    displaySummary(acc)
}
let currentAccount;
btnLogin.addEventListener('click',function(e){
    e.preventDefault();
    currentAccount=accounts.find(acc=>acc.user===inputLoginUsername.value||acc.owner===inputLoginUsername.value);
    if(currentAccount?.pin === Number(inputLoginPin.value)){
        console.log('login')
        labelWelcome.textContent=`Welcomeback, ${currentAccount.owner}`
        containerApp.style.opacity=100
        updateUi(currentAccount);
    
    };
    

})
btnTransfer.addEventListener('click',function(e){
    e.preventDefault();
    const amount= Number(inputTransferAmount.value);
    const receiveAcc= accounts.find(acc=>acc.user===inputTransferTo.value)
    if(amount<=currentAccount.balance&&receiveAcc?.user!=currentAccount.user){
                currentAccount.movements.push(-amount);
                receiveAcc.movements.push(amount);
                updateUi(currentAccount);
    }


})
btnLoan.addEventListener('click',function(e){
    e.preventDefault();
    const loan = Number(inputLoanAmount.value);
    if(loan>=0&&currentAccount.movements.some(mov=>mov>=loan*0.1)){
        currentAccount.movements.push(loan)
        updateUi(currentAccount)
    }
})
btnClose.addEventListener('click',function(e){
    e.preventDefault();
    if(inputCloseUsername.value===currentAccount.user&&Number(inputClosePin.value)===currentAccount.pin){
        const index= accounts.findIndex(acc=>acc.user===currentAccount.user)
        accounts.splice(index,1)
        containerApp.style.opacity=0;

    }

})
let sort=false
btnSort.addEventListener('click',function(e){
    e.preventDefault()
    displayMovements(currentAccount.movements,!sort)
    sort=!sort// after click the sort will be true 
})






