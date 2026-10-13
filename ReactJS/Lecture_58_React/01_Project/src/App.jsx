import "./App.css";

let colors = ["Red", "Yellow", "White", "Black", "Green", "Blue"];

let users = {
  name: "Sourabha",
  isOnline: false,
};

function App() {
  return (
    <>
      <div>Hello Sourabha!</div>

      <ul>
        {colors.map((color) => {
          return <li>{color}</li>;
        })}
      </ul>

      <h4>
        {users.isOnline
          ? `${users.name} is online✅`
          : `${users.name} is offline❌`}
      </h4>
    </>
  );
}

export default App;
