interface IProps{
  label: string,
  placeholder: string
}


export const Input = (props: IProps) => {
  const {label, placeholder} = props
  return (
    <div className="custom-input">
      <label className="headline-desktop4">{label}</label>
      <input type="text" placeholder={placeholder}/>
    </div>
  )
}
