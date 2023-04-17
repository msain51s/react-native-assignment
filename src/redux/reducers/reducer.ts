import { Action, ActionType } from "../actions"


export type Item = {
        name: string,
        occupation: string,
        company: string,
        emailAddress: string,
        phoneNumber: string,
        linkedInUrl: string
}

const initialState : Item[] =[]

export const listReducer = (state=initialState,action:Action) =>{
    switch(action.type){
        case ActionType.ADD_ITEM:
            return [...state,action.payload]
        case ActionType.REMOVE_ITEM:
            return state= [...state.filter((_,i)=> i!==action.payload)]
        default:
            return state      
    }

}