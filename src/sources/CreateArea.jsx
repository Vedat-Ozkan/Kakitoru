import React, { useState } from "react";

function CreateArea(props) {
  
  const [note, updateNote] = useState({
    title: "",
    content: ""
  });


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
      <form className="form">
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={handleChange}  name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button type="button" onClick={() => props.addArray({title: note.title, content: note.content})}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
