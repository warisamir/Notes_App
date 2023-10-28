import React, { useEffect, useRef, useState } from "react";
import PopUp from "./PopUp";
import styles from "../css/Create.module.css";
import pstyles from "../css/PopUp.module.css";
import Groups from "./Groups";

export default function Create() {
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [allGroups, setAllGroups] = useState([])

  useEffect(() => {
    const allSavedGroups = JSON.parse(localStorage.getItem("Groups"));
    if (allSavedGroups) {
      setAllGroups(allSavedGroups)
    }
  }, []);
  console.log(allGroups)

  const handleSaveGroup = (newGroup) => {
    const updatedGroups = [...allGroups, newGroup];
    setAllGroups(updatedGroups);

    localStorage.setItem("Groups", JSON.stringify(updatedGroups))
  }

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setButtonPopUp(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);
  });
  return (
    <div className={styles.groupsSec}>
      <h2>Pocket Notes</h2>
      <button onClick={() => setButtonPopUp(true)}>Create New Group</button>
      <div className={pstyles.popUpCover}>
        <div ref={menuRef} className={styles.popUpContainer}>
          <PopUp onSaveGroup={handleSaveGroup} trigger={buttonPopUp} />
        </div>
        <Groups allGroups={allGroups} />
      </div>
    </div>
  );
}
