interface IProps{
    size: string,
    color: string
}

const EyeIcon = (props: IProps) => {
    const {size , color} = props
  return (
    <svg className={`icon-color-${color.toLowerCase()}`} width={size}  height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.61341 8.47545C1.52262 8.33169 1.47723 8.25981 1.45182 8.14894C1.43273 8.06566 1.43273 7.93433 1.45182 7.85105C1.47723 7.74018 1.52262 7.6683 1.61341 7.52454C2.36369 6.33656 4.59693 3.33333 8.00027 3.33333C11.4036 3.33333 13.6369 6.33656 14.3871 7.52454C14.4779 7.6683 14.5233 7.74018 14.5487 7.85105C14.5678 7.93433 14.5678 8.06566 14.5487 8.14894C14.5233 8.25981 14.4779 8.33169 14.3871 8.47545C13.6369 9.66343 11.4036 12.6667 8.00027 12.6667C4.59693 12.6667 2.36369 9.66344 1.61341 8.47545Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.00027 10C9.10484 10 10.0003 9.10456 10.0003 8C10.0003 6.89543 9.10484 5.99999 8.00027 5.99999C6.8957 5.99999 6.00027 6.89543 6.00027 8C6.00027 9.10456 6.8957 10 8.00027 10Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  )
}

export default EyeIcon
