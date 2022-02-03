import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./styles/main.scss";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.mesNotes) || []);
  // pour récupérer mes notes sauvegardées, remplacer useState([]) par useState(JSON.parse(localStorage.mesNotes))
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("mesNotes", JSON.stringify(notes));
  }, [notes]);
  // crée un enregistrement suite à chaque transfo de mon obj [notes] en string, dans mon localstorage

  function onAddNote() {
    console.log("added!");
    const newNote = {
      id: uuid(),
      title: "Untitled",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]); // spread operator ... ajoute la newnote à l'array des notes existantes
  }

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArray);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };
  // HELPER pour renvoyer mes infos /_!_\ ne pas oublier les () dans les props en return, sinon envoie fonction et non son résultat

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;

// si pas de return >> undefined
