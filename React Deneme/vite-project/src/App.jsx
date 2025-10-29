import { useState, useEffect } from "react";

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

function Form() {
  const [comment, setComment] = useState([]);
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedComment = JSON.parse(localStorage.getItem("comment"));
    if (savedComment && savedComment.length > 0) {
      setComment(savedComment);
    }
  }, []);

  useEffect(() => {
    console.log("LocalStorage’a kaydedildi:", comment);
    localStorage.setItem("comment", JSON.stringify(comment));
  }, [comment]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user || !message) return;

    const newComment = { user, message };
    setComment([...comment, newComment]);
    setUser("");
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="your name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {comment.map((msg, index) => (
          <li key={index}>
            <strong>{msg.user}:</strong>
            {msg.message}
          </li>
        ))}
      </ul>
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
      {messages.map((chat, index) => (
        <Message key={index} user={chat.user} message={chat.message} />
      ))}

      {messages.map((name, index) => (
        <Friend key={index} friends={name.user.replace(":", "")} />
      ))}

      <Counter />

      <InputExample />

      <Form />
    </>
  );
}

export default App;
