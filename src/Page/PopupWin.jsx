import React, { useState } from "react";
import "../css/popup.css";

const PopupWin = ({ onAddGroup }) => {
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

  const stopPropagation = (e) => {
    e.stopPropagation();
  }

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };
    // console.log(selectedColor);

  const handleGroupName = (e) => {
    let titleName = e.target.value;
    // if (!titleName) {
    //   titleName = "untitled group";
    // }
    setGroupName(titleName);
  };
//   console.log(groupName);

  const handleSaveGroup = () => {
    if (groupName && selectedColor) {
      const newGroup = { name: groupName, color: selectedColor };

    //   console.log(groupName);

      const updatedGroups = [...groups, newGroup];

    //   console.log(updatedGroups);

      //   localStorage.setItem("Groups", JSON.stringify(updatedGroups));

      setGroupName(""); // Clear the groupName after saving it
      setSelectedColor("");

    //   setGroups(updatedGroups);

      // Now, you can call onAddGroup to add a new group
      onAddGroup(groupName, selectedColor);
    }
  };
//   console.log(groups);

  return (
    <div onClick={stopPropagation}>
      <div className="popUpBox">
        <div className="title">
          <h2>Create New Notes Group</h2>
        </div>
        <div className="groupNameLabel">
          <label>Group Name</label>
          <input
            className="text-input"
            type="text"
            placeholder="Enter your group name"
            value={groupName}
            onChange={handleGroupName}
          />
        </div>
        <div className="colors">
          <label>Choose color</label>
          <div className="colorOptions">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`colorOption ${
                  selectedColor === color ? "selected" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
          </div>
        </div>
        <div className="btn-box">
          <button className="create-btn" onClick={handleSaveGroup}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupWin;
