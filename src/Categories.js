import React from "react";
import "./categories.css";
function categories({ selected, title }) {
  return (
    <div className={`categories ${selected && "select"}`}>
      <p>{title}</p>
    </div>
  );
}

export default categories;
