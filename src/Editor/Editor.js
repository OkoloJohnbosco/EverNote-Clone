import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import debounce from "../helpers";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { db, timestamp } from "../Firebase/Firebase";

function Editor({ classes, selectedNote }) {
  const [text, setText] = useState("");
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    let { body, id } = selectedNote;

    if (id !== selectedId) {
      setText(body);
      setSelectedId(id);
    }
  }, [selectedNote, selectedId]);

  useEffect(() => {
    if (text != "") {
      db.collection("notes").doc(selectedId).update({
        body: text,
        createdAt: timestamp(),
      });
    }
    console.log(text);
  }, [text]);

  const updateBody = (val) => {
    update(val);
  };

  const update = debounce((val) => {
    console.log("Debouncing all");
    setText(val);
  }, 1000);

  return (
    <div className={classes.editorContainer}>
      <ReactQuill value={text} onChange={updateBody} />
    </div>
  );
}

export default withStyles(styles)(Editor);
