import { configureStore } from "@reduxjs/toolkit";
import mathLabReducer from "./features/math"
export const store = configureStore({
reducer:{
mathLab:mathLabReducer


}


})