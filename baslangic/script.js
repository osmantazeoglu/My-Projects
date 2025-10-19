let num = 18;

if (num % 2 == 0) {
  console.log(num + " cift sayidir");
} else {
  console.log(num + " tek sayidir");
}

for (let i = 1; i <= 5; i++) {
  console.log("i = ", i);
}

const list = document.getElementById("list");
const input = document.getElementById("input");
const add = document.getElementById("btn");

function addTodo() {
  const todoText = input.value.trim();
  if (todoText === "") {
    alert("please add a todo");
    return;
  }

  const listItem = document.createElement("li");
  const textSpan = document.createElement("span");

  textSpan.textContent = todoText;
  listItem.appendChild(textSpan);
  list.appendChild(listItem);
  input.value = "";
}

add.addEventListener("click", addTodo);

const div = document.getElementById("test-div");
const button = document.getElementById("test-button");

button.addEventListener("click", function () {
  div.style.backgroundColor = "red";
});

const likeBtn = document.getElementById("like-btn");
const likeCount = document.getElementById("like-count");

let isLiked = false;

likeBtn.addEventListener("click", function () {
  if (isLiked === false) {
    const count = likeCount.textContent;
    let newCount = Number(count);
    newCount = newCount + 1;
    likeCount.textContent = newCount;
    isLiked = true;
  } else {
    const count = likeCount.textContent;
    let newCount = Number(count);
    newCount = newCount - 1;
    likeCount.textContent = newCount;
    isLiked = false;
  }
});

// Object array (veryc popular)
const kullanicilar = [
  { isim: "Ali", yas: 25 },
  { isim: "Ayşe", yas: 30 },
  { isim: "Mehmet", yas: 28 },
];

const ayse = kullanicilar.find(function (k) {
  return k.isim === "Ayşe";
});

console.log(ayse); // { isim: "Ayşe", yas: 30 }

// Arrow function ile (daha kısa)
const ali = kullanicilar.find((k) => k.isim === "Ali");
console.log(ali); // { isim: "Ali", yas: 25 }

// Yaşı 28'den büyük ilk kişi
const buyuk = kullanicilar.find((k) => k.yas > 28);
console.log(buyuk); // { isim: "Ayşe", yas: 30 }

const array = [3, 6, 2, 56, 32, 5, 89, 32];
let largest = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i] > largest) {
    largest = array[i];
  }
}
console.log(largest);

const sayilar = [15, 42, 8, 103, 27, 250];
const enBuyuk = Math.max(...sayilar);
console.log(enBuyuk);

const sayilar1 = [15, 42, 8, 103, 27, 3];
const enKucuk = Math.min(...sayilar1);
console.log(enKucuk); // 8

// Bir linke tıklandığında normalde sayfayı değiştirir
// preventDefault() ile bunu durduruyoruz

const link = document.querySelector("a");

link.addEventListener("click", function (event) {
event.preventDefault(); // Sayfa değişmesini durdur
  console.log("Link tıklandı ama sayfa açılmadı!");
});

