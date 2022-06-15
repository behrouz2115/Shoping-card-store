import React,{createContext, useReducer} from 'react';

const initialstate={
    selectedItems:[],
    itemsCounter:0,
    total:0,
    chechout:false
}

const sumItems =items=>{
    const itemsCounter=items((total,product)=>total+product.quantity,0);
    const total=items((total,product)=>total+product.price*product.quantity).toFixed(2);
    return {itemsCounter:itemsCounter,total:total}
}

const cartReducer =(state,action)=>{
    console.log(state)

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
                selectedItems:[...state.selectedItems],
                ...sumItems(state.selectedItems)
            }
        case "REMOVE_ITEM":
                const newSelectedItems=state.selectedItems.filter(items=>items.id!==action.payload.id);
            return{
                    ...state,
                    selectedItems:[...newSelectedItems],
                    ...sumItems(state.selectedItems)
            }
         case "INCREASE":
                const indexI=state.selectedItems.findIndex(item=>item.id===action.payload.id);
                state.selectedItems[indexI].quantity++;
                return{
                    ...state,
                    ...sumItems(state.selectedItems)
                }
         case "DECREASE":
             const indexD=state.selectedItems.findIndex(item=>item.id===action.payload.id);
             state.selectedItems[indexD].quantity--;
             return{
                 ...state,
                 ...sumItems(state.selectedItems)
             }
         case "CHECKOUT":
            return{
                selectedItems:[],
                itemsCounter:0,
                total:0,
                chechout:true
            }
         case "CLEAR":
            return{
                selectedItems:[],
                itemsCounter:0,
                total:0,
                chechout:false
            }
         default:
         return state;


    }
}
export const CarttContext=createContext()

const CartContextProvider = ({children}) => {
    const [state,dispatch]=useReducer(cartReducer,initialstate)
    return (
        <div>
            <CarttContext.Provider value={{state,dispatch}}>
                    {children}
            </CarttContext.Provider>
        </div>
    );
};

export default CartContextProvider;