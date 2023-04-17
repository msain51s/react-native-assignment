import { Item } from "../reducers/reducer"

export enum ActionType {
    ADD_ITEM = "addItem",
    REMOVE_ITEM = "removeItem"
}

interface AddItem {
    type:ActionType.ADD_ITEM,
    payload:Item
}

interface RemoveItem {
    type:ActionType.REMOVE_ITEM,
    payload:number
}

export type Action = AddItem | RemoveItem