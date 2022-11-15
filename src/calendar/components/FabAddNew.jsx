import { addHours } from "date-fns"
import { useCalendarStore, useUiSore } from "../../hooks"

const tempEvent={
     title: "",
     notes:"",
     start: new Date(),
     end: addHours(new Date(),2),
     bgColor: '#fafafa',
     user:{
          _id:"123",
          name:"Jovany"
     }
}
export const FabAddNew = () => {
     const {openDateModal}=useUiSore()
     const {setActiveEvent}=useCalendarStore()

     const handleClickNew=()=>{
          setActiveEvent(tempEvent)
          openDateModal()
     }
  return (
     <button 
          className="btn btn-primary fab"
          onClick={handleClickNew}>
     <i className="fas fa-plus"></i>
     </button>
  )
}