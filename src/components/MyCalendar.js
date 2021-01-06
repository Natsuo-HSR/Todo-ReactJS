import React, { useState } from 'react'

import { getDay } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import ru from 'date-fns/locale/ru';



function MyCalendar({uncompletedTodos}) {
    const [date, setDate] = useState();

    const modifiers = {
        noncompl: date => {
            for (let d of uncompletedTodos) {
                if (date.getDate() === d.getDate() &&
                date.getMonth() === d.getMonth()) {
                    return true;
                }
            }
        }
    }
    
    const modifiersClassNames = {
        noncompl: 'noncompl'
    }

    return (
        <div className='my-calendar'>
            <div className='my-calendar__descr'>Календарь</div>
            <div className='my-calendar__container'>
                <DatePickerCalendar className='date-picker-calendar'
                    date={date}
                    onDateChange={setDate}
                    locale={ru}
                    modifiers={modifiers}
                    modifiersClassNames={modifiersClassNames}
                />
            </div>
            <div className='my-calendar__descr'>
                <div className='descr__circle'></div>
                <span className='descr__text'> - невыполненная задача</span>
            </div>
        </div>
    )
}

export default MyCalendar
