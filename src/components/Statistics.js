import React from 'react'
import MyCalendar from './MyCalendar'
import MyStatistics from './MyStatistics'

function Statistics({uncompletedTodos}) {
    
    console.dir(uncompletedTodos);
    return (
        <div className='statistics'>
            <div className='statistics__container'>
                <MyCalendar 
                uncompletedTodos={uncompletedTodos}
                />
                <MyStatistics />
            </div>
        </div>
    )
}

export default Statistics
