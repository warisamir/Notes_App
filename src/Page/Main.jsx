import React, { useState } from "react";

const Main = ({ activeGroup, onUpdateGroup }) => {
  const [textareaValue, setTextareaValue] = useState("");
  const [notes, setNotes] = useState([]);

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value)
  }

  const handleTextareaSave = () => {
    if(textareaValue) {
      const currentTime = new Date().toLocaleString();
      const newNote = {
        text: textareaValue,
        time: currentTime,
      }

      setNotes([...notes, newNote]);

      setTextareaValue("")
    }
    console.log(textareaValue);
  }

  // const onEditField = (key, value) => {
  //   onUpdateGroup({
  //     id: activeGroup.id,
  //     title: activeGroup.title,
  //     color: activeGroup.color,
  //     [key]: value,
  //   });
  // };
  // console.log(activeGroup.body)

  // const addNote = () => {
  //   return activeGroup.body
  // }
  // console.log(activeGroup.notes)

  if(!activeGroup) return <div className="no-active-group">No group selected</div>

  return (
    <div className="main-section">
      <div className="heading">
        <div className="group-logo" style={{backgroundColor: activeGroup.color}}>
          <span className="initials">CU</span>
        </div>
        <div className="group-name">
          <span className="title">{activeGroup.title}</span>
        </div>
      </div>
      <div className="singleGroup">
        {notes.map((note, index) => (
          <div key={index}>
            <div className="time">
              <span>{note.time}</span>
            </div>
            <div className="groupbody">
              <p>{note.text}</p>
            </div>
          </div>
        ))}
        {/* <div className="time">
          <span>10:10 am</span>
          <span>9 march 2023</span>
        </div>
        <div className="groupBody">
          <p></p>
        </div> */}
      </div>
      <div className="newGroupInput">
        <textarea
          id="note-body"
          placeholder="Enter your text here..."
          // value={activeGroup.body}
          value={textareaValue}
          // onChange={(e) => onEditField("body", e.target.value)}
          onChange={handleTextareaChange}
        ></textarea>
        <button onClick={handleTextareaSave}>Save</button>
      </div>
    </div>
  );
};

export default Main;
