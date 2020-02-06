/* eslint-disable react/prop-types */
import React from 'react'
import Ajax from '../../service/Ajax'
import './weather.scss'

const url = 'https://api.weather.gov/gridpoints/EWX/182,91/forecast'
class Weather extends React.Component {
  render() {
    const config = data => {
      return (
        <div id="weather">
          <h2 className="project-title">weather API</h2>
          <table>
            {data.properties['periods'].map(
              req =>
                req.name.indexOf('Night') === -1 && (
                  <tr key={req.number} id={'req' + req.number}>
                    <td>
                      {
                        new Date(`${req.startTime}`)
                          .toLocaleString('en-US', {
                            month: 'long',
                            day: 'numeric'
                          })
                          .split(',')[0]
                      }
                    </td>
                    <td>{req.name}</td>
                    <td>
                      {req.temperature}&#176;{req.temperatureUnit}
                    </td>
                  </tr>
                )
            )}
          </table>

          {/* <div className="json">{JSON.stringify(data, null, 2)}</div> */}
          <a href="https://api.weather.gov/gridpoints/EWX/182,91/forecast">api.weather.gov</a>
        </div>
      )
    }

    return <Ajax url={url} config={config} />
  }
}

export default Weather
