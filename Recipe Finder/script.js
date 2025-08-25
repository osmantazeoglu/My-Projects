document.addEventListener('DOMContentLoaded', () => {
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

    let categoriesSpan = null;
    let categoryDisplay = null;
    let clearbtn = null;

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
                dropdownList.style.display = 'none';

                if (categoriesSpan) {
                    categoriesSpan.textContent = selectedText;

                    if (selectedText === 'All Categories') {

                        categoryDisplay.style.display = 'none';
                    }
                    else {
                        categoryDisplay.style.display = '';
                    }

                    return;
                }
                categoryDisplay = document.createElement('div')
                categoryDisplay.classList.add('category-display');

                const categoryResult = document.createElement('p');
                categoryResult.classList.add('category-result');
                categoryResult.textContent = 'Category:';

                categoriesSpan = document.createElement('span');
                categoriesSpan.classList.add('categories');
                categoriesSpan.textContent = selectedText;
                if (selectedText === 'All Categories') {

                    categoryDisplay.style.display = 'none';
                }
                else {
                    categoryDisplay.style.display = '';
                }

                if (!clearbtn) {
                    clearbtn = document.createElement('button');
                    clearbtn.type = 'button';
                    clearbtn.textContent = 'clear';
                    clearbtn.classList.add('clearbtn');
                    categoryDisplay.appendChild(clearbtn);

                    clearbtn.addEventListener('click', () => {
                        categoryDisplay.remove();
                        categoryDisplay = null;
                        hiddenSelect.value = 'All Categories';
                        clearbtn = null;
                        categoriesSpan = null;
                    });
                }

                categoryDisplay.append(categoryResult, categoriesSpan, clearbtn);
                categoryPart.appendChild(categoryDisplay);

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
        temptext.style.display = 'none';
    }

    nameButton.addEventListener('click', function () {
        nameButton.style.backgroundColor = 'rgb(38, 116, 233)';
        nameButton.style.color = 'white';
        ingredientButton.style.backgroundColor = 'rgb(240, 238, 238)';
        ingredientButton.style.color = 'rgb(51, 51, 51)';
        searchInput.placeholder = "Search by name...";
    });

    ingredientButton.addEventListener('click', function () {
        ingredientButton.style.backgroundColor = 'rgb(38, 116, 233)';
        ingredientButton.style.color = 'white';
        nameButton.style.backgroundColor = 'rgb(240, 238, 238)';
        nameButton.style.color = 'rgb(51, 51, 51)';
        searchInput.placeholder = "Search by ingredient...";

    });

    searchInput.addEventListener("input", function () {

        const searchText = searchInput.value.trim();

        if (searchText.length > 0) {
            searchbtn.style.cursor = 'pointer';
            searchbtn.style.backgroundColor = 'rgb(38, 116, 233)';
        }
        else {
            searchbtn.style.cursor = 'no-drop';
            searchbtn.style.backgroundColor = 'rgba(38, 116, 233, 0.4)';
        }
    });


    populateDropdown();

    categorySelect.addEventListener('click', () => {
        const Visible = dropdownList.style.display === 'block';
        if (!Visible) {
            dropdownList.style.display = 'block';
        }
        else {
            dropdownList.style.display = 'none';
        }
    });

    document.addEventListener('click', (event) => {
        if (!categorySelect.contains(event.target) && !dropdownList.contains(event.target)) {
            dropdownList.style.display = 'none';
        }
    });



});
