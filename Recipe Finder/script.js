document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.querySelector('.category-select');
    const categoriesSpan = document.querySelector('.categories');
    const hiddenSelect = document.getElementById('items');
    const dropdownList = document.getElementById('dropdownList');
    const categoryDisplay = document.querySelector('.category-display')

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
                categoriesSpan.textContent = selectedText;
                hiddenSelect.value = selectedValue;
                dropdownList.style.display = 'none';
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
