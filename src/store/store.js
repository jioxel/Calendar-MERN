import { configureStore } from "@reduxjs/toolkit";
import { caldenarSlice } from "./";
import { uiSlice } from "./ui/uiSlice";
export const store=configureStore({
     reducer:{ 
          ui:uiSlice.reducer,
          caldenar:caldenarSlice.reducer,
     },
     middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
          serializableCheck: false
     })
})