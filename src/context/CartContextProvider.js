import React,{useReducer} from 'react';

const initialstate={
    selectedItems:[],
    itemsCounter:0,
    total:0,
    chechout:false
}
const cartReducer =(state,action)=>{
    switch(action.type){
        case "ADD_ITEM":
            if (!state.selectedItems.find(item=>item.id===action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,
                    quantity:1
                })
            }
            return{
                ...state,
                selectedItems:[...state.selectedItems]
            }
            case "REMOVE_ITEM":
                const newSelectedItems=state.selectedItems.filter(items=>items.id!==action.payload.id);
                selectedItems:[...newSelectedItems]
    }
}

const CartContextProvider = () => {
    const [state,disPatch]=useReducer(cartReducer,initialstate)
    return (
        <div>
            
        </div>
    );
};

export default CartContextProvider;