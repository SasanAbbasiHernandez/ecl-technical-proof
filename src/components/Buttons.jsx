import React from 'react';

import { deleteSelectedItems, undoOldItems } from '../functions/MainFunctions';

import "../styles/buttons.scss";

export default function Buttons(props) {

  const { setShowModal, setItems, selectedItems, setSelectedItems, items, setUndoItems, undoItems } = props;

  return (
    <div className='buttons-wrapper'>
      <button className='button mr-15' onClick={() => undoOldItems(undoItems, setItems, setUndoItems, setSelectedItems)}>
        <img className='button-image' src={require("../assets/buttons/undo.png")}/>
      </button>
      <button className='button mr-442' onClick={() => deleteSelectedItems(selectedItems, setItems, setSelectedItems, items, setUndoItems)}>
        Delete
      </button>
      <button className='button blue' onClick={() => setShowModal(true)}>
        Add
      </button>
    </div>
  )
}
