export const getUpdatedSelectedItems = (currentItems, newItem, primaryKey) => {
    if(Array.isArray(newItem)) {
        return newItem;
    }
    const newList = currentItems.filter(item => item[primaryKey] !== newItem[primaryKey]);
    if(newList.length === currentItems.length) {
        newList.push(newItem);
    }
    return newList;
};