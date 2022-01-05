import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import styled from 'styled-components'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Title from '../../../components/Title'

const DivCalendar = styled.div`
  background-color: white;
  font-family: Nunito Sans;
  width: 60vw;
  height: 40vw;
  max-width: 1000px;
  max-height: 600px;
  .rbc-event{
    background-color: #127475;
  }
  .rbc-off-range-bg{
    background-color: white;
  }
`


export default function CalendarComponent() {
  const localizer = momentLocalizer(moment)
  const myEventsList = [
    {
      start: moment().toDate(),
      end: moment()
        .add(1, "days")
        .toDate(),
      title: "festa do jp",
      allDay: true
    }
  ]

  return (
  <div style={{zIndex: 1}}>
    <Title Color='#F5DFBB' >calendário</Title>
    <DivCalendar>
      <Calendar
        toolbar={true}
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      />
    </DivCalendar>
  </div>
  )
}
