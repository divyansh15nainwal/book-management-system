import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice ({
  name : "cart",
  initialState :{
    items :[],
  },
  reducers :{
    additem : (state, action)=>{
      state.items.push(action.payload);

    },
    removeitem : (state, action )=>{
      state.items.pop();

    },
    clearitem : (state, action )=>{
      state.items = [];
      
    }
  }
});

export const {additem, clearitem,removeitem}= cardSlice.actions;
export default cardSlice.reducer;