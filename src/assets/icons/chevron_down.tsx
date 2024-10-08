interface IProps{
    size: string,
    color: string
}

const ChevronDownIcon = (props: IProps) => {
    const {size , color='#000'} = props
  return (
    <svg width={size}  height={size}  viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`icon-color-${color.toLowerCase()}`}>
          <path d="M4 6L8 10L12 6"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>


  )
}

export default ChevronDownIcon