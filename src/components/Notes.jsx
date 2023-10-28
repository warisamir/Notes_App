import React, { useState } from "react";
import styles from "../css/Notes.module.css"

export default function Groups() {
  const [groups, setGroups] = useState([]);
  const [newNote, setNewNote] = useState("");

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  const addNote = () => {
    const newGroup = [...groups, newNote];
    setGroups(newGroup);
  };

  console.log(groups);

  return (
    <>
      <div className={styles.notesSec}>
        <textarea
          name="note"
          id=""
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>
        <button onClick={addNote}>Create</button>
      </div>
      <div className="list">
        {groups.map((group) => {
          return <div>{group}</div>;
        })}
      </div>
    </>
  );
}
