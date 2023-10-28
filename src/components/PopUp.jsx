import React, { useEffect, useRef, useState } from "react";
import styles from "../css/PopUp.module.css";
// import "../css/popUp"

export default function PopUp({onAddNote}) {
  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  const [selectedColor, setSelectedColor] = useState("");
  const [groupName, setGroupName] = useState("");
  const [groups, setGroups] = useState([]);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };
  console.log(selectedColor);

  const handleGroupName = (e) => {
    let titleName = e.target.value;
    if(!titleName) {
      titleName = "untitled note";
    }
    setGroupName(titleName);
  };
  console.log(groupName);

  const handleSaveGroup = () => {
    if (groupName && selectedColor) {
      const newGroup = { name: groupName, color: selectedColor };

      const updatedGroups = [...groups, newGroup];

      localStorage.setItem("Groups", JSON.stringify(updatedGroups));

      onAddNote(groupName)

      setGroupName(titleName);
      setSelectedColor("");

      setGroups(updatedGroups);
    }
  };

  console.log(groups);

  return props.trigger ? (
    <div className={styles.box}>
      <div className="popUpBox">
        <h1>Create New Notes group</h1>
        <div>
          <label>Group Name</label>
          <input
            type="text"
            placeholder="Enter your group name"
            value={groupName}
            onChange={handleGroupName}
          />
        </div>
        <div>
          <label>Choose color</label>
          <div className={styles.colorOptions}>
            {colors.map((color, index) => (
              <div
                key={index}
                className={`${styles.colorOption} ${
                  selectedColor === color ? "selected" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
          </div>
          <div>
            <button onClick={handleSaveGroup}>Create</button>
          </div>
        </div>
      </div>
    </div>
  ) : null; // You can use null instead of an empty string
}
