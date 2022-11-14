
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';


import {addHours} from 'date-fns';
import { Navbar,CalendarEvent,CalendarModal } from "../";

import { localizer,getMessagesES } from '../../helpers';
import { useState } from 'react';



const events=[{
  title: "cumpleaños",
  notes:"Comprar pastel",
  start: new Date(),
  end: addHours(new Date(),2),
  bgColor: '#fafafa',
  user:{
    _id:"123",
    name:"Jovany"
  }
}]


export const CaldenarPage = () => {
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');
  
  const onDoubleClick=(event)=>{
    console.log({doubleClic:event})
  }

  const onSelect=(event)=>{
    console.log({click:event})
  }

  const onViewChanged=(event)=>{
    localStorage.setItem('lastView',event)
    setLastView(event)
  }
  const eventStyleGetter =(event,star,end,isSelected)=>{
    const style={
      backgroudColor:"#347CF7",
      borderRadius: '0px',
      opacity:0.8,
      color:"white"
    }
    return{style}
  }
  return (
    <>
      <Navbar/>


      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event:CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
        

      />
      <CalendarModal/>
    </>
  )
}
