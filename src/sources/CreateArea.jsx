import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  
  const [note, updateNote] = useState({
    title: "",
    content: ""
  });

  const [mouseIn, updateMouse] = useState(false);


  function handleChange(event) {
    const {name, value} = event.target;

    updateNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })

  }


  return (
    <div>
      <form className="create-note">
        {mouseIn && <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>}
        <textarea onChange={handleChange} onClick={() => updateMouse(true)} name="content" placeholder="Take a note..." rows={mouseIn ? "3" : "1"} value={note.content} />
        <Zoom in={mouseIn}>
          {<Fab type="button" onClick={() => props.addArray({title: note.title, content: note.content})}>
            <AddIcon />
          </Fab>}
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
