import { combineReducers } from "@reduxjs/toolkit";
import listReducer from "./listReducers";
const rootReducer = combineReducers({
   list_type: listReducer,
    
    
})

export default rootReducer