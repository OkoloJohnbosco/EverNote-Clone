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
  const selectNote = (e, n, i) => {
    if (!e.target.classList.contains("SidebarItem-deleteIcon-15")) {
      setSelectedNote(n);
      setSelectedNoteIndex(i);
    }
  };
  console.log(selectedNoteIndex);
  const deleteNote = ({ id }) => {
    if (
      window.confirm(
        `Do you really want to delete: ${note.title.substring(0, 10)}...?`
      )
    ) {
      console.log("From sidebar Items");
      setSelectedNoteIndex(null);
      setSelectedNote(null);
      console.log("object");
      db.collection("notes").doc(id).delete();
    }
  };
  return (
    <div className={classes.listWrapper}>
      <ListItem
        className={classes.listItem}
        selected={selectedNoteIndex === index}
        alignItems="flex-start"
        onClick={(e) => selectNote(e, note, index)}
      >
        <div className={classes.textSection}>
          <ListItemText
            primary={note.title}
            secondary={`${removeHTMLTags(note.body.substring(0, 30))}... `}
          ></ListItemText>
        </div>
        <DeleteIcon
          onClick={() => deleteNote(note)}
          className={classes.deleteIcon}
        />
      </ListItem>

      <p className={classes.small}>
        <span>{formatDate(note?.createdAt.seconds)}</span>
        <span>{formatTime(note?.createdAt.seconds)}</span>
      </p>
    </div>
  );
}

export default withStyles(styles)(SidebarItem);
