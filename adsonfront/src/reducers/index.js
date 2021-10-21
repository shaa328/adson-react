import loggedReducer from "./isLogged";



import projectReducer from "./project";
import messageReducer from "./message";
import { combineReducers } from "redux";

const allReducers = combineReducers({
 
 
  projects: projectReducer,
  messages: messageReducer,
  login: loggedReducer,
});

export default allReducers;
