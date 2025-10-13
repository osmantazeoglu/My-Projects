var x = 10;
let y = 15;
const z = 20;

console.log("x = ", x);
console.log("y = ", y);
console.log("z = ", z);

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
  const textSpan = document.createElement('span');

  textSpan.textContent = todoText;
  listItem.appendChild(textSpan);
  list.appendChild(listItem);
  input.value = "";
}

add.addEventListener("click", addTodo);

const div = document.getElementById("test-div");
const button = document.getElementById("test-button");

button.addEventListener("click", function(){
   div.style.backgroundColor = 'red';
});
