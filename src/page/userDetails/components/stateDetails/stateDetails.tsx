import sunImg from 'src/assets/img/sun.png'
import windImg from 'src/assets/img/wind.png'
interface IProps{
    date: string,
    type: 'SUN' | 'WIND',
    temperature: number
}
export const StateDetails = (props: IProps) => {
    const {date, type, temperature} = props
  return (
    <div className='state-details-container'>
        <div>{date}</div>
        <img src={type == 'SUN'? sunImg: windImg}/>
        <label>{temperature} °C</label>
    </div>
  )
}
