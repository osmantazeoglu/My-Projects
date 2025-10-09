# 🧮 Calculator

A minimal and responsive calculator built with **HTML**, **CSS**, and
**JavaScript**.\
This project demonstrates clean UI structure, keyboard support, and
efficient event-driven calculation handling.

------------------------------------------------------------------------

## 🌐 Preview

![Calculator Preview](./images/calculator-ui.png)

> Example screenshot of the calculator interface.\
> *(If the image does not load, ensure `images/calculator-ui.png` exists
> in the repo.)*

------------------------------------------------------------------------

## ⚙️ Setup

No dependencies required --- works directly in your browser.

``` bash
# Clone this repository
git clone https://github.com/osmantazeoglu/My-Projects.git
cd "My-Projects/Calculator"
```

Then open **index.html** in any modern browser (double-click or drag
into browser window).

------------------------------------------------------------------------

## 💡 Features

-   🧩 Basic operations: `+`, `−`, `×`, `÷`
-   🔢 Double-zero (`00`) support
-   ⚙️ Decimal input (`.`)
-   🧼 `C` = Clear one, `AC` = Clear all
-   ✅ `=` evaluates the expression
-   ⌨️ Full keyboard input mapping
-   🎨 Responsive, mobile-friendly UI

------------------------------------------------------------------------

## 🧱 Project Structure

    Calculator/
    ├── index.html
    ├── styles.css
    ├── script.js
    └── images/

------------------------------------------------------------------------

## 🧩 HTML Snippet

Defines calculator buttons and layout.

``` html
<!-- Partial snippet from index.html -->
<div class="calculator">
  <form onsubmit="return false">
    <div class="display">
      <input type="text" name="display" placeholder="0" autocomplete="off">
    </div>
    <div>
      <input type="button" value="AC" class="Clear btn">
      <input type="button" value="C" class="Del btn">
      <input type="button" value="." class="btn operator">
      <input type="button" value="/" class="btn operator">
    </div>
    ...
  </form>
</div>
```

------------------------------------------------------------------------

## 🎨 CSS Theme (Excerpt)

``` css
:root {
  --bg: #e3e3e3;
  --panel: #3a4452;
  --text: #ffffff;
  --btn-bg: #eef1f5;
  --btn-text: #222222;
  --op-bg: #556074;
  --accent: #ff9500;
  --radius: 10px;
  --space: 10px;
}

.calculator {
  background-color: var(--panel);
  padding: 20px;
  border-radius: var(--radius);
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}
```

------------------------------------------------------------------------

## ⚙️ JavaScript Logic

### 🧠 Input Handling

``` js
document.addEventListener("keydown", (event) => {
  if (document.activeElement === display) return;
  const mappedKey = keyMap[event.key];
  const btn = Array.from(buttons).find(b => b.value === mappedKey);
  if (btn) {
    btn.click();
    event.preventDefault();
  }
});
```

### ⚡ Calculation Logic

``` js
if (value === "=") {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
```

> ⚠️ **Note:** `eval()` is used here for simplicity and demonstration
> purposes. It should not be used in production applications for
> security reasons.

------------------------------------------------------------------------

## 🧠 Example Usage

``` text
12 + 8 = 20
9 × 3 = 27
5.7 + 8.5 = 14.2
50 ÷ 2 = 25
```

------------------------------------------------------------------------

## 📄 License

This project is licensed under the **MIT License**.\
See the [LICENSE](./LICENSE) file for details.

------------------------------------------------------------------------
