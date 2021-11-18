import React from "react";
import "./Raw.css";
function Raw({ selected, Icon, title }) {
  return (
    <div className={`raw ${selected && "selected"}`}>
      <Icon className="icon" />
      <h2 className="title">{title}</h2>
    </div>
  );
}

export default Raw;
