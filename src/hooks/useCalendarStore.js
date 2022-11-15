import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeletEvent, onSetActiveEvent, onUpdateEvent } from "../store/caldendar/calendarSlice"



export const useCalendarStore = () => {

     const {events,activeEvent}=useSelector((store)=>store.caldenar)
     const dispatch=useDispatch()
     
     const setActiveEvent=( calendarEvent)=>{
          dispatch(onSetActiveEvent(calendarEvent))
     }

     const startSavingEvent=async( calendarEvent)=>{
          //TODO: llegar al backend

          if(calendarEvent._id){
               dispatch(onUpdateEvent({...calendarEvent}))
          }else{
               dispatch(onAddNewEvent({...calendarEvent,_id: new Date().getTime()}))
          }
     }

     const startDeletingEvent=()=>{
          dispatch(onDeletEvent())
     }

     return{
          //Props
          events,
          activeEvent,
          hasEventSelected:!!activeEvent,

          //Methods
          setActiveEvent,
          startSavingEvent,
          startDeletingEvent,

     }
}