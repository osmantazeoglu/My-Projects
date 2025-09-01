import { useState } from 'react'
import './App.css';

function App() {

  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { text: text, completed: false }]);
    setText("");
  };

  const toggleCompleted = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
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
        <label for="imginp" id="imgbtn">IMG</label>
        <input
          type="file"
          accept="image/jpeg, image/png, image/jpg"
          id="imginp"
          style={{ display: "none" }}
        ></input>
        <button id="addbtn" onClick={addTodo}>Add</button>
      </div>

      <ul className='list-container'>
        {todos.map((todo, index) => (
          <li
            className='list-item'
            key={index}
            onClick={() => toggleCompleted(index)}

          >
            <span style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}>
              {todo.text}
            </span>
            <button id='delbtn' onClick={(e) => { e.stopPropagation(); setTodos(todos.filter((_, i) => i !== index)) }}>
              Del
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
