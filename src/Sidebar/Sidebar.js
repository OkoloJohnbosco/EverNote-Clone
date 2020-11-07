import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Divider, List } from "@material-ui/core";
import SidebarItem from "../SidebarItem/SidebarItem";
import styles from "./styles";
import { db, timestamp } from "../Firebase/Firebase";

function Sidebar({
  classes,
  notes,
  selectedNoteIndex,
  setSelectedNoteIndex,
  setSelectedNote,
}) {
  const [addingNotes, setAddingNotes] = useState(false);
  const [title, setTitle] = useState("");

  const toggleNewNoteHandler = () => {
    setTitle("");
    setAddingNotes((prevState) => !prevState);
  };

  const newNoteHandler = async (e) => {
    setAddingNotes(false);

    const newNote = await db.collection("notes").add({
      title: title,
      body: "<p></p>",
      createdAt: timestamp(),
    });

    const newNoteIndex = notes.findIndex((item) => item.id === newNote.id);
    const newNoteIn = notes.find((item) => item.id === newNote.id);
    // setSelectedNote(newNoteIn);
    console.log(newNoteIndex);
    console.log(newNote);
  };

  return (
    <div className={classes.sidebarContainer}>
      <Button onClick={toggleNewNoteHandler} className={classes.newNoteBtn}>
        {addingNotes ? "Cancel" : "New Note"}
      </Button>
      {addingNotes ? (
        <div>
          <input
            type="text"
            className={classes.newNoteInput}
            placeholder="Enter note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button className={classes.newNoteSubmitBtn} onClick={newNoteHandler}>
            Submit
          </Button>
        </div>
      ) : null}
      <List>
        {notes ? (
          notes.map((note, index) => (
            <div key={note.id}>
              <SidebarItem
                note={note}
                selectedNoteIndex={selectedNoteIndex}
                index={index}
                setSelectedNote={setSelectedNote}
                setSelectedNoteIndex={setSelectedNoteIndex}
              />
              <Divider />
            </div>
          ))
        ) : (
          <p className={classes.addNoteParagraph}>Add a note!!</p>
        )}
      </List>
    </div>
  );
}

export default withStyles(styles)(Sidebar);
