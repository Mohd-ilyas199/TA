export const ProductReducer = (state={product:[]},action)=> {
    if(action.type==="ADD_PRODUCT"){
        return{
            ...state,
            product:[...action.data,...state.product],
        };
    }
    if(action.type==="REM_PRODUCT"){
        // const newdata=state.product.filter((item)=>item !==action.data);
        state.product.pop();
        return{
            // ...state,
            product:[...state.product],
        };
    }
    return state;
    }