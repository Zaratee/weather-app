import { useState } from "react"
import SelectIcon from "../selectIcon"

interface IProps {
    label?: string,
    iconType?: 'Arrow' | 'Edit' | 'Delete' | 'Pin' | 'Chevron-Down' | 'Chevron-Up' | 'Drops' | 'Wind' | 'Eye' | 'Sunrise' | 'User-Check' | 'Cross',
    color: 'Primary' | 'Secondary' | 'Tertiary' | 
    'Primary Light' | 'Secondary Light' | 'Tertiary Light',
    iconColor?: 'Primary' | 'Secondary' | 'Tertiary' | 'White' | 'DarkGray',
    type: 'Icon Rounded' | 'Label Icon Right' | 'Label Icon Left' | 'Label',
    size: 'sm' | 'md',
    border?: boolean,
    onClick?: ()=>void
}



export const Button = (props: IProps ) => {
    const {label = 'Lorem', color, type, size, border, iconType = 'Arrow', iconColor = 'White', onClick}  = props
    const classNameCustom  = `button-${color.toLowerCase().replace(' ', '-')} button-${size} 
    button-${border && color.includes('Light') && `border-${color.toLowerCase().replace(' ', '-')}`}`
    const [showArrow, setShowArrow] = useState(false)
   
    switch (type) {
        case 'Label':
            return (
                <button type="submit" onClick={onClick} className={classNameCustom}>
                   {label}
                </button>
              )
        case 'Label Icon Left':
            return (
                <button type="submit" onClick={onClick} className={classNameCustom}>
                   <SelectIcon type={iconType} color={iconColor} size={size}/> {label}
                </button>
              )
        case 'Label Icon Right':
            return (
                <button type="submit" onClick={onClick} className={classNameCustom}>
                {label} <SelectIcon type={iconType} color={iconColor} size={size}/>
                </button>
              )
        case 'Icon Rounded':
            return (
                <button type="submit" onClick={onClick} onMouseEnter={()=> setShowArrow(true)} onMouseLeave={()=> setShowArrow(false)} className={` ${classNameCustom} button-rounded-${size}`}>
                   {<SelectIcon type={showArrow ? 'Arrow':iconType} color={iconColor} size={size}/> }
                </button>
              )
    
        default:
            break;
    }
  
}

