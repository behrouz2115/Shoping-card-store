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
            return{
                    ...state,
                    selectedItems:[...newSelectedItems]
            }
         case "INCREASE":
                const indexI=state.selectedItems.findIndex(item=>items.id===action.payload.id);
                state.selectedItems[indexI].quantity++;
                return{
                    ...state,
                }
         case "DECREASE":
             const indexD=state.selectedItems.findIndex(item=>items.id===action.payload.id);
             state.selectedItems[indexD].quantity--;
             return{
                 ...state,
             }
         case "CHECKOUT":
            return{
                selectedItems:[],
                itemsCounter:0,
                total:0,
                chechout:true
            }


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