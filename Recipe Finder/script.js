import { recipes, createRecipeCard } from "./recipecard.js";
import { store } from './store.js'

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

document.addEventListener('DOMContentLoaded', () => {

    store.data = {
        activeFilterButton: 'name',
        searchText: '',
        Visible: false,
        selectedCategory: 'Emty Category'
    }

    store.subscribe(newState => {
        categoryDisplayContainer.innerHTML = "";

        if (newState.selectedCategory === 'Emty Category') return;

        const categoryDisplay = document.createElement('div')
        categoryDisplay.classList.add('category-display');

        const categoryResult = document.createElement('p');
        categoryResult.classList.add('category-result');
        categoryResult.textContent = 'Category:';

        const categoriesSpan = document.createElement('span');
        categoriesSpan.classList.add('categories');
        categoriesSpan.textContent = newState.selectedCategory;

        const clearbtn = document.createElement('button');
        clearbtn.type = 'button';
        clearbtn.textContent = 'clear';
        clearbtn.classList.add('clearbtn');
        clearbtn.addEventListener('click', () => {
            store.update({ selectedCategory: 'Emty Category' });
            temptext.style.display = '';
        });

        categoryDisplay.append(categoryResult, categoriesSpan, clearbtn);
        categoryDisplayContainer.appendChild(categoryDisplay);
        categoryPart.appendChild(categoryDisplayContainer);

        recipeCardContainer.innerHTML = "";

        let filtered;
        
        if (newState.selectedCategory === 'All Categories') {
            filtered = recipes;
            categoryDisplayContainer.innerHTML = '';
        }
        else {
            filtered = recipes.filter(recipe => recipe['class'] === newState.selectedCategory);
        }


        if (filtered.length === 0) {
            temptext.style.display = '';
        }
        else {
            temptext.style.display = 'none';
            filtered.forEach(recipe => recipeCardContainer.appendChild(createRecipeCard(recipe)));
        }


        recipeCount = recipeCardContainer.querySelectorAll('.recipe-card').length;
        if (temptext && recipeCount > 0) {
            temptext.style.display = 'none';
        }
    });

    function populateDropdown() {
        dropdownList.innerHTML = '';

        Array.from(hiddenSelect.options).forEach(option => {
            const dropdownItem = document.createElement('div');
            dropdownItem.className = 'custom-dropdown-item';
            dropdownItem.textContent = option.textContent;
            dropdownItem.setAttribute('data-value', option.value);

            dropdownItem.addEventListener('click', (event) => {
                event.stopPropagation();
                const selectedText = event.target.textContent;
                const selectedValue = event.target.getAttribute('data-value');
                hiddenSelect.value = selectedValue;
                store.update({ selectedCategory: selectedText, Visible: false });
            });
            dropdownList.appendChild(dropdownItem);
        });
    }

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

});