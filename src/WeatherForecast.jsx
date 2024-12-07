const WeatherForecast = ({ forecasting }) => {
  return (
    <div className="weather">
      {forecasting.map((forecast, idx) => {
        return (
          <div>
            <h2>{forecast.day}</h2>
            <img src={forecast.img} alt={forecast.imgAlt} />
            <p>
              <span>conditions: </span>
              {forecast.conditions}
            </p>
            <p>
              <span>time: </span>
              {forecast.time}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default WeatherForecast
