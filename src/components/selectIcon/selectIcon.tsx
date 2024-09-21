import ArrowIcon from "src/assets/icons/arrow";
import ChevronDownIcon from "src/assets/icons/chevron_down";
import ChevronUpIcon from "src/assets/icons/chevron_up";
import CrossIcon from "src/assets/icons/cross";
import DeleteIcon from "src/assets/icons/delete";
import DropsIcon from "src/assets/icons/drops";
import EditIcon from "src/assets/icons/edit";
import EyeIcon from "src/assets/icons/eye";
import PinIcon from "src/assets/icons/pin";
import SunriseIcon from "src/assets/icons/sunrise";
import UserCheckIcon from "src/assets/icons/user_check";
import WindIcon from "src/assets/icons/wind";

interface IProps {
    type: 'Arrow' | 'Edit' | 'Delete' | 'Pin' | 'Chevron-Down' | 'Chevron-Up' | 'Drops' | 'Wind' | 'Eye' | 'Sunrise' | 'User-Check'| 'Cross',
    color: 'Primary' | 'Secondary' | 'Tertiary' |'DarkGray' | 'White',
    size: 'sm' | 'md'
}


export const SelectIcon = (props: IProps) => {
    const {type, color, size} = props
    const sizeValue = size == 'sm' ? '16' : '20';  
    switch (type) {
        case 'Arrow':
            return (
                <ArrowIcon size={sizeValue} color={color}/>
            )
    
        case 'Edit':
            return (
                <EditIcon size={sizeValue} color={color}/>
            )
    
        case 'Delete':
            return (
                <DeleteIcon size={sizeValue} color={color}/>
            )

        case 'Pin':
            return (
                <PinIcon size={sizeValue} color={color}/>
            )

        case 'Chevron-Down':
            return (
                <ChevronDownIcon size={sizeValue} color={color}/>
            )

        case 'Chevron-Up':
            return (
                <ChevronUpIcon size={sizeValue} color={color}/>
            )

        case 'Drops':
            return (
                <DropsIcon size={sizeValue} color={color}/>
            )

        case 'Wind':
            return (
                <WindIcon size={sizeValue} color={color}/>
            )

        case 'Eye':
            return (
                <EyeIcon size={sizeValue} color={color}/>
            )

        case 'Sunrise':
            return (
                <SunriseIcon size={sizeValue} color={color}/>
            )

        case 'User-Check':
            return (
                <UserCheckIcon size={sizeValue} color={color}/>
            )
       
        case 'Cross':
            return (
                <CrossIcon size={sizeValue} color={color}/>
            )
       
        default:
            break;
    }

}
