import { recipes, createRecipeCard } from "./recipecard.js";
import { store } from './store.js';

const container = document.querySelector('.container');
const categoryPart = document.querySelector('.category-part');
const categorySelect = document.querySelector('.category-select');
const hiddenSelect = document.getElementById('items');
const dropdownList = document.getElementById('dropdownList');
const nameButton = document.getElementById('recipe-name');
const ingredientButton = document.getElementById('ingredient');
const searchInput = document.getElementById('search-input');
const searchbtn = document.getElementById('search-btn');
let temptext = document.querySelector('.temporarytext');
const categoryDisplayContainer = document.getElementById('categoryDisplayContainer');
const recipeCardContainer = document.getElementById("recipeCard-container");
let recipeCount = 0;

if (!temptext) {
    temptext = document.createElement('div');
    temptext.classList.add('temporarytext');
    const text1 = document.createElement('span');
    text1.classList.add('text1');
    text1.textContent = "🔍";
    const text2 = document.createElement('span');
    text2.classList.add('text2');
    text2.textContent = "No recipes found";
    const text3 = document.createElement('span');
    text3.classList.add('text3');
    text3.textContent = "Try searching with different keywords or ingredients";
    temptext.append(text1, text2, text3);
    container.append(temptext);
}

store.data = {
    activeFilterButton: 'name',
    searchText: '',
    Visible: false,
    selectedCategory: 'Emty Category'
}

const getFilteredRecipes = (selectedCategory) => {
    if (selectedCategory === 'All Categories') {
        return recipes;
    }
    return recipes.filter(recipe => recipe.class === selectedCategory);
};

store.subscribe(newState => {

    renderCategory(newState);
    renderRecipes(newState);

});

function renderCategory(newState) {
    categoryDisplayContainer.innerHTML = "";
    if (newState.selectedCategory === 'Emty Category') return;
    if (newState.selectedCategory === 'All Categories') return;

    const categoryDisplay = html` 
        <div class="category-display">
            <p class="category-result">Category:</p>
            <span class="categories">${newState.selectedCategory}</span>
            <button class="clearbutton">clear</button>
        </div>
    `;
    const clearbtn = categoryDisplay.querySelector('.clearbutton');
    clearbtn.addEventListener('click', clearCategory);

    categoryDisplayContainer.appendChild(categoryDisplay);
    categoryPart.appendChild(categoryDisplayContainer);

}

function clearCategory() {
    store.update({ selectedCategory: 'Emty Category' });
    recipeCardContainer.innerHTML = "";
    temptext.style.display = '';
}

function renderRecipes(newState) {
    recipeCardContainer.innerHTML = "";

    const filtered = getFilteredRecipes(newState.selectedCategory);

    if (newState.selectedCategory === 'All Categories') {
        categoryDisplayContainer.innerHTML = '';
    }

    if (filtered.length === 0) {
        temptext.style.display = '';
        return;
    }

    temptext.style.display = 'none';
    filtered.forEach(recipe =>
        recipeCardContainer.appendChild(createRecipeCard(recipe))
    );

    recipeCount = recipeCardContainer.querySelectorAll('.recipe-card').length;
    if (recipeCount > 0) {
        temptext.style.display = 'none';
    }
}


function populateDropdown() {
    dropdownList.innerHTML = '';

    Array.from(hiddenSelect.options).forEach(option => {
        const dropdownItem = html`
            <div 
                class="custom-dropdown-item" 
                data-value="${option.value}"
            >
                ${option.textContent}
            </div>
        `
        dropdownItem.addEventListener('click', (event) => {
            event.stopPropagation();
            const selectedValue = event.target.getAttribute('data-value');
            hiddenSelect.value = selectedValue;
            store.update({ selectedCategory: selectedValue, Visible: false });
        });
        dropdownList.appendChild(dropdownItem);
    });
}



store.subscribe(newState => {
    searchInput.placeholder = `Search by ${newState.activeFilterButton}...`;

    const activeButton = newState.activeFilterButton === 'name' ? nameButton : ingredientButton;
    const inActiveButton = newState.activeFilterButton === 'name' ? ingredientButton : nameButton;

    activeButton.style.cssText = css`
            background-color: rgb(38, 116, 233);
            color: white;
        `
    inActiveButton.style.cssText = css`
            color: rgb(51, 51, 51);
            background-color: rgb(240, 238, 238);
        `
})

nameButton.addEventListener('click', () => store.update({ activeFilterButton: 'name' }));
ingredientButton.addEventListener('click', () => store.update({ activeFilterButton: 'ingredient' }));

store.subscribe(newState => {
    const searchText = newState.searchText;
    if (searchText.length > 0) {
        searchbtn.disabled = false;
        searchbtn.style.cursor = 'pointer';
        searchbtn.style.backgroundColor = 'rgb(38, 116, 233)';
    }
    else {
        searchbtn.disabled = true;
        searchbtn.style.cursor = 'no-drop';
        searchbtn.style.backgroundColor = 'rgba(38, 116, 233, 0.4)';
    }
})

searchInput.addEventListener("input", () => store.update({ searchText: searchInput.value.trim() }));

searchbtn.addEventListener('click', () => {
    console.log("buton aktif");
});

populateDropdown();

store.subscribe(newState => {
    dropdownList.style.display = newState.Visible ? 'block' : 'none';
})
categorySelect.addEventListener('click', () => store.update({ Visible: !store.data.Visible }));

document.addEventListener('click', (event) => {
    if (!categorySelect.contains(event.target) && !dropdownList.contains(event.target)) {
        store.update({ Visible: false })
    }
});