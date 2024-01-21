import React from 'react';

import { isSelected } from "../functions/MainFunctions";

import '../styles/itemsBox.scss';

export default function ItemsBox(props) {

    const {items, selectedItems, setSelectedItems} = props;

    const handleSelectItem = (selected, pos) => {
        if(selected == 'selected'){
            setSelectedItems(oldValues => {
                return oldValues.filter(oldPos => oldPos !== pos);
              });
        } else {
            setSelectedItems(oldArray => [...oldArray, pos]);
        }
    }

    return (
        <div className='items-box'>
            {
                items.map( (item, pos) => {
                    const selected = isSelected(selectedItems, pos);
                    return (
                        <div className={`item ${selected}`} key={`${item}+${pos}`} onClick={() => handleSelectItem(selected, pos)}>
                            <p>{item}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
