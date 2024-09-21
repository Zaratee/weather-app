import { useEffect, useState } from "react"
import { allAvatars } from "src/data/userProfiles"

export const SelectAvatar = () => {
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
                <select id="profile" name="profile" onChange={(e)=>setCurrentAvatar(e.target.value)}>
                    {
                        allAvatars.map((avatar)=>{
                            return(
                                <option onSelectCapture={(e)=> console.log(e)} key={avatar.id}>{avatar.name}</option>
                            )
                        })
                    }
                </select>
            </div>
        </div>                
  )
}
