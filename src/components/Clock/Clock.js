import React, { useState } from 'react'
import './Clock.css'
import IcoMoon from 'react-icomoon'

const initTime = {
  now: new Date(),
  hour: () => (initTime.now.getHours() === 0 ? 12 : initTime.now.getHours()),
  minutes: () => initTime.now.getMinutes(),
  ampm: () => {
    return initTime.hour < 12 ? 0 : 1
  },
  normalTime: () => initTime.now.toTimeString()
}

function Clock() {
  const [hour, setHour] = useState(initTime.hour)
  const [minutes, setMinutes] = useState(initTime.minutes)
  const [ampm, setTimeOfDay] = useState(initTime.ampm)

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
      return ampm == 0 ? 1 : 0
    })

  return (
    <div className={'container time-' + ampm}>
      <center>
        <div className={'time-' + ampm}>
          <button className={'ampm time-' + ampm} onClick={handleAmPm}>
            <IcoMoon
              icon={ampm === 0 ? 'sun' : 'cloud'}
              className="clock-icon"
              time={ampm === 0 ? 'AM' : 'PM'}
            />
          </button>
          <div className="clock">
            <button className="analog" onClick={handleHour}>
              {hour}
            </button>
            <span className="blinking">:</span>
            <button className="analog" onClick={handleMinutes}>
              {minutes < 10 && '0'}
              {minutes}
            </button>
          </div>
          <div className="info-banner" style={{ marginBottom: '20px' }}>
            created using Hooks
          </div>
        </div>
      </center>
    </div>
  )
}

export default Clock
