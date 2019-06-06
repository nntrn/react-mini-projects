import React, { useState } from 'react'
import './Clock.css'

function Clock() {
  const [hour, setHour] = useState(7)
  const [minutes, setMinutes] = useState(30)
  const [time, setTimeOfDay] = useState(0)

  const handleHour = () =>
    setHour(() => {
      return hour + 1 <= 12 ? hour + 1 : 1
    })

  const handleMinutes = () =>
    setMinutes(() => {
      return minutes + 1 <= 59 ? minutes + 1 : 0
    })

  const handleAmPm = () =>
    setTimeOfDay(() => {
      return time == 0 ? 1 : 0
    })

  return (
    <>
      <div className="info-banner" style={{ marginBottom: '20px' }}>
        easily update hour, minutes, and time of day using Hooks in <em>React 16.8</em>
      </div>
      <center>
        <div className={'clock no-flow ' + 'time-' + time}>
          <div className="time">
            <button className="analog" onClick={handleHour}>
              {hour}
            </button>
            <span className="blinking">:</span>
            <button className="analog" onClick={handleMinutes}>
              {minutes < 10 && '0'}
              {minutes}
            </button>
          </div>
          <button className={'small time-' + time} onClick={handleAmPm}>
            {time === 0 ? 'AM' : 'PM'}
          </button>
        </div>
      </center>
    </>
  )
}

export default Clock
