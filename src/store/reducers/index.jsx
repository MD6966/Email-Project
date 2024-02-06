import { combineReducers } from "@reduxjs/toolkit";
import listReducer from "./listReducers";
import emailReducer from "./emailReducer";
import folderReducer from "./folderReducer";
import otherReducer from "./otherReducers";
const rootReducer = combineReducers({
  list_type: listReducer,
  email: emailReducer,
  folder: folderReducer,
  other: otherReducer,
});

export default rootReducer;
