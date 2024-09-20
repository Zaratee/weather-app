interface IProps{
    size: string,
    color: string
}

const ArrowIcon = (props: IProps) => {
    const {size , color} = props
  return (
    <svg width={size}  height={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"  className={`icon-color-${color.toLowerCase()}`}>
        <path d="M12.6667 8H3.33337M3.33337 8L8.00004 12.6667M3.33337 8L8.00004 3.33333"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default ArrowIcon
