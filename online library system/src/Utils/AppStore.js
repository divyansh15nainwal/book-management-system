import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice"

const Appstore = configureStore({
  reducer :{
    cart : cardReducer,
  }
});

export default Appstore;