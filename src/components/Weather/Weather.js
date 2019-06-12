/* eslint-disable react/prop-types */
import React from 'react'
import Ajax from '../../service/Ajax'
import './weather.css'

const url = 'https://api.weather.gov/gridpoints/EWX/182,91/forecast'
class Weather extends React.Component {
  render() {
    // put
    const config = {
      output(data) {
        return (
          <div className="weather">
            {data.properties['periods'].map(
              req =>
                req.name.indexOf('Night') === -1 && (
                  <tr className="flexb" key={req.number} id={'req' + req.number}>
                    <td className="date-style">
                      <span className="date">
                        {
                          new Date(`${req.startTime}`)
                            .toLocaleString('en-US', {
                              month: 'long',
                              day: 'numeric'
                            })
                            .split(',')[0]
                        }
                      </span>
                      <span className="day">{req.name}</span>
                    </td>
                    <td className="col">
                      <div className="temperature">
                        {req.temperature}&#176;{req.temperatureUnit}
                      </div>
                    </td>
                  </tr>
                )
            )}
          </div>
        )
      }
    }

    return <Ajax url={url} config={config} />
  }
}

export default Weather
