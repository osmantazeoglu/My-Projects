import { useState } from "react";
function Hello() {
  return (
    <>
      <p>
        <span style={{ color: "lightgreen" }}>Hello</span> Osman!
      </p>
      <p>Welcome to learning React</p>
    </>
  );
}

function Message({ user, message }) {
  return (
    <>
      <p>
        <span style={{ fontWeight: "bold", marginRight: "6px" }}>{user} </span>
        <span>{message}</span>
      </p>
    </>
  );
}

function Friend({ friends }) {
  return (
    <>
      <p>
        {friends} <span style={{ color: "saddlebrown" }}>is</span> my
        <span style={{ color: "lightblue" }}> friend</span>.
      </p>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>Count = {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

function InputExample() {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <h3>Write Something Below</h3>
      <input
        type="text"
        value={text}
        onChange={handleChange} // {(e) => setText(e.target.value)} => Bu sekilde de kullanilabilir.
        placeholder="Write here"
      />

      <p>You typed : {text}</p>
    </div>
  );
}

function App() {
  const messages = [
    { user: "Ali:", message: "The weather is nice today." },
    { user: "Ayşe:", message: "Yes, perfect for a walk!" },
    { user: "Osman:", message: "Let's meet at the park!" },
  ];
  return (
    <>
      <Hello />

      {messages.map((msg, index) => (
        <Message key={index} user={msg.user} message={msg.message} />
      ))}

      {messages.map((name, index) => (
        <Friend key={index} friends={name.user.replace(":", "")} />
      ))}

      <Counter />

      <InputExample />
    </>
  );
}

export default App;
