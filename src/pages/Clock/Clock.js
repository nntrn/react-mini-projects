import React, { useState } from 'react'

import { AnalogClock, ClockContainer } from './style'

const time = {
  now: new Date(),
  hour: () => time.now.getHours() > 12 ? time.now.getHours() - 12 : time.now.getHours(),
  minutes: () => time.now.getMinutes(),
  seconds: () => time.now.getSeconds(),
  ampm: () => (time.hour < 12 ? 0 : 1),
  normalTime: () => time.now.toTimeString(),
  timeOfDay: ['AM', 'PM'],
  timeFormat: t => String(t).padStart(2, 0).split(''),
}

function Clock() {
  const [hour, setHour] = useState(time.hour)
  const [minutes, setMinutes] = useState(time.minutes)
  const [seconds, setSeconds] = useState(time.seconds)
  const [ampm, setTimeOfDay] = useState(time.ampm)

  const handleAmPm = () =>
    setTimeOfDay(() => {
      return ampm === 0 ? 1 : 0
    })

  const handleHour = i =>
    setHour(() => {
      let mod = Number(i) === 0 ? -1 : 1
      return hour + mod <= 12 && hour + mod > 0 ? hour + mod : hour + mod > 12 ? 1 : 12
    })

  const handleMinutes = i =>
    setMinutes(() => {
      let mod = Number(i) === 0 ? -1 : 1
      return minutes + mod <= 59 && minutes + mod > 0 ? minutes + mod : minutes + mod > 59 ? 0 : 59
    })

  const handleSeconds = () => setSeconds(new Date().getSeconds())
  setInterval(handleSeconds, 1000)

  return (
    <>
      <center><em>adjust time below:</em></center>
      <ClockContainer className="clock">
        <button className="time hour">
          {time.timeFormat(hour).map((h, i) => (
            <span className={['minus', 'plus'][i]} key={'h' + i} onClick={() => handleHour(i)}>
              {h}
            </span>
          ))}
        </button>
        <span className="blinking">:</span>
        <button className="time minutes">
          {time.timeFormat(minutes).map((m, i) => (
            <span className={['minus', 'plus'][i]} key={'m' + i} onClick={() => handleMinutes(i)}>
              {m}
            </span>
          ))}
        </button>
        <span className="ampm" onClick={handleAmPm}>
          {time.timeOfDay[ampm]}
        </span>
      </ClockContainer>
      <AnalogClock size="230px">
        <div className="wrap">
          <span className="minute" style={{ transform: `rotate(${minutes * 6}deg)` }} />
          <span className="hour" style={{ transform: `rotate(${hour * 30}deg)` }} />
          <span className="second" style={{ transform: `rotate(${seconds * 6}deg)` }} />
        </div>
      </AnalogClock>
    </>
  )
}

export default Clock
