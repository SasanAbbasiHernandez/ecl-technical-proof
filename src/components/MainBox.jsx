import React, { useState } from 'react';

import '../styles/mainBox.scss';
import AddModal from './AddModal';
import Buttons from './Buttons';
import ItemsBox from './ItemsBox';

export default function MainBox() {

    const [items, setItems] = useState([]);
    const [undoItems, setUndoItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    const [showModal, setShowModal] = useState(false);

    return (
        <div className='main-box'>
            <AddModal
                setItems={setItems}
                showModal={showModal}
                setShowModal={setShowModal}
            />
            <h1>This is a technical proof</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipiscing, elit mus primis nec inceptos. 
                Lacinia habitasse arcu molestie maecenas cursus quam nunc, hendrerit posuere augue 
                fames dictumst placerat porttitor, dis mi pharetra vestibulum venenatis phasellus.
            </p>
            <ItemsBox
                items={items}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
            />
            <Buttons 
                setShowModal={setShowModal}
                selectedItems={selectedItems}
                setItems={setItems}
                setSelectedItems={setSelectedItems}
                items={items}
                setUndoItems={setUndoItems}
                undoItems={undoItems}
            />
        </div>
    )
}
