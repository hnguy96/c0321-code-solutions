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

Account.prototype.getBalance = function () {
  var totalBalance = 0;
  if (this.transactions.length === 0) {
    return 0;
  }
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      totalBalance += this.transactions[i].amount;
    } else {
      totalBalance -= this.transactions[i].amount;
    }
  }
  return totalBalance;
};
