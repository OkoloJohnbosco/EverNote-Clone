import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { db } from "../Firebase/Firebase";
import { removeHTMLTags, formatDate, formatTime } from "../helpers";

function SidebarItem({
  classes,
  note,
  selectedNoteIndex,
  index,
  setSelectedNote,
  setSelectedNoteIndex,
}) {
  useEffect(() => {
    return () => {
      setSelectedNote(null);
      setSelectedNoteIndex(null);
    };
  }, []);

  const selectNote = (n, i) => {
    setSelectedNote(() => n);
    setSelectedNoteIndex(() => i);
  };

  const deleteNote = () => {
    if (
      window.confirm(
        `Do you really want to delete: ${note.title.substring(0, 10)}...?`
      )
    ) {
      setSelectedNoteIndex(null);
      setSelectedNote(null);
      db.collection("notes").doc(note.id).delete();
    }
  };

  return (
    <div className={classes.listWrapper}>
      <ListItem
        className={classes.listItem}
        selected={selectedNoteIndex === index}
        alignItems="flex-start"
      >
        <div className={classes.textSection}>
          <ListItemText
            onClick={() => selectNote(note, index)}
            primary={note.title}
            secondary={`${removeHTMLTags(note.body.substring(0, 30))}... `}
          ></ListItemText>
        </div>
        <DeleteIcon onClick={deleteNote} className={classes.deleteIcon} />
      </ListItem>

      {/* <p className={classes.small}>
        <span>{formatDate(note?.createdAt.seconds)}</span>
        <span>{formatTime(note?.createdAt.seconds)}</span>
      </p> */}
    </div>
  );
}

export default withStyles(styles)(SidebarItem);
