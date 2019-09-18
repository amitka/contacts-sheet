import React from "react";
import "./App.css";

//let contacts = require("./assets/contacts.json");

function App() {
  return (
    <div className="App">
      <span>{JSON.stringify(contacts, 0, null)}</span>
    </div>
  );
}

export default App;
