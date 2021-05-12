const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((sum, currentNumber) => sum + currentNumber);
console.log('sum', sum);

const product = numbers.reduce((product, currentNumber) => product * currentNumber);
console.log('product', product);

const balance = account.reduce((balance, currentBalance) => {
  if (currentBalance.type === 'deposit') {
    return balance + currentBalance.amount;
  }
  return balance - currentBalance.amount;
}, 0);
console.log('balance', balance);

const composite = traits.reduce((composite, trait) => {
  return Object.assign(composite, trait);
}, {});
console.log('finalObject', composite);
