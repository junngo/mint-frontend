import { combineReducers } from "redux";
import auth from "./auth";
import stock from "./stock";


const rootReducer = combineReducers({
    auth,
    stock,
});

export default rootReducer;
