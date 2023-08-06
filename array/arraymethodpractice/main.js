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

//   const bankDeposit = account

  //3
  const sums = accounts.flatMap(acc=>acc.movements).reduce((sum,cur)=>{
    // cur >0? sum.deposits+=cur : sum.withdrawls+=cur;
    sum[cur>0 ? 'deposits' :  'withdrawls' ] +=cur
    return sum;
},{deposits:0 , withdrawls:0})

console.log(sums)

const convertTitleCase = function(title){
    const expectations =['a','an','the','but','or','on','in','with'];

    const titleCase = title.toLowerCase().split(' ').map(word=>expectations.includes(word)? word:word[0].toUpperCase()+word.slice(1))
    return titleCase.join(' ')
}
console.log(convertTitleCase('this is a nice title'))
console.log(convertTitleCase('this is a Long title but not too long'))
console.log(convertTitleCase('and here is another title with an example'))