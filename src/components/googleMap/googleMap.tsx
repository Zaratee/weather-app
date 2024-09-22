import GoogleMapReact from 'google-map-react';

interface IProps{
  lat?: number,
  lng?: number

}

export const GoogleMap = (props: IProps) => {
  const {lat=20.66682, lng=-103.39182} = props
  return (
    <GoogleMapReact
    bootstrapURLKeys={{ key: "AIzaSyBnT91yGZ8Zi2ZtyXItEonuag21b3T8ciI" }}
    defaultCenter={{lat: lat, lng:lng}}
    defaultZoom={11}
/>
  )
}


