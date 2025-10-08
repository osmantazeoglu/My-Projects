import { useState } from 'react'
import './App.css';

function App() {

  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [editImage, setEditImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.onerror = () => {
        console.error('Error reading file');
        setSelectedImage(null);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };

  const addTodo = () => {
    // Allow adding todo if there's either text or image
    if (!text.trim() && !selectedImage) return;
    const newTodo = { 
      text: text || '', // Use empty string if no text
      completed: false, 
      image: selectedImage 
    };
    
    setTodos([...todos, newTodo]);
    setText("");
    setSelectedImage(null);
    // Clear the file input
    document.getElementById('imginp').value = '';
  };

  const toggleCompleted = (index, e) => {
    // Only toggle if the click is not on a button
    if (e && (e.target.tagName === 'BUTTON' || e.target.closest('button'))) {
      return;
    }
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEdit = (index, e) => {
    e.stopPropagation();
    setEditingIndex(index);
    setEditText(todos[index].text || '');
    setEditImage(todos[index].image || null);
  };

  const saveEdit = () => {
    if (editingIndex !== null) {
      setTodos(todos.map((todo, i) => 
        i === editingIndex 
          ? { ...todo, text: editText, image: editImage }
          : todo
      ));
      setEditingIndex(null);
      setEditText("");
      setEditImage(null);
    }
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditText("");
    setEditImage(null);
  };

  const handleEditImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setEditImage(event.target.result);
      };
      reader.onerror = () => {
        console.error('Error reading file');
        setEditImage(null);
      };
      reader.readAsDataURL(file);
    } else {
      setEditImage(null);
    }
  };

  return (
    <div id='todo-container'>
      <div className='todo-title'>
        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSTUZ9E8OhFT6f42QfCljL3TcA3Mg-KOcgfM4lbRnf3UiMjeMrc" alt="" id='todo-img' />
        <h2>Todo List</h2>
      </div>

      <div className='input-area'>
        <input
          id='todo-input'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add your new todo..."
          onKeyDown={(e) => {
            if (e.key === "Enter") addTodo();
          }}
        />
        <label htmlFor="imginp" id="imgbtn">IMG</label>
        <input
          type="file"
          accept="image/jpeg, image/png, image/jpg"
          id="imginp"
          style={{ display: "none" }}
          onChange={handleImageChange}
        ></input>
        <button id="addbtn" onClick={addTodo}>Add</button>
      </div>

      <ul className='list-container'>
        {todos.map((todo, index) => (
          <li
            className={`list-item ${todo.completed ? 'completed' : ''}`}
            key={index}
            onClick={(e) => toggleCompleted(index, e)}
          >
            {editingIndex === index ? (
              // Edit mode
              <div className="edit-mode-container">
                <div className="edit-mode-content">
                  <div className="edit-input-row">
                    <div className="checkbox-container">
                      <div className={`checkbox ${todos[index].completed ? 'checked' : ''}`}>
                        {todos[index].completed && <span className="checkmark">✓</span>}
                      </div>
                    </div>
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="edit-text-input"
                      placeholder="Edit todo..."
                    />
                    <button
                      onClick={(e) => { e.stopPropagation(); cancelEdit(); }}
                      className="edit-close-btn"
                    >
                      ✕
                    </button>
                  </div>
                  
                  {editImage && (
                    <img 
                      src={editImage} 
                      alt="Edit image" 
                      className="edit-image-preview"
                    />
                  )}
                  
                  <div className="edit-buttons-container">
                    <button
                      onClick={(e) => { e.stopPropagation(); saveEdit(); }}
                      className="edit-save-btn"
                    >
                      💾 Save
                    </button>
                    
                    <button
                      onClick={(e) => { e.stopPropagation(); cancelEdit(); }}
                      className="edit-cancel-btn"
                    >
                      ✕ Cancel
                    </button>
                    
                    <label
                      htmlFor={`edit-imginp-${index}`}
                      className="edit-image-btn"
                    >
                      🖼️ Add Image
                    </label>
                    <input
                      type="file"
                      accept="image/jpeg, image/png, image/jpg"
                      id={`edit-imginp-${index}`}
                      style={{ display: "none" }}
                      onChange={handleEditImageChange}
                    />
                  </div>
                </div>
              </div>
            ) : (
              // Normal mode
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div className="checkbox-container">
                    <div className={`checkbox ${todo.completed ? 'checked' : ''}`}>
                      {todo.completed && <span className="checkmark">✓</span>}
                    </div>
                  </div>
                  {todo.image && (
                    <img 
                      src={todo.image} 
                      alt="Todo image" 
                      style={{ 
                        width: '40px', 
                        height: '40px', 
                        objectFit: 'cover', 
                        borderRadius: '4px' 
                      }} 
                    />
                  )}
                  {todo.text && (
                    <span style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                      cursor: "pointer",
                    }}>
                      {todo.text}
                    </span>
                  )}
                </div>
                <div className="todo-actions">
                  <button 
                    onClick={(e) => startEdit(index, e)}
                    className="edit-btn"
                  >
                    ✏️ Edit
                  </button>
                  <button 
                    id='delbtn' 
                    onClick={(e) => { e.stopPropagation(); setTodos(todos.filter((_, i) => i !== index)) }}
                    className="delete-btn"
                  >
                    🗑️ Del
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
