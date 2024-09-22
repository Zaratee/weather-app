import { FieldError, Path, UseFormRegister } from "react-hook-form"

interface IProps{
  label: string,
  placeholder: string,
  error: FieldError | undefined,
  name:  Path<IFields>,
  register: UseFormRegister<IFields>,
  required: boolean,
  valueAsNumber: boolean
}

interface IFields{
  username: string,
  lat: string,
  lng: string,
  profile: string
}


export const Input = (props: IProps) => {
  const {label, placeholder, error, name, register, required, valueAsNumber } = props
  return (
    <div className="custom-input">
      <label className="headline-desktop4">{label}</label>
      <input {...register(name, { required, valueAsNumber }, )}  name={name} type="text" placeholder={placeholder}/>
      <div className="custom-input-error">{error && 'Requerido*'}</div>
    </div>
  )
}
