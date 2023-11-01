// import React, { useState } from "react";

// const Main = ({ activeGroup, onUpdateGroup }) => {
//   const [textareaValue, setTextareaValue] = useState("");
//   const [notes, setNotes] = useState([]);

//   const handleTextareaChange = (e) => {
//     setTextareaValue(e.target.value)
//   }

//   const handleTextareaSave = () => {
//     if(textareaValue) {
//       const currentTime = new Date().toLocaleString();
//       const newNote = {
//         text: textareaValue,
//         time: currentTime,
//       }

//       setNotes([...notes, newNote]);

//       setTextareaValue("")
//     }
//     console.log(textareaValue);
//   }

//   // const onEditField = (key, value) => {
//   //   onUpdateGroup({
//   //     id: activeGroup.id,
//   //     title: activeGroup.title,
//   //     color: activeGroup.color,
//   //     [key]: value,
//   //   });
//   // };
//   // console.log(activeGroup.body)

//   // const addNote = () => {
//   //   return activeGroup.body
//   // }
//   // console.log(activeGroup.notes)

//   if(!activeGroup) return <div className="no-active-group">No group selected</div>

//   return (
//     <div className="main-section">
//       <div className="heading">
//         <div className="group-logo" style={{backgroundColor: activeGroup.color}}>
//           <span className="initials">CU</span>
//         </div>
//         <div className="group-name">
//           <span className="title">{activeGroup.title}</span>
//         </div>
//       </div>
//       <div className="singleGroup">
//         {notes.map((note, index) => (
//           <div key={index}>
//             <div className="time">
//               <span>{note.time}</span>
//             </div>
//             <div className="groupbody">
//               <p>{note.text}</p>
//             </div>
//           </div>
//         ))}
//         {/* <div className="time">
//           <span>10:10 am</span>
//           <span>9 march 2023</span>
//         </div>
//         <div className="groupBody">
//           <p></p>
//         </div> */}
//       </div>
//       <div className="newGroupInput">
//         <textarea
//           id="note-body"
//           placeholder="Enter your text here..."
//           // value={activeGroup.body}
//           value={textareaValue}
//           // onChange={(e) => onEditField("body", e.target.value)}
//           onChange={handleTextareaChange}
//         ></textarea>
//         <button onClick={handleTextareaSave}>Save</button>
//       </div>
//     </div>
//   );
// };

// export default Main;

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import notesImg from "../img/notesImg.png";
import vector from "../img/Vector.svg";
import vectorSave from "../img/Vector-save.svg";
// import "./Main.css";

export default function Main({ activeGroup, onUpdateGroup }) {
  const [noteText, setNoteText] = useState(""); // State to manage the note text

  const handleNoteTextChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleAddNote = () => {
    if (noteText.trim() !== "") {
      // const currentTime = new Date().toLocaleString();
      const currentDate = new Date().toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      // console.log(currentTimeof)
      // console.log(currentDate)
      const newNote = {
        id: uuidv4(),
        text: noteText,
        time: currentTime,
        date: currentDate,
        // Add any other properties you need for your notes
      };

      // Update the active group's notes array
      const updatedGroup = {
        ...activeGroup,
        notes: [...activeGroup.notes, newNote],
      };
      // console.log(updatedGroup);

      // Call the onUpdateGroup function to update the group in the App component's state
      onUpdateGroup(updatedGroup);

      // Clear the note text field
      setNoteText("");
    }
  };

  const handleTextareaKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      // Check if the pressed key is "Enter" without the shift key
      e.preventDefault(); // Prevent the default newline behavior
      handleAddNote(); // Call the function to save the note
    }
  };

  if (!activeGroup)
    return (
      <div className="no-active-group">
        <div className="img-container">
          <img className="notes-img" src={notesImg} alt="notes-img" />
          <h1>Pocket Notes</h1>
          <p>
            Send and receive messages without keeping your phone online. Use
            Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
        </div>
        <div className="encrypted">
          <img src={vector} alt="lock-vector" />
          <span>end-to-end encrypted</span>
        </div>
      </div>
    );

  return (
    <div className="main-section">
      {/* Display group information here */}
      <div className="heading">
        <div
          className="group-logo"
          style={{ backgroundColor: activeGroup.color }}
        >
          <span className="initials">
            {activeGroup.title && activeGroup.title.substr(0, 2)}
          </span>
        </div>
        <div className="group-name">
          <span className="title">{activeGroup.title}</span>
        </div>
      </div>
      {/* Add notes section */}
      <div className="singleGroup">
        {/* Display existing notes */}
        {activeGroup.notes.map((note) => (
          <div key={note.id} className="note">
            <div className="note-time">
              <p>{note.time}</p>
              <p>{note.date}</p>
            </div>
            <div className="note-text">
              <p>{note.text}</p>
            </div>
          </div>
        ))}
        {/* Note input area */}
      </div>
      <div className="newGroupInput">
        <textarea
          id="note-body"
          placeholder="Enter your text here..."
          value={noteText}
          onChange={handleNoteTextChange}
          onKeyDown={handleTextareaKeyPress}
        ></textarea>
        <button className="create-note-btn" onClick={handleAddNote}>
          <img src={vectorSave} alt="save-btn" />
        </button>
      </div>
    </div>
  );
}
