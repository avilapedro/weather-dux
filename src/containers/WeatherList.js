import React, { Component } from 'react'
import { connect } from 'react-redux'

import Chart from '../components/Chart'

const mapStateToProps = ({ weather }) => ({ weather })

class WeatherList extends Component {
  renderWeather = ({
    city: {name},
    list
  }) => {
    const temps = list.map(({ main }) => main.temp)
    const pressures = list.map(({ main }) => main.pressure)
    const humidities = list.map(({ main }) => main.humidity)

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} unit="ºC"/></td>
        <td><Chart data={pressures} unit="hPa"/></td>
        <td><Chart data={humidities} unit="%"/></td>
      </tr>
    )
  } 
  
  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (ºC)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>

        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

export default connect(mapStateToProps)(WeatherList)
