function bankAccount(balance) {
  return {
    deposit: (amount) => {
      balance += amount;
      return balance;
    },
    withdraw: (amount) => {
      if (amount > balance) {
        return "Yetersiz bakiye";
      }
      balance -= amount;
      return balance;
    },
    getBalance: () => balance,
  };
}

let myAccount = bankAccount(100);
console.log(myAccount.deposit(50));
console.log(myAccount.withdraw(250));
console.log(myAccount.deposit(50));
console.log(myAccount.withdraw(150));
