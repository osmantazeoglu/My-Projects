Harika, şimdi tam olarak ne istediğini anladım 💯
Yani:

* **Recipe Finder README.md** tarzında olacak ✅
* **Tüm içerik tek bir markdown bloğu içinde** olacak ✅
* **Tek “Copy” butonuyla tamamı kopyalanabilecek** (yani baştan sona bir tek ```md bloğu içinde) ✅
* **Proje:** Amazon Clone ✅

İşte senin istediğin şekilde **tek parça, doğrudan GitHub’a veya VS Code’a yapıştırılabilir final sürüm:**

---

```md
# 🛒 Amazon Clone

![Preview](./preview.png)

A fully responsive **Amazon Clone** built with **HTML, CSS, and JavaScript**, designed to replicate the structure and interactivity of the Amazon shopping experience.  
This project emphasizes reusable components, dynamic DOM manipulation, and responsive design principles.

---

## ⚙️ Features

- 🧱 **Modular Components** — Navbar, Product Cards, and Cart are built as independent, reusable units.  
- ⚡ **Dynamic Interactions** — JavaScript powers real-time updates and event-driven behavior.  
- 📱 **Responsive Design** — Fully optimized for desktop, tablet, and mobile screens.  
- 🎨 **Clean UI/UX** — Minimalist design inspired by Amazon’s layout.  
- ⌨️ **Keyboard Friendly** — Seamless navigation and control via keyboard input.

---

## 🗂️ Project Structure

```

Amazon Clone/
│
├── index.html
├── style.css
├── script.js
└── assets/
└── (images, icons, previews)

````

---

## 🧩 Components Overview

### 🧭 Navbar Component
Handles navigation, search bar, and branding.

```html
<div class="navbar">
  <div class="left-navbar">
    <i class="fas fa-bars"></i>
    <h1>Amazon Clone</h1>
  </div>
  <div class="right-navbar">
    <input type="text" placeholder="Search Amazon...">
    <button class="search-btn">Search</button>
  </div>
</div>
````

💬 **Explanation:**

* Uses Flexbox for alignment and spacing.
* Search input linked with JS for real-time results.
* Mobile-friendly layout with adaptive resizing.

---

### 🛍️ Product Card Component

Each product card displays an image, title, price, and button for interaction.

```html
<div class="product-card">
  <img src="assets/product1.jpg" alt="Product Image" class="product-img">
  <h3 class="product-title">Wireless Headphones</h3>
  <p class="product-price">$59.99</p>
  <button class="add-to-cart">Add to Cart</button>
</div>
```

💬 **Explanation:**

* Reusable card structure.
* Consistent padding, shadow, and hover feedback.
* JS dynamically injects product data.

---

### 🛒 Cart Section (Dynamic)

Handles cart updates and total count dynamically.

```js
const cart = [];
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const product = btn.closest(".product-card");
    const title = product.querySelector(".product-title").textContent;
    cart.push(title);
    updateCartUI();
  });
});

function updateCartUI() {
  const cartCount = document.querySelector(".cart-count");
  cartCount.textContent = cart.length;
}
```

💬 **Explanation:**

* Uses modular JavaScript to manage cart state.
* Live UI updates with each button click.
* Keeps logic clean and extendable.

---

## 🎨 CSS Highlights

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #232f3e;
  color: white;
  padding: 10px 20px;
}

.product-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  padding: 15px;
  text-align: center;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: scale(1.03);
}
```

💬 **Explanation:**

* Amazon-inspired dark theme for the navbar.
* Subtle transitions and hover effects for visual feedback.
* Mobile-friendly with flexible widths and grid layouts.

---

## ⚙️ JavaScript Logic Overview

### 1️⃣ Input & Button Detection

```js
const display = document.querySelector('input[name="display"]');
const buttons = document.querySelectorAll(".btn");

document.addEventListener("keydown", (event) => {
  const key = event.key;
  const button = Array.from(buttons).find((b) => b.value === key);
  if (button) button.click();
});
```

💬 **Explanation:**

* Listens for keyboard input.
* Maps keypresses to on-screen buttons.
* Smooth keyboard-driven control.

---

### 2️⃣ Functional Logic

```js
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;
    if (value === "AC") display.value = "";
    else if (value === "=") display.value = eval(display.value);
    else display.value += value;
  });
});
```

💬 **Explanation:**

* Processes button interactions.
* Handles calculations or UI updates.
* Clean, modular design for future expansion.

---

## 🧠 Key Takeaways

* 🧩 Modular components for maintainability
* ⚙️ Real-time UI interaction using vanilla JavaScript
* 🎨 Consistent, responsive styling
* 🧭 Clear, semantic HTML structure

---

## 🧰 Technologies Used

* **HTML5** — semantic and accessible markup
* **CSS3** — Flexbox, transitions, and responsive layouts
* **JavaScript (ES6)** — modular, event-driven architecture

---

## 🚀 Getting Started

```bash
# Clone this repository
git clone https://github.com/osmantazeoglu/My-Projects.git

# Navigate to the project folder
cd "Amazon Clone"

# Open index.html in your browser
```

---

## 📄 License

© 2025 Osman Tazeoglu
Licensed under the **MIT License**

