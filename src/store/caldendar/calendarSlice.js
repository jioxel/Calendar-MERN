import { createSlice } from "@reduxjs/toolkit";
import { addHours, set } from "date-fns";
const tempEvent={
     _id:new Date().getTime(),
     title: "cumpleaños",
     notes:"Comprar pastel",
     start: new Date(),
     end: addHours(new Date(),2),
     bgColor: '#fafafa',
     user:{
     _id:"123",
     name:"Jovany"
     }
}
export const caldenarSlice=createSlice({
     name:"calendar",
     initialState:{
          events:[
               tempEvent
          ],
          activeEvent:null

     },
     reducers:{
          onSetActiveEvent:(state,{payload})=>{
               state.activeEvent=payload;
          },
          onAddNewEvent:(state,{payload})=>{
               state.events.push(payload);
               set.activeEvent=null;
          },
          onUpdateEvent:(state,{payload})=>{
               state.events=state.events.map((event)=>{
                    if(event._id===payload._id){
                         return payload
                    }
                    return event;
               })
          },
          onDeletEvent:(state)=>{
               if (state.activeEvent){
               state.events=state.events.filter((event)=>event._id!=state.activeEvent._id)
               state.activeEvent=null;
               }
          }
     }
});

export const {onSetActiveEvent,onAddNewEvent, onUpdateEvent,onDeletEvent}=caldenarSlice.actions;