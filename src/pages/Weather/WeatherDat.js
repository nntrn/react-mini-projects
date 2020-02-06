/* eslint-disable react/prop-types */
import React from 'react'
import Ajax from '../../service/Ajax'
import './weather.css'

function weatherApiURL(lat, lon) {
  return `https://api.weather.gov/points/${lat},${lon}/forecast`
}

const url = 'https://api.weather.gov/gridpoints/EWX/182,91/forecast'
class WeatherDat extends React.Component {
  render() {
    const config = {
      id: 'number',
      cols: ['name', 'temperature', 'shortForecast', 'detailedForecast'],
      output(data) {
        return (
          <div>
            {data.properties['periods'].map(req => (
              <>
                <ul key={req[this.id]} className="flexbox">
                  {Object.keys(req).map(e => (
                    <li key={e}>
                      <span>{e}:</span>
                      <span> {req[`${e}`]}</span>
                    </li>
                  ))}
                  {/* {Object.keys(req).map(e => this.cols.includes(e) && <li key={e}>{req[`${e}`]}</li>)} */}
                </ul>
                <hr />
              </>
            ))}
          </div>
        )
      }
    }

    return <Ajax url={weatherApiURL(30.36230000000006, -97.73370999999997)} config={config} />
  }
}

export default WeatherDat
