import React, { useState, useEffect } from 'react'

function Timer({ millis }) {
    const [time, updateTime] = useState(millis - Date.parse(new Date()));

    useEffect(() => {
        tick();
    }, [])

    const tick = () => {
        setInterval(() => {
            let minutes = Math.floor((time / 1000 / 60) % 60) / Math.floor((time / (1000 * 60 * 60)) % 24);
            console.log('вызов функции')
            updateTime(time => time-60000)
        }, 60000)
    }

    return (
        <div>
            <div className='deadline-timer'>{Math.floor((time / (1000 * 60 * 60)) % 24)}ч.&nbsp;{Math.floor((time / 1000 / 60) % 60)}м.</div>
        </div>
    )
}

export default Timer
