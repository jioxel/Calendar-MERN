
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Navbar,CalendarEvent,CalendarModal } from "../";

import { localizer,getMessagesES } from '../../helpers';
import { useState } from 'react';
import { useCalendarStore, useUiSore } from '../../hooks';
import{ FabAddNew, FabDelet}from "../components"






export const CaldenarPage = () => {

  const {openDateModal}=useUiSore();
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');
  const {events,setActiveEvent}=useCalendarStore()

  const onDoubleClick=(event)=>{
    openDateModal();
  }

  const onSelect=(event)=>{
    setActiveEvent(event);
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
      <FabAddNew/>
      <FabDelet/>
    </>
  )
}
