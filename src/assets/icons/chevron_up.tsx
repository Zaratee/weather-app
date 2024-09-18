interface IProps{
    size: string,
    color: string
}

const ChevronUpIcon = (props: IProps) => {
    const {size , color} = props
  return (
    <svg width={size}  height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`icon-color-${color.toLowerCase()}`}>
        <path d="M12 10L8 6L4 10"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default ChevronUpIcon

