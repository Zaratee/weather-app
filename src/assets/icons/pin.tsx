interface IProps{
    size: string,
    color: string
}

const PinIcon = (props: IProps) => {
    const {size , color} = props
  return (
    <svg width={size}  height={size} className={`icon-color-${color.toLowerCase()}`} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00002 8.66668C9.10459 8.66668 10 7.77125 10 6.66668C10 5.56211 9.10459 4.66668 8.00002 4.66668C6.89545 4.66668 6.00002 5.56211 6.00002 6.66668C6.00002 7.77125 6.89545 8.66668 8.00002 8.66668Z" stroke="#5556FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.00002 14.6667C10.6667 12 13.3334 9.61219 13.3334 6.66668C13.3334 3.72116 10.9455 1.33334 8.00002 1.33334C5.0545 1.33334 2.66669 3.72116 2.66669 6.66668C2.66669 9.61219 5.33335 12 8.00002 14.6667Z" stroke="#5556FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  )
}

export default PinIcon
