import React from "react";
import ContactList from "./components/ContactList";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">Contact App</h1>
      <ContactList />
    </div>
  );
}
