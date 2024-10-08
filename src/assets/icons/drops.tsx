interface IProps{
    size: string,
    color: string
}

const DropsIcon = (props: IProps) => {
    const {size , color} = props
  return (
    <svg width={size}  height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`icon-color-${color.toLowerCase()}`}>
        <g clip-path="url(#clip0_16_337)">
            <path d="M14.6666 10.6667C14.6666 12.8758 12.8758 14.6667 10.6666 14.6667C8.45751 14.6667 6.66665 12.8758 6.66665 10.6667C6.66665 7.79087 10.6666 1.33334 10.6666 1.33334C10.6666 1.33334 14.6666 7.79087 14.6666 10.6667Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.33331 6.00001C5.33331 7.10458 4.43788 8.00001 3.33331 8.00001C2.22874 8.00001 1.33331 7.10458 1.33331 6.00001C1.33331 4.56211 3.33331 1.33334 3.33331 1.33334C3.33331 1.33334 5.33331 4.56211 5.33331 6.00001Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_16_337">
        <rect width="16" height="16" fill="white"/>
        </clipPath>
        </defs>
    </svg>

  )
}

export default DropsIcon

