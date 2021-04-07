/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var transactionDeposit = new Transaction('deposit', amount);
    this.transactions.push(transactionDeposit);
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var transactionWithdrawal = new Transaction('withdrawal', amount);
    this.transactions.push(transactionWithdrawal);
    return true;
  }
  return false;
};

// Account.prototype.getBalance = function(){
//   if (this.transactions) {
//     return this.transactionDeposit - this.transactionWithdrawal;
//   }
// }
