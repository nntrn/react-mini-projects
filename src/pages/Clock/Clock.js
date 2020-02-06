import React, { useState } from 'react'
import './Clock.scss'

const time = {
  now: new Date(),
  hour: () => ((time.now.getHours() % 12 || 12) < 10 ? '0' : '') + (time.now.getHours() % 12 || 12),
  minutes: () => time.now.getMinutes(),
  ampm: () => {
    return time.hour < 12 ? '0' : '1'
  },
  normalTime: () => time.now.toTimeString(),
  timeOfDay: ['AM', 'PM']
}

function Clock() {
  const [hour, setHour] = useState(time.hour)
  const [minutes, setMinutes] = useState(time.minutes)
  const [ampm, setTimeOfDay] = useState(time.ampm)

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
      return ampm === 0 ? 1 : 0
    })

  return (
    <div id="clock" className={'time-' + ampm}>
      <h2 className="project-title">Clock</h2>
      <div className={'clock time-' + ampm}>
        <button className="time-button" onClick={handleHour}>
          {hour}
        </button>
        <span className="blinking">:</span>
        <button className="time-button" onClick={handleMinutes}>
          {minutes + 1 <= 10 ? '0' + minutes.toString() : minutes}
        </button>
        <button className={'ampm time-' + ampm} onClick={handleAmPm}>
          {time.timeOfDay[ampm]}
        </button>
      </div>
    </div>
  )
}

export default Clock
