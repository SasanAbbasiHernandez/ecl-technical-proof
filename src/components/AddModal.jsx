import React, {useState} from 'react';
import { addItem } from '../functions/MainFunctions'

import "../styles/addModal.scss";

export default function AddModal(props) {

  const { setShowModal, setItems, showModal } = props;

  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
    
  const closeModal = (event) => {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
      setShowModal(false);
    }
  };

  const addNewItem = () => {
    setInputText("");
    addItem(inputText, setItems);
  }

  return (
    <div  id="myModal" className={`shadow-modal ${showModal ? "active" : ""}`} onClick={closeModal}>
        <div className='add-modal'>
            <p>Add Item to list</p>
            <input placeholder='Type the text here...' type="text" onChange={handleChange} value={inputText}/>
            <div className='modal-buttons-wrapper'>
                <button className='button blue' onClick={addNewItem}>Add</button>
                <button className='button ml-15' onClick={() => setShowModal(false)}>Cancel</button>
            </div>
        </div>
    </div>
  )
}
