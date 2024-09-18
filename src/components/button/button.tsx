import SelectIcon from "../selectIcon"

interface IProps {
    label?: String,
    iconType?: 'Arrow' | 'Edit' | 'Delete' | 'Pin' | 'Chevron-Down' | 'Chevron-Up' | 'Drops' | 'Wind' | 'Eye' | 'Sunrise' | 'User-Check',
    color: 'Primary' | 'Secondary' | 'Tertiary' | 
    'Primary Light' | 'Secondary Light' | 'Tertiary Light',
    type: 'Icon Rounded' | 'Label Icon Right' | 'Label Icon Left' | 'Label',
    size: 'sm' | 'md',
    border?: Boolean
}



export const Button = (props: IProps ) => {
    const {label = 'Lorem', color, type, size, border, iconType = 'Arrow'}  = props
    const classNameCustom  = `button-${color.toLowerCase().replace(' ', '-')} button-${size} 
    button-${border && color.includes('Light') && `border-${color.toLowerCase().replace(' ', '-')}`}`

    switch (type) {
        case 'Label':
            return (
                <div className={classNameCustom}>
                   {label}
                </div>
              )
        case 'Label Icon Left':
            return (
                <div className={classNameCustom}>
                   <SelectIcon type={iconType} color={!color.includes('Light') ? 'White' : color.replace(' Light', '')} size='sm'/> {label}
                </div>
              )
        case 'Label Icon Right':
            return (
                <div className={classNameCustom}>
                {label} <SelectIcon type={iconType} color={!color.includes('Light') ? 'White' : color.replace(' Light', '')} size='sm'/>
                </div>
              )
        case 'Icon Rounded':
            return (
                <div className={` ${classNameCustom} button-rounded-${size}`}>
                   <SelectIcon type={iconType} color={!color.includes('Light') ? 'White' : color.replace(' Light', '')} size='md'/> 
                </div>
              )
    
        default:
            break;
    }
  
}

