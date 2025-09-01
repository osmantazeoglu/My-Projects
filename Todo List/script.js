const todoList = document.getElementById('todolist');
const addBtn = document.getElementById('addbtn');
const todoinp = document.getElementById('todoinput');
const clrBtn = document.getElementById('clearbtn');
const taskCountSpan = document.getElementById('taskcount');
const container = document.querySelector('.container');

let temptext = document.querySelector('.temporarytext');

let imagediv = document.querySelector('.imgdiv');
const callimg = document.getElementById('imgbtn');
const inputimg = document.getElementById('imginp');
let selectedImage = null;

inputimg.addEventListener('change', addimage);
function addimage() {
    let file;
    if (this.files && this.files[0]) {
        file = this.files[0];
    } else {
        file = null;
    }
    if (!file) {
        selectedImage = null;
        return;
    }
    const reader = new FileReader();
    reader.onload = function (e) {
        selectedImage = e.target.result;
        addTodo();
    };
    reader.readAsDataURL(file);
}


if (!temptext) {
    temptext = document.createElement('div');
    temptext.classList.add('temporarytext');
    const tempimg = document.createElement('img');
    tempimg.classList.add('tempimg');
    tempimg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwHAD-WiLCDYtglSutevYAGjhCV0NgCBBFlx10CESfpwnlTuHs";
    const text1 = document.createElement('span');
    text1.classList.add('text1');
    text1.textContent = "No todos yet";
    const text2 = document.createElement('span');
    text2.classList.add('text2');
    text2.textContent = "Add a todo above to get started!";
    temptext.append(tempimg, text1, text2);
    container.insertBefore(temptext, todoList);
}

addBtn.addEventListener('click', addTodo);

todoinp.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});

function updateTaskCount() {
    const pendingtask = todoList.querySelectorAll("li:not(.completed)").length;
    taskCountSpan.textContent = pendingtask;

    const alltask = todoList.querySelectorAll("li");

    changetext();
    if (alltask.length > 0) {
        clrBtn.style.display = "block";
        if (temptext) {
            temptext.style.display = "none";
        }
    }
    else {
        clrBtn.style.display = "none";
        if (temptext) {
            temptext.style.display = "flex";

        }
    }
}

let veriabletext = document.getElementById('veriabletext');
function changetext() {
    if (taskCountSpan.textContent !== "1") {
        veriabletext.textContent = "tasks"
    }
    else {
        veriabletext.textContent = "task"
    }
};


function addTodo() {
    const todoText = todoinp.value.trim();

    if (todoText === '' && !selectedImage) {
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
    deleteButton.addEventListener('click', function (event) {
        event.stopPropagation();
        todoList.removeChild(listItem);
        updateTaskCount();
    });

    let editBtnactive = false;
    const editBtn = document.createElement('button');
    editBtn.textContent = '✎';
    editBtn.classList.add('edit-btn');

    editBtn.addEventListener('click', function (event) {
        textSpan.style.display = '';
        editBtnactive = true;
        event.stopPropagation();
        const textInput = document.createElement('input');
        const currentText = textSpan.textContent;
        textInput.type = 'text';
        textInput.value = currentText;
        textInput.classList.add('editinput');
        listItem.replaceChild(textInput, textSpan);
        textInput.focus();

        imagediv = document.createElement('div');
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
        imageInput.setAttribute("id", "image-input");
        const imagebtn = document.createElement('label');
        imagebtn.setAttribute("for", "image-input");
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

                let dltimage = media.querySelector('dlt-image');
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
                    imageInput.value  = '';
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
                editBtnactive = false;
                imagediv.style.display = 'none';
                editBtn.style.display = '';
            }
        });

        savebutton.addEventListener('click', function () {
            textSpan.textContent = textInput.value.trim();
            listItem.replaceChild(textSpan, textInput);
            editBtnactive = false;
            imagediv.style.display = 'none';
            editBtn.style.display = '';
        });
        cancelbutton.addEventListener('click', function () {
            listItem.replaceChild(textSpan, textInput);
            editBtnactive = false;
            imagediv.style.display = 'none';
            editBtn.style.display = '';
        });
    });


    listItem.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON' || editBtnactive === true) {
            return;
        }
        else {
            listItem.classList.toggle('completed');
            updateTaskCount();
        }
    });
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteButton);

    if (selectedImage) {
        const media = document.createElement('div');
        media.classList.add('todo-media');
        const img = document.createElement('img');
        img.src = selectedImage;
        img.alt = 'todo image';
        img.classList.add('todo-image');
        media.appendChild(img);
        listItem.appendChild(media);
        const dltimage = document.createElement('button');
        dltimage.classList.add('dlt-image');
        dltimage.textContent = 'x';
        dltimage.addEventListener('click', function (e) {
            if (textSpan.style.display === 'none') {
                e.stopPropagation();
                todoList.removeChild(listItem);
                updateTaskCount();
            }
            else {
                e.stopPropagation();
                listItem.removeChild(media);
                updateTaskCount();
            }
        });
        media.appendChild(dltimage);
        listItem.appendChild(media);

    }
    todoList.appendChild(listItem);
    todoinp.value = '';
    inputimg.value = '';
    selectedImage = null;
    updateTaskCount();
}

clrBtn.addEventListener('click', function () {
    todoList.innerHTML = '';
    updateTaskCount();
});

document.addEventListener('DOMContentLoaded', updateTaskCount);