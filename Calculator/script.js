const display = document.querySelector('input[name="display"]');
const buttons = document.querySelectorAll(".btn");

const operators = ["+", "-", "*", "/", "."];

const keyMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  "+": "+",
  "-": "-",
  "*": "*",
  "/": "/",
  ".": ".",
  Enter: "=",
  Delete: "AC",
  Backspace: "C",
};

document.addEventListener("keydown", (event) => {
  const key = event.key;
  const mappedKey = keyMap[key] ?? key;

  console.log("Pressed key:", mappedKey);

  const Presbtn = Array.from(buttons).find(
    (button) => button.value === mappedKey
  );

  if (Presbtn) {
    Presbtn.click();
    event.preventDefault();
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;

    if (value === "AC") {
      display.value = "";
    } else if (value === "C") {
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else if (operators.includes(value)) {
      const lastChar = display.value.slice(-1);
      if (!operators.includes(lastChar) && display.value !== "") {
        display.value += value;
      }
    } else {
      display.value += value;
    }
  });
});
