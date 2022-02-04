import React from "react";
import ReactMarkdown from "react-markdown";

function Main({ activeNote, onUpdateNote }) {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote, // permet avec le spread d'utiliser la note existante et de modifier seulement les champs suivants sans supprimer ceux non modifiés
      [key]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote)
    return <div className="no-active-note">No note selected</div>;

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          value={activeNote?.title}
          onChange={(e) => onEditField("title", e.target.value)}
          onEdit
          autoFocus
        />
        <textarea
          id="body"
          value={activeNote?.body}
          onChange={(e) => onEditField("body", e.target.value)}
          placeholder="your notes here !"
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title"> {activeNote?.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {activeNote.body}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default Main;

// optional chaining avec ?
