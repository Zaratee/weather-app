import { useEffect, useState } from "react"
import { UseFormRegister } from "react-hook-form"
import { allAvatars } from "src/data/userProfiles"

interface IProps{
    register: UseFormRegister<IFields>,
  }
interface IFields{
    username: string,
    lat: string,
    lng: string,
    profile: string
}

  
export const SelectAvatar = (props: IProps) => {
    const {register} = props
    const [currentAvatar, setCurrentAvatar] = useState('Profile 1')
    const [profileSelected, setProfileSelected] = useState(0)
    useEffect(() => {
        setProfileSelected( allAvatars.findIndex((avatar) => avatar.name == currentAvatar))
    }, [currentAvatar])
    
  return (
        <div className='select-avatar'>
            <div className="avatar-img-container">
                <img src={allAvatars[profileSelected].img}/>
            </div>
            <div className="avatar-input-container">
                <label className="headline-desktop4">Selecciona tu avatar</label>
                <select {...register("profile")} id="profile" name="profile" onChange={(e)=>setCurrentAvatar(e.target.value)}>
                    {
                        allAvatars.map((avatar)=>{
                            return(
                                <option key={avatar.id}>{avatar.name}</option>
                            )
                        })
                    }
                </select>
            </div>
        </div>                
  )
}
