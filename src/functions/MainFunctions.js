
export const isSelected = (selectedItems, pos) => {

    let result = '';

    selectedItems.map( item => {
        if(item == pos){
            result = 'selected';
        }
    })

    return result;
}

export const addItem = (item, setItems) => {
    if(item != ""){
        setItems(oldArray => [...oldArray, item]);
    }
}

export const deleteSelectedItems = (selectedItems, setItems, setSelectedItems, items, setUndoItems) => {

    const undoArray = [];

    selectedItems.map( id => {
        undoArray.push(items[id]);
        setItems(item=> item.filter((s,i)=>(i != id)));
    });

    setSelectedItems([]);
    setUndoItems(undoArray);
}

export const undoOldItems = (undoItems, setItems, setUndoItems, setSelectedItems) => {
    setItems(oldArray => [...oldArray, ...undoItems]);
    setUndoItems([]);
    setSelectedItems([]);
}