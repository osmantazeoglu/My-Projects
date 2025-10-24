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
    </>
  );
}

export default App;
