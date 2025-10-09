🛍️ Amazon Clone

A modular JavaScript web app replicating Amazon’s shopping interface using component-based architecture.
Designed with a clean UI, reusable components, and efficient state management for category-based product rendering.

🌐 Preview

<!-- Replace with your actual image -->

⚙️ Setup

No additional setup is required — just open index.html in your browser.

# Clone this repository

git clone https://github.com/osmantazeoglu/My-Projects.git
cd "My-Projects/Amazon Clone"
open index.html

💡 Features

🧩 Modular product card components

🔍 Category-based filtering system

🛒 Add to Cart interaction

⚡ Dynamic rendering with store subscription model

🎨 Responsive and clean Amazon-like design

🧱 Project Structure
Amazon Clone Page/
├── index.html
├── styles.css
├── product-card.css
├── script.js
├── product-card.js

🧩 HTML Components
🔹 Navbar & Category Section

Defines the navigation bar, search bar, and category filter.

<!-- Partial snippet -->
<header class="navbar">
  <div class="navbar-logo">
    <img src="./images/amazon-logo.png" alt="Amazon Logo">
  </div>
  <div class="navbar-search">
    <input type="text" id="search-input" placeholder="Search for products...">
    <button id="search-btn"><i class="fas fa-search"></i></button>
  </div>
  <div class="navbar-cart">
    <i class="fas fa-shopping-cart"></i>
    <span>Cart</span>
  </div>
</header>

<section class="category-section">
  <span class="filter-label">Filter by Category</span>
  <div id="dropdownList" class="custom-dropdown-list"></div>
</section>

📘 This section defines user interaction areas for navigation and category-based filtering.

🎨 CSS Highlights

Focuses on responsive layout, product grid design, and dropdown styling.

.navbar {
display: flex;
align-items: center;
justify-content: space-between;
background-color: #131921;
padding: 10px 20px;
color: white;
}

.product-card {
background-color: #fff;
border-radius: 10px;
box-shadow: 0 4px 12px rgba(0,0,0,0.08);
overflow: hidden;
transition: transform 0.2s ease;
}

.product-card:hover {
transform: scale(1.03);
}

.custom-dropdown-list {
position: absolute;
background-color: white;
border-radius: 10px;
max-height: 200px;
overflow-y: auto;
box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

🎨 Maintains a clean, modular layout for a realistic Amazon-style experience.

⚙️ JavaScript — Core Logic
🧠 State Management with store.js

A reactive store that triggers UI updates when state changes.

store.data = {
searchText: '',
selectedCategory: 'All'
};

store.subscribe(newState => {
renderCategory(newState);
renderProducts(newState);
});

🧩 This store pattern enables smooth re-rendering of filtered product lists.

🧱 Component: Product Card Generator

Defined in productcard.js — dynamically builds each product card from data.

export function createProductCard(product) {
const card = document.createElement('div');
card.classList.add('product-card');

card.innerHTML = `    <div class="product-image">
      <img src="${product.image}" alt="${product.title}">
    </div>
    <div class="product-info">
      <h3>${product.title}</h3>
      <p class="author">${product.author}</p>
      <div class="rating">${'⭐'.repeat(product.rating)}</div>
      <p class="price">${product.price} TL</p>
      <button class="add-btn">Add to Cart</button>
    </div>
 `;

card.querySelector('.add-btn')
.addEventListener('click', () => alert(`${product.title} added to cart!`));

return card;
}

💡 Each product card acts as an independent, reusable UI component.

⚡ Rendering Products

Handles filtering and rendering logic for category and search interactions.

function renderProducts(newState) {
const filtered = newState.selectedCategory === 'All'
? products
: products.filter(p => p.category === newState.selectedCategory);

productContainer.innerHTML = "";
filtered.forEach(product =>
productContainer.appendChild(createProductCard(product))
);
}

📚 Filters and re-renders only the relevant products dynamically.

🔍 Category Renderer

Displays the active category and allows clearing the filter.

function renderCategory(newState) {
categoryDisplayContainer.innerHTML = "";

if (newState.selectedCategory === 'All') return;

const categoryDisplay = html`    <div class="category-display">
      <p class="category-result">Category:</p>
      <span class="categories">${newState.selectedCategory}</span>
      <button class="clearbutton">clear</button>
    </div>
 `;

categoryDisplay.querySelector('.clearbutton')
.addEventListener('click', () => store.update({ selectedCategory: 'All' }));

categoryDisplayContainer.appendChild(categoryDisplay);
}

🔄 Dynamic category rendering — updates only when the selected category changes.

🧠 Example Flow

User selects “Electronics” → state updates selectedCategory.

UI re-renders only matching product cards.

User clicks Add to Cart → alert or cart update triggers.

Layout remains responsive on all device sizes.

📄 License

Licensed under the MIT License.

⭐ Support

If you like this project, please ⭐ it on GitHub!
Your feedback helps improve future component-based JavaScript projects.
