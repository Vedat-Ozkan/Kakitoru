import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function createNote(props) {
  return (<div className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button type="button" onClick={() => props.deleteItem(props.id)}>
      <DeleteIcon />
    </button>
  </div>)
};

export default createNote;
