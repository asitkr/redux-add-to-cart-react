import { combineReducers } from "redux";
import cardItems from "./reducer";


const rootReducer = combineReducers({
    cardItems: cardItems,
})

export default rootReducer;