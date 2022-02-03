function Sidebar({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Jerem's Notes</h1>
        <button onClick={onAddNote}>Ajouter une note</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map(
          (
            note // notes.map avant d'utiliser le sorted !
          ) => (
            <div
              className={`app-sidebar-note ${
                note.id === activeNote && "active"
              }`}
              key={note.id}
              onClick={() => setActiveNote(note.id)}
            >
              {/* // revoir ceci */}
              <div className="sidebar-note-title">
                <strong>{note.title}</strong>
                <button onClick={() => onDeleteNote(note.id)}>Supprimer</button>
              </div>
              <p>{note.body && note.body.substr(0, 25) + "..."}</p>
              {/* si note.body true,
            affiche les 25rs caracteres */}
              <small className="note-meta">
                Last modified{" "}
                {new Date(note.lastModified).toLocaleDateString("fr-FR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Sidebar;

// lib classnames !!
