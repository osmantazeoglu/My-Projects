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

function App() {
  return (
    <>
      <Hello />
      <Message user="Ali:" message="The weather is very nice today." />
    </>
  );
}

export default App;
