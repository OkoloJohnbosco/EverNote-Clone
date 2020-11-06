import React, { useState, useEffect } from "react";
import "./App.css";
import { db } from "./Firebase/Firebase";
import Sidebar from "./Sidebar/Sidebar";
import Editor from "./Editor/Editor";

function App() {
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    db.collection("notes")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setNotes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
  }, []);

  return (
    <div className="app-container">
      <Sidebar
        notes={notes}
        selectedNoteIndex={selectedNoteIndex}
        setSelectedNote={setSelectedNote}
        setSelectedNoteIndex={setSelectedNoteIndex}
      />
      {selectedNote && (
        <Editor
          selectedNote={selectedNote}
          selectedNoteIndex={selectedNoteIndex}
        />
      )}
    </div>
  );
}

export default App;
