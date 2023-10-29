// import Groups from "./components/Groups";
// import PopUp from "./components/PopUp";
// import Create from "./components/Create";
// import styles from "./css/App.css";
// import Sidebar from "./Page/Sidebar";
// import Main from "./Page/Main";
// import { useState } from "react";
// import PopupWin from "./Page/PopupWin";
// import { v4 as uuidv4 } from "uuid";

// export default function App() {
//   const [groups, setGroups] = useState([]);
//   const [PopUpOpen, setPopUpOpen] = useState(false);
//   const [activeGroup, setActiveGroup] = useState(false);
//   const [groupName, setGroupName] = useState("");

//   const onAddGroup = (groupName, selectedColor) => {
//     const newGroup = {
//       id: uuidv4(),
//       title: groupName || "untitled group",
//       color: selectedColor,
//       body: "",
//     };
//     setGroups([newGroup, ...groups]);
//     setPopUpOpen(false);
//   };

//   const onUpdateGroup = (updatedGroup) => {
//     const updatesGroupsArray = groups.map((group) => {
//       if (group.id === activeGroup) {
//         return updatedGroup;
//       }

//       return group;
//     });

//     setGroups(updatesGroupsArray);
//   };

//   const getActiveGroup = () => {
//     return groups.find((group) => group.id === activeGroup);
//   };

//   return (
//     <div className="App">
//       <Sidebar
//         groups={groups}
//         setPopUpOpen={setPopUpOpen}
//         activeGroup={activeGroup}
//         setActiveGroup={setActiveGroup}
//         groupName={groupName}
//       />
//       <Main activeGroup={getActiveGroup()} onUpdateGroup={onUpdateGroup} />
//       {PopUpOpen && (
//         <PopupWin onAddGroup={onAddGroup} setGroupName={setGroupName} />
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import "./css/App.css";
import Sidebar from "./Page/Sidebar";
import Main from "./Page/Main";
import PopupWin from "./Page/PopupWin";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [groups, setGroups] = useState([]);
  const [PopUpOpen, setPopUpOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState(null); // activeGroup should be an object
  const [groupName, setGroupName] = useState("");

  const onAddGroup = (groupName, selectedColor) => {
    const newGroup = {
      id: uuidv4(),
      title: groupName || "untitled group",
      color: selectedColor,
      notes: [], // Initialize an empty array for notes
    };
    setGroups([newGroup, ...groups]);
    setPopUpOpen(false);
  };

  const onUpdateGroup = (updatedGroup) => {
    const updatedGroupsArray = groups.map((group) =>
      group.id === updatedGroup.id ? updatedGroup : group
    );
    setGroups(updatedGroupsArray);
  };

  const getActiveGroup = () => {
    return groups.find((group) => group.id === activeGroup);
  };

  const closePopUp = () => {
    setPopUpOpen(false);
  }

  return (
    <div className="App">
      <Sidebar
        groups={groups}
        setPopUpOpen={setPopUpOpen}
        activeGroup={activeGroup}
        setActiveGroup={setActiveGroup}
        groupName={groupName}
      />
      <Main activeGroup={getActiveGroup()} onUpdateGroup={onUpdateGroup} />
      {PopUpOpen && (
        <div className="modal-overlay" onClick={closePopUp}>
          <PopupWin onAddGroup={onAddGroup} setGroupName={setGroupName} />
        </div>
      )}
    </div>
  );
}
