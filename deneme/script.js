// Closure
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

// Event Bubbling and Event Delegation
document.getElementById("parent").addEventListener("click", () => {
  console.log("parent div tiklandi");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("child buton tiklandi");
});

document.getElementById("menu").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(event.target.innerText + " tıklandı!");
  }
});

document.getElementById("add").addEventListener("click", () => {
  const newLi = document.createElement("li");
  newLi.innerText = "Adress";
  menu.appendChild(newLi);
});

function sayHello(name) {
  return "Merhaba " + name;
}

const sayHello1 = (name1) => {
  return "Merhaba " + name1;
};

console.log(sayHello1("Osman"));
console.log(sayHello("Osman"));
