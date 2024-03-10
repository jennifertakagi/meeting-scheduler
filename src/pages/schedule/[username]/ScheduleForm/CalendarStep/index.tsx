import { useState } from 'react'
import { Calendar } from '../../../../../components/Calendar'
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles'

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const isDateSelected = !!selectedDate

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            monday <span>September, 20th</span>
          </TimePickerHeader>

          <TimePickerList>
            <TimePickerItem>08 a.m</TimePickerItem>
            <TimePickerItem>09 a.m</TimePickerItem>
            <TimePickerItem>10 a.m</TimePickerItem>
            <TimePickerItem>11 a.m</TimePickerItem>
            <TimePickerItem>12 p.m</TimePickerItem>
            <TimePickerItem>01 p.m</TimePickerItem>
            <TimePickerItem>02 p.m</TimePickerItem>
            <TimePickerItem>03 p.m</TimePickerItem>
            <TimePickerItem>04 p.m</TimePickerItem>
            <TimePickerItem>05 p.m</TimePickerItem>
            <TimePickerItem>06 p.m</TimePickerItem>
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  )
}
