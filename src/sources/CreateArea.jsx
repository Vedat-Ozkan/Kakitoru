import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FontIcon from '@material-ui/icons/FontDownloadSharp';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { Typography } from "@material-ui/core";


function CreateArea(props) {
  
  const [note, updateNote] = useState({
    title: "",
    content: "",
    font: "Arial"
  });

  const [mouseIn, updateMouse] = useState(false);
  const fonts = ["Garamond", "Arial", "Georgia", "Times New Roman", "Tahoma", "Verdana", "Indie Flower"];
  const [fontArr, setFonts] = useState(fonts);
  function handleChange(event) {
    console.log(event)
    let {name, value} = event.target;
    if (name === undefined && value === undefined) {
      name = "font";
      value = event.target.outerText
    }
    console.log(name, value);

    updateNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
    console.log(note);

  }

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const clickandchange = (event) => {
    handleClick();
    handleChange(event);
  }


  return (
    <div>
      <form className="create-note" >
        {mouseIn && <input style={{fontFamily:note.font.toLowerCase()}} onChange={handleChange} name="title" placeholder="Title" value={note.title}/>}
        <textarea style={{fontFamily:note.font.toLowerCase()}} onChange={handleChange} onClick={() => updateMouse(true)} name="content" placeholder="Take a note..." rows={mouseIn ? "3" : "1"} value={note.content} />
        <Zoom in={mouseIn}>
          {<Fab type="button" onClick={() => props.addArray({title: note.title, content: note.content, font: note.font})}>
            <AddIcon />
          </Fab>}
        </Zoom>
        <Zoom in={mouseIn}>
          <List>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <FontIcon />
              </ListItemIcon>
              <ListItemText primary={<Typography style={{fontFamily:note.font.toLowerCase()}}>{note.font}</Typography>} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={! open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {fontArr.map(function(e) {
                  return <ListItemButton sx={{ pl: 4 }} style={{ flexDirection:"row" }}>
                    <ListItemText primary={<Typography style={{fontFamily:e.toLowerCase()}}> {e} </Typography>} onClick={(event) => clickandchange(event)} name="font" value={e}/>
                  </ListItemButton>
                })}
              </List>
            </Collapse>
          </List>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
