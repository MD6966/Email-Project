import { combineReducers } from "@reduxjs/toolkit";
import listReducer from "./listReducers";
import emailReducer from "./emailReducer";
import folderReducer from "./folderReducer";
const rootReducer = combineReducers({
   list_type: listReducer,
   email:emailReducer,
   folder:folderReducer
    
    
})

export default rootReducer