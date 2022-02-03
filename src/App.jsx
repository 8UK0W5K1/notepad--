import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./styles/main.scss";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div className="App">
      <Sidebar notes={notes} />
      <Main />
    </div>
  );
}

export default App;
