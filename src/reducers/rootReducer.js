import { combineReducers } from "redux";
import { pokemonReducer } from "./pokemon";
import { uiReducer } from "./ui";

const rootReducer = combineReducers({
    //sin toolkit
    data: pokemonReducer,
    ui: uiReducer

    //con toolkit
    // data: dataReducer
})

export default rootReducer