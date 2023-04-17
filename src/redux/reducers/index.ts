import { combineReducers } from "redux";
import { listReducer } from "./reducer";


export const rootReducer = combineReducers({
    reducer:listReducer
}
    )

 export type State = ReturnType<typeof rootReducer>   