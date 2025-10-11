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

// Object ile HashMap gibi kullanım
let ogrenciler = {
  101: "Ahmet",
  102: "Ayşe",
  103: "Mehmet",
};

// Erişim
console.log(ogrenciler["101"]); // Ahmet

// Yeni eleman ekleme
ogrenciler["104"] = "Zeynep";
console.log(ogrenciler["104"]);

// Güncelleme
ogrenciler["102"] = "Fatma";
console.log(ogrenciler["102"]);

// Silme
delete ogrenciler["103"];

// Tüm veriyi dolaşma
for (let key in ogrenciler) {
  console.log(key, ogrenciler[key]);
}

let araba = {
  marka: "Toyota",
  model: "Corolla",
  yil: 2020,
};

for (let key in araba) {
  console.log(key, araba[key]);
}

let meyveler = ["Elma", "Armut", "Muz"];

for (let meyve of meyveler) {
  console.log(meyve); // Elma, Armut, Muz
}

let araba1 = { marka: "Toyota", model: "Corolla", yil: 2020 };

// Key’ler üzerinde dönmek
for (let key of Object.keys(araba1)) {
  console.log(key); // marka, model, yil
}

// Value’lar üzerinde dönmek
for (let value of Object.values(araba1)) {
  console.log(value); // Toyota, Corolla, 2020
}

// Hem key hem value
for (let [key, value] of Object.entries(araba1)) {
  console.log(key, value);
}

let sayilar = [10, 20, 30];
sayilar.forEach(function (sayi) {
  console.log(sayi);
});

const inputtext = document.getElementById("inp-area");
const phonenumber = document.getElementById("number");
const searchbtn = document.getElementById("search-btn");

let telefonRehberi = {
  Ahmet: "05321234567",
  Ayşe: "05439876543",
  Mehmet: "05551239876",
};

searchbtn.addEventListener("click", function () {
  const numbername = inputtext.value.trim();
  const foundnumber = telefonRehberi[numbername];

  if(foundnumber){
    phonenumber.textContent = foundnumber;
  }
  else{
    phonenumber.textContent = "kayit bulunamadi";
  }
});
