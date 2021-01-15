import React from "react";

function createNote(props) {
  return (<div className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button type="button" onClick={() => props.deleteItem(props.id)}>DELETE</button>
  </div>)
};

export default createNote;
