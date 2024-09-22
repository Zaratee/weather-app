import Button from "src/components/button"

interface IProps{
  setShowModalAddUser: (value: boolean)=>void
}
export const Navbar = (props: IProps) => {
  const {setShowModalAddUser} = props
  return (
    <div className="navbar">
        <div className="navbar-body">
           <div className="headline-desktop2">
                Weather app / Carlos Zarate
           </div>
           <Button onClick={()=>setShowModalAddUser(true)} color={'Primary'} type={"Label"} size={"md"} label={'Ingresar usuario'}/>
        </div>
    </div>
  )
}

