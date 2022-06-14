const shorten =(title)=>{
    const splitedTitle=title.split(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return newTitle;
}
const isInCart = (state,id)=>{
    const result=!!state.selectedItems.find(item=>item.id===id);
    return result;
}
export {shorten,isInCart};