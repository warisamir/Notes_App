import React, { useEffect, useState } from "react";

export default function Groups() {
  const [groupsArr, setGroupsArr] = useState([]);

  useEffect(() => {
    const savedGroups = JSON.parse(localStorage.getItem("Groups")) || [];
    if (savedGroups) {
      setGroupsArr(savedGroups);
    }
  }, []);
  console.log(groupsArr);
  return (
    <div>
      {groupsArr.map((group, index) => (
        <div key={index} style={{ backgroundColor: group.color }}>
          <span>{group.name}</span>
        </div>
      ))}
    </div>
  );
}
