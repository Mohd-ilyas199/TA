import { createStore, combineReducers } from "redux";
import {ProductReducer} from "../Reducer/ProductReducer"

export const ConfigStore = ()=>{
    const Store=createStore(
        combineReducers({
ProductReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
    return Store;
}