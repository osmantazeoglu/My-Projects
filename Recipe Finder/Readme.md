# 🍳 Recipe Finder

A **modular JavaScript web app** for discovering and filtering recipes using component-based logic.
Designed with a clean UI, reusable components, and an efficient state management system.

---

## 🌐 Preview

<!-- Replace with your actual image -->

![Recipe Finder Preview](./images/recipe-finder-ui.png)

---

## ⚙️ Setup

No additional setup is required — just open `index.html` in your browser.

```bash
# Clone this repository
git clone https://github.com/osmantazeoglu/My-Projects/tree/master/Recipe%20Finder
cd "My-Projects/Recipe Finder"
open index.html
```

---

## 💡 Features

* 🔍 Search by recipe name or ingredient
* 🧩 Category filtering system
* ❤️ Favorites interaction
* ⚡ Dynamic rendering with `store` subscription model
* 🎨 Responsive and modern design

---

## 🧱 Project Structure

```
Recipe Finder/
├── index.html
├── bodystyle.css
├── recipecard.css
├── script.js
├── recipecard.js
└── store.js
```

---

## 🧩 HTML Components

### 🔹 Search & Filter Section

Defines the **interactive search bar**, **filter dropdown**, and **search buttons**.

```html
<!-- Partial snippet -->
<div class="input-area">
  <div class="input-part">
    <i id="input-icon" class="fas fa-search"></i>
    <input type="text" id="search-input" placeholder="Search by name...">
  </div>
  <div class="buttons">
    <button id="recipe-name">Recipe Name</button>
    <button id="ingredient">Ingredient</button>
    <div class="search-btn">
      <button id="search-btn" disabled>Search</button>
    </div>
  </div>
</div>

<div class="category-part">
  <div class="category-select">
    <i id="filter-icon" class="fas fa-filter"></i>
    <span class="categories-text">Filter by Category</span>
    <div id="dropdownList" class="custom-dropdown-list"></div>
  </div>
</div>
```

📘 *This section defines user interaction inputs for searching and filtering recipes.*

---

## 🎨 CSS Highlights

Focuses on UI layout, search box styling, and dropdown responsiveness.

```css
.input-part {
  border: 1px solid rgba(163, 163, 163, 0.5);
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding: 5px 10px;
}

#search-input {
  border: none;
  outline: none;
  font-size: 14px;
  flex-grow: 1;
}

.custom-dropdown-list {
  position: absolute;
  top: calc(100% + 8px);
  background-color: white;
  border-radius: 10px;
  max-height: 230px;
  overflow-y: auto;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.custom-dropdown-item.active-category {
  background-color: rgb(38, 116, 233);
  color: white;
  border-radius: 5px;
}
```

🎨 *Clean, component-focused CSS — enabling modular and reusable UI sections.*

---

## ⚙️ JavaScript — Core Logic

### 🧠 State Management with `store.js`

A reactive store that triggers UI updates when state changes.

```js
store.data = {
  activeFilterButton: 'name',
  searchText: '',
  Visible: false,
  selectedCategory: 'All Categories'
};

store.subscribe(newState => {
  renderCategory(newState);
  renderRecipes(newState);
});
```

🧩 *This modular pattern mimics simple state management like Redux, without external dependencies.*

---

### 🧱 Component: Category Renderer

Handles the visual display of selected category and clearing filters.

```js
function renderCategory(newState) {
  categoryDisplayContainer.innerHTML = "";

  if (newState.selectedCategory === 'All Categories') return;

  const categoryDisplay = html`
    <div class="category-display">
      <p class="category-result">Category:</p>
      <span class="categories">${newState.selectedCategory}</span>
      <button class="clearbutton">clear</button>
    </div>
  `;

  categoryDisplay.querySelector('.clearbutton')
    .addEventListener('click', () => store.update({ selectedCategory: 'All Categories' }));

  categoryDisplayContainer.appendChild(categoryDisplay);
}
```

🔍 *Dynamic component rendering — the category view re-renders only when needed.*

---

### 🍲 Component: Recipe Card Generator

Defined in `recipecard.js` — dynamically builds recipe cards from data.

```js
export function createRecipeCard(recipe) {
  const card = document.createElement('div');
  card.classList.add('recipe-card');

  card.innerHTML = `
    <div class="recipe-images" style="background-image: url('${recipe.backgroundImage}')">
      <div class="icon-part"><span class="favorite-icon">${recipe.favoriteIcon}</span></div>
    </div>
    <div class="recipe-info">
      <h3 class="recipe-title">${recipe.title}</h3>
      <p class="recipe-text">${recipe.mapicon} ${recipe.mapText}</p>
      <span class="click-text">${recipe.clickText}</span>
    </div>
  `;

  card.querySelector('.favorite-icon')
      .addEventListener('click', () => alert(`${recipe.title} added to favorites!`));

  return card;
}
```

💡 *Each recipe card acts as a self-contained UI component.*

---

### ⚡ Rendering Recipes

Handles filtering logic and dynamic content population.

```js
function renderRecipes(newState) {
  const filtered = newState.selectedCategory === 'All Categories'
    ? recipes
    : recipes.filter(r => r.class === newState.selectedCategory);

  recipeCardContainer.innerHTML = "";
  filtered.forEach(recipe => recipeCardContainer.appendChild(createRecipeCard(recipe)));
}
```

📚 *Filters recipes by category and efficiently updates the UI.*

---

## 🧠 Example Flow

1. User types **“Beef”** → State updates `searchText`.
2. Clicks **Search** → `renderRecipes()` filters results.
3. Chooses **Category: Chicken** → `renderCategory()` updates component.
4. Clicks ❤️ → Favorite interaction triggers alert.

---

## 📄 License

Licensed under the **MIT License**.

---

## ⭐ Support

If you like this project, please ⭐ it on GitHub!
Your feedback helps improve future component-based JavaScript projects.
