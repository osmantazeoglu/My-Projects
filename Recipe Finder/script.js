document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.querySelector('.category-select');
    let categoriesSpan = document.querySelector('.categories');
    const hiddenSelect = document.getElementById('items');
    const dropdownList = document.getElementById('dropdownList');
    let categoryDisplay = document.querySelector('.category-display')
    let clearbtn = document.querySelector('.clearbtn');

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

                if (!categoryDisplay) {
                    categoryDisplay = document.createElement('div')
                    categoryDisplay.classList.add('category-display');
                    const categoryResult = document.createElement('p');
                    categoryResult.classList.add('category-result');
                    categoryResult.textContent = 'Category:';
                    if (!categoriesSpan) {
                        categoriesSpan = document.createElement('span');
                        categoriesSpan.classList.add('categories');
                        categoriesSpan.textContent = selectedText;
                    }

                    categoryDisplay.append(categoryResult, categoriesSpan);

                }

                if (!clearbtn) {
                    clearbtn = document.createElement('button');
                    clearbtn.type = 'button';
                    clearbtn.textContent = 'clear';
                    clearbtn.classList.add('clearbtn');
                    categoryDisplay.appendChild(clearbtn);
                    clearbtn.addEventListener('click', () => {
                        categoriesSpan.textContent = '';
                        hiddenSelect.value = 'All Categories';
                        clearbtn.remove();
                        clearbtn = null;
                    });
                }
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
