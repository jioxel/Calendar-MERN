import { addHours } from "date-fns"
import { useCalendarStore, useUiSore } from "../../hooks"

export const FabDelet = () => {

     const {hasEventSelected, startDeletingEvent}=useCalendarStore()

     const handleDelet=()=>{
          startDeletingEvent()
     }
  return (
     <button 
          className="btn btn-danger fab-danger"
          onClick={handleDelet}
          style={{
               display: hasEventSelected ? "":'none'
          }}>
     <i className="fas fa-trash-alt"></i>
     </button>
  )
}