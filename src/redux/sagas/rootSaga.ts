import {all, call, put,select, takeLatest} from 'redux-saga/effects'
import { Item } from '../reducers/reducer';
import { ActionType } from '../action-creator';
import { addItem,removeItem } from '../reducers/reducer';

function* addItemToList(props:any){
   yield put(addItem(props.item as Item))
}

function* removeItemFromList(props:any){
  let updatedState:Item[] = yield call(filterList,props.index as number,props.itemList as Item[])
  yield put(removeItem(updatedState))
}

function filterList(index:number,list:Item[]){
   return list.filter((_,i) => i!==index)
}

function* addItemWatcher(){
   yield takeLatest(ActionType.ADD_ITEM,addItemToList)
}

function* removeItemWatcher(){
  yield takeLatest(ActionType.REMOVE_ITEM,removeItemFromList)
}

export function* rootSaga(){
    yield all([
        addItemWatcher(),
        removeItemWatcher()
    ])
}