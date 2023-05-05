import {Item} from '../reducers/reducer';

export enum ActionType {
  ADD_ITEM = 'addItem',
  REMOVE_ITEM = 'removeItem',
}

export const removeItemFromList = (itemIndex: number, itemArr: Item[]) => {
  return {
    type: ActionType.REMOVE_ITEM,
    index: itemIndex,
    itemList: itemArr,
  };
};

export const addItemToList = (item: Item) => {
  return {
    type: ActionType.ADD_ITEM,
    item
  };
};
