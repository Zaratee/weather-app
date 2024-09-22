import SelectIcon from "src/components/selectIcon"

interface IProps{
    iconType: 'Drops' | 'Wind' | 'Sunrise' | 'Eye',
    label: string,  
    value: string
}

export const WeatherDetailsSection = (props: IProps) => {
    const {iconType, label, value} = props

  return (
    <div className="weather-details-section">
        <SelectIcon type={iconType} color="DarkGray" size="sm"/>
        <label>{label}</label>
        <div>{value}</div>
    </div>
  )
}

