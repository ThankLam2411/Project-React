import cartReducer from "./cart";
import { combineReducers } from "redux";

export default combineReducers({
    Cart: cartReducer,
});