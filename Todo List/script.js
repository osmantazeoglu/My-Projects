class TodoApp {
    constructor() {
        this.todoList = document.getElementById('todolist');
        this.addBtn = document.getElementById('addbtn');
        this.textInput = document.getElementById('todoinput');
        this.clearBtn = document.getElementById('clearbtn');
        this.taskCountSpan = document.getElementById('taskcount');
        this.container = document.querySelector('.container');
        this.variableText = document.getElementById('veriabletext');
        this.fileInput = document.getElementById('imginp');
        this.selectedImage = null;
        this.temptext = document.querySelector('.temporarytext');
        this.uniqueIdCounter = 0;

        this.initializeEmptyState();
        this.bindGlobalEvents();
        this.updateTaskCount();
    }

    bindGlobalEvents() {
        this.addBtn.addEventListener('click', () => this.addTodo());

        this.textInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                this.addTodo();
            }
        });

        this.clearBtn.addEventListener('click', () => {
            this.todoList.innerHTML = '';
            this.updateTaskCount();
        });

        this.fileInput.addEventListener('change', (e) => this.handleAddImageFromHeader(e));
    }

    initializeEmptyState() {
        if (!this.temptext) {
            this.temptext = document.createElement('div');
            this.temptext.classList.add('temporarytext');
            const tempimg = document.createElement('img');
            tempimg.classList.add('tempimg');
            tempimg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwHAD-WiLCDYtglSutevYAGjhCV0NgCBBFlx10CESfpwnlTuHs";
            const text1 = document.createElement('span');
            text1.classList.add('text1');
            text1.textContent = "No todos yet";
            const text2 = document.createElement('span');
            text2.classList.add('text2');
            text2.textContent = "Add a todo above to get started!";
            this.temptext.append(tempimg, text1, text2);
            this.container.insertBefore(this.temptext, this.todoList);
        }
    }

    handleAddImageFromHeader(event) {
        const input = event.target;
        let file = null;
        if (input.files && input.files[0]) {
            file = input.files[0];
        }
        if (!file) {
            this.selectedImage = null;
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            this.selectedImage = e.target.result;
            this.addTodo();
        };
        reader.readAsDataURL(file);
    }

    updateTaskCount() {
        const pendingtask = this.todoList.querySelectorAll('li:not(.completed)').length;
        this.taskCountSpan.textContent = pendingtask;
        this.updateVariableText();

        const alltask = this.todoList.querySelectorAll('li');
        if (alltask.length > 0) {
            this.clearBtn.style.display = 'block';
            if (this.temptext) {
                this.temptext.style.display = 'none';
            }
        } else {
            this.clearBtn.style.display = 'none';
            if (this.temptext) {
                this.temptext.style.display = 'flex';
            }
        }
    }

    updateVariableText() {
        if (this.taskCountSpan.textContent !== '1') {
            this.variableText.textContent = 'tasks';
        } else {
            this.variableText.textContent = 'task';
        }
    }

    addTodo() {
        const todoText = this.textInput.value.trim();
        if (todoText === '' && !this.selectedImage) {
            alert('Please add text or select an image!');
            return;
        }

        const listItem = document.createElement('li');
        const textSpan = document.createElement('span');
        textSpan.textContent = todoText;
        if (todoText === '') {
            textSpan.style.display = 'none';
        }
        listItem.appendChild(textSpan);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.classList.add('dlt-btn');
        deleteButton.addEventListener('click', (event) => {
            event.stopPropagation();
            this.todoList.removeChild(listItem);
            this.updateTaskCount();
        });

        let editBtnActive = false;
        const editBtn = document.createElement('button');
        editBtn.textContent = '✎';
        editBtn.classList.add('edit-btn');

        editBtn.addEventListener('click', (event) => {
            textSpan.style.display = '';
            editBtnActive = true;
            event.stopPropagation();

            const textInput = document.createElement('input');
            const currentText = textSpan.textContent;
            textInput.type = 'text';
            textInput.value = currentText;
            textInput.classList.add('editinput');
            listItem.replaceChild(textInput, textSpan);
            textInput.focus();

            let imagediv = document.createElement('div');
            imagediv.classList.add('imgdiv');

            const buttonRow = document.createElement('div');
            buttonRow.classList.add('button-row');
            const savebutton = document.createElement('button');
            savebutton.classList.add('save');
            savebutton.textContent = '💾 Save';
            const cancelbutton = document.createElement('button');
            cancelbutton.classList.add('cancel');
            cancelbutton.textContent = '✖ Cancel';
            buttonRow.append(savebutton, cancelbutton);

            const imageRow = document.createElement('div');
            imageRow.classList.add('image-row');
            const imageInput = document.createElement('input');
            imageInput.type = 'file';
            imageInput.accept = 'image/jpeg, image/png, image/jpg';
            imageInput.classList.add('image-input');
            const uniqueInputId = `image-input-${++this.uniqueIdCounter}`;
            imageInput.setAttribute('id', uniqueInputId);
            const imagebtn = document.createElement('label');
            imagebtn.setAttribute('for', uniqueInputId);
            imagebtn.classList.add('add-image');

            imageRow.append(imagebtn, imageInput);
            imagediv.append(buttonRow, imageRow);

            const addedMedia = listItem.querySelector('.todo-media');
            if (addedMedia) {
                listItem.insertBefore(imagediv, addedMedia);
                imagebtn.textContent = 'Change Image';
            } else {
                listItem.appendChild(imagediv);
                imagebtn.textContent = '🖼 Add Image';
            }

            imageInput.addEventListener('change', function () {
                let file;
                if (this.files && this.files[0]) {
                    file = this.files[0];
                }
                if (!file) {
                    return;
                }
                const reader = new FileReader();
                reader.onload = function (e) {
                    const dataURL = e.target.result;
                    let media = listItem.querySelector('.todo-media');
                    if (!media) {
                        media = document.createElement('div');
                        media.className = 'todo-media';
                        imagediv.after(media);
                    }
                    let img = media.querySelector('img');
                    if (!img) {
                        img = document.createElement('img');
                        img.className = 'todo-image';
                        media.appendChild(img);
                    }
                    img.src = dataURL;
                    let dltimage = media.querySelector('.dlt-image');
                    if (!dltimage) {
                        dltimage = document.createElement('button');
                        dltimage.classList.add('dlt-image');
                        dltimage.textContent = 'x';
                        media.appendChild(dltimage);
                    }
                    dltimage.addEventListener('click', function (e) {
                        e.stopPropagation();
                        media.innerHTML = '';
                        imagebtn.textContent = '🖼 Add Image';
                        imageInput.value = '';
                    });
                    imagebtn.textContent = 'Change Image';
                };
                reader.readAsDataURL(file);
            });

            editBtn.style.display = 'none';

            textInput.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    textSpan.textContent = textInput.value.trim();
                    listItem.replaceChild(textSpan, textInput);
                    editBtnActive = false;
                    imagediv.style.display = 'none';
                    editBtn.style.display = '';
                }
            });

            savebutton.addEventListener('click', () => {
                const newText = textInput.value.trim();
                const hasImage = !!listItem.querySelector('.todo-media img');

                if (newText === '' && !hasImage) {
                    this.todoList.removeChild(listItem);
                    this.updateTaskCount();
                    return;
                }

                textSpan.textContent = newText;
                listItem.replaceChild(textSpan, textInput);
                editBtnActive = false;
                imagediv.style.display = 'none';
                editBtn.style.display = '';
            });
            cancelbutton.addEventListener('click', function () {
                listItem.replaceChild(textSpan, textInput);
                editBtnActive = false;
                imagediv.style.display = 'none';
                editBtn.style.display = '';
            });
        });

        listItem.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON' || editBtnActive === true) {
                return;
            } else {
                listItem.classList.toggle('completed');
                this.updateTaskCount();
            }
        });

        listItem.appendChild(editBtn);
        listItem.appendChild(deleteButton);

        if (this.selectedImage) {
            const media = document.createElement('div');
            media.classList.add('todo-media');
            const img = document.createElement('img');
            img.src = this.selectedImage;
            img.alt = 'todo image';
            img.classList.add('todo-image');
            media.appendChild(img);
            listItem.appendChild(media);
            const dltimage = document.createElement('button');
            dltimage.classList.add('dlt-image');
            dltimage.textContent = 'x';
            dltimage.addEventListener('click', (e) => {
                if (textSpan.style.display === 'none') {
                    e.stopPropagation();
                    this.todoList.removeChild(listItem);
                    this.updateTaskCount();
                } else {
                    e.stopPropagation();
                    listItem.removeChild(media);
                    this.updateTaskCount();
                }
            });
            media.appendChild(dltimage);
            listItem.appendChild(media);
        }

        this.todoList.appendChild(listItem);
        this.textInput.value = '';
        this.fileInput.value = '';
        this.selectedImage = null;
        this.updateTaskCount();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    new TodoApp();
});