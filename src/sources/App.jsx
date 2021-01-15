import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./CreateArea";

function App() {

  const [arr, setArr] = useState([])

  function addArray(item) {
    setArr(prevItems => [...prevItems, item])
    console.log(arr);
  }

  function deleteItem(id) {
    setArr(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    })
  }

 
  return <div>
    <Header />
    <CreateArea 
      addArray={addArray}
    />
    {arr.map((item, index) => (
      <Note 
        key={index}
        id={index}
        title={item.title}
        content={item.content}
        deleteItem={deleteItem}
      />
      ))}
    <Footer />
    
  </div>
};

export default App;