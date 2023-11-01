import React from "react";

const Sidebar = ({
  groups,
  PopUpOpen,
  setPopUpOpen,
  activeGroup,
  setActiveGroup,
}) => {
  const popUpState = () => {
    setPopUpOpen(true);
  };

  // const styles = {
  //   display: "block"
  // };
  // if (window.innerWidth < 426) {
  //   styles.display = "none";
  // }
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Pocket Notes</h1>
      </div>
      <div className="app-sidebar-create">
        <button onClick={popUpState}>
          <span>+</span>Create Notes group
        </button>
      </div>
      <div className="app-sidebar-groups">
        {groups.map((group) => (
          <div
            key={group.id}
            className={`app-sidebar-group ${group.id === activeGroup && "active"}`}
            onClick={() => setActiveGroup(group.id)}
          >
            <div className="group-logo" style={{backgroundColor: group.color}}>
              <span className="initials">{group.title && group.title.substr(0, 2)}</span>
            </div>
            <div className="group-name">
              <span className="title">{group.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
