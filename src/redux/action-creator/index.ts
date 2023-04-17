import { Dispatch } from "redux";
import { Action, ActionType } from "../actions";
import { Item } from "../reducers/reducer";

export const addItemToList = (item:Item) =>{
    return(dispatch:Dispatch<Action>) =>{
        dispatch({
            type:ActionType.ADD_ITEM,
            payload:item
        })
    }
}

export const removeItemFromList = (itemIndex:number) =>{
    return(dispatch:Dispatch<Action>) =>{
        dispatch({
            type:ActionType.REMOVE_ITEM,
            payload:itemIndex
        })
    }
}