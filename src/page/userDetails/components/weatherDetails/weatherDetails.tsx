import WeatherDetailsSection from "./components/weatherDetailsSection"


interface IProps{
  locationWeather: {
    humidity: number,
    wind_kph: number,
    wind_degree: number,
    wind_dir: string,
    uv: string,
    vis_km: number,
    name: string,
    date: string,
    temp_c: number,
    condition: string
  }
}

export const WeatherDetails = (props: IProps) => {
  const {humidity, wind_kph, wind_degree, wind_dir, uv,  vis_km, name, date, temp_c, condition} = props.locationWeather
  return (
    <div className="weather-details">
      <img src="https://media.discordapp.net/attachments/852334128635969596/1287285524494815262/bgWeatherDetails.png?ex=66f0fd91&is=66efac11&hm=87e68c1894def3b08b052d7b3935a6783047977e157a614ec4f364189fdb14be&=&format=webp&quality=lossless&width=516&height=1008"/>
      <div className="weather-details-body">
        <div className="date">{date}</div>
        <div className="headline-desktop1">{temp_c} °C</div>
        <div className="place">{name}</div>
        <div className="status">{condition}</div>
        <div className="weather-details-section-container">
        <WeatherDetailsSection iconType="Drops" label="Humedad" value={`${humidity} %`}/>
        <WeatherDetailsSection iconType="Wind" label="Viento" value={`${wind_kph} KM/H-${wind_dir}/${wind_degree}°`}/>
        <WeatherDetailsSection iconType="Sunrise" label="UV Índice" value={uv}/>
        <WeatherDetailsSection iconType="Eye" label="Visibilidad" value={`${vis_km} km`}/>
        </div>
      </div>
    </div>
  )
}
