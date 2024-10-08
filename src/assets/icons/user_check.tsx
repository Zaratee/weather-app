interface IProps{
    size: string,
    color: string
}

const UserCheckIcon = (props: IProps) => {
    const {size , color} = props
  return (
    <svg width={size}  height={size} viewBox="0 0 16 16" fill="none" className={`icon-color-${color.toLowerCase()}`} xmlns="http://www.w3.org/2000/svg">
        <path d="M7.99998 10.3333H4.99998C4.0696 10.3333 3.60442 10.3333 3.22588 10.4482C2.37362 10.7067 1.70667 11.3736 1.44814 12.2259C1.33331 12.6044 1.33331 13.0696 1.33331 14M10.6666 12L12 13.3333L14.6666 10.6667M9.66665 5C9.66665 6.65685 8.3235 8 6.66665 8C5.00979 8 3.66665 6.65685 3.66665 5C3.66665 3.34315 5.00979 2 6.66665 2C8.3235 2 9.66665 3.34315 9.66665 5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default UserCheckIcon
