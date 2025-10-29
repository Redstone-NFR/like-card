import React from "react";
import "./App.css";
import LikeCard from "./components/LikeCard";

function App() {
  return (
    <div className="app">
      <LikeCard name="Ali" />
      <LikeCard name="Maryam" />
      <LikeCard name="Hamid" />
      <LikeCard name="Sara" />
    </div>
  );
}

export default App;
