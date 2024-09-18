interface IProps{
    size: string,
    color: string
}

const WindIcon = (props: IProps) => {
    const {size , color} = props
  return (
    <svg width={size}  height={size} className={`icon-color-${color.toLowerCase()}`} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.1759 4.33333C11.5421 3.92417 12.0743 3.66667 12.6667 3.66667C13.7712 3.66667 14.6667 4.5621 14.6667 5.66667C14.6667 6.77124 13.7712 7.66667 12.6667 7.66667H8.66665M4.50924 2.66667C4.87546 2.2575 5.40765 2 5.99998 2C7.10455 2 7.99998 2.89543 7.99998 4C7.99998 5.10457 7.10455 6 5.99998 6H1.33331M7.17591 13.3333C7.54212 13.7425 8.07431 14 8.66665 14C9.77122 14 10.6666 13.1046 10.6666 12C10.6666 10.8954 9.77122 10 8.66665 10H1.33331" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  )
}

export default WindIcon
