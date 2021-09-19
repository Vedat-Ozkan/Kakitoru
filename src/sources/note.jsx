import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { fontFamily } from "@mui/system";

function createNote(props) {
  return (<div className="note">
    <h1 style={{fontFamily:props.font.toLowerCase()}}>{props.title}</h1>
    <p style={{fontFamily:props.font.toLowerCase()}}>{props.content}</p>
    <button type="button" onClick={() => props.deleteItem(props.id)}>
      <DeleteIcon />
    </button>
  </div>)
};

export default createNote;
