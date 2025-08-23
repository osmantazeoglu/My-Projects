document.addEventListener('DOMContentLoaded', () => {
    const categoryPart = document.querySelector('.category-part');
    const categorySelect = document.querySelector('.category-select');
    const hiddenSelect = document.getElementById('items');
    const dropdownList = document.getElementById('dropdownList');

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
                    });
                }

                categoryDisplay.append(categoryResult, categoriesSpan, clearbtn);
                categoryPart.appendChild(categoryDisplay);

            });

            dropdownList.appendChild(dropdownItem);

        });
    }

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
