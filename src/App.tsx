import React from "react";
import "./App.css";
// import { RickAndMorty } from "./pages/RickAndMorty";
import { TestForm } from "./pages/TestForm";

function App() {
  return (
    <div className="App">
      {/* <RickAndMorty /> */}
      <TestForm
        onSubmit={({ email, login, password, date }) => {
          console.log(email, login, password, date);
        }}
      />
    </div>
  );
}

export default App;
