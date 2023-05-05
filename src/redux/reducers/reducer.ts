import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type Item = {
  name: string;
  occupation: string;
  company: string;
  emailAddress: string;
  phoneNumber: string;
  linkedInUrl: string;
};

const itemList: Item[] = [];
const initialState = {
  dataList: itemList,
};

export const listReducerSlice = createSlice({
  name: 'listSlice',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.dataList = [...state.dataList,action.payload]
    },
    removeItem: (state, action: PayloadAction<Item[]>) => {
      state.dataList = action.payload;
    },
  },
});

export const {addItem, removeItem} = listReducerSlice.actions;
export default listReducerSlice.reducer;
