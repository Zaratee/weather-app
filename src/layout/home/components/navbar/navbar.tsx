import Button from "src/components/button"

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-body">
           <div className="headline-desktop2">
                Weather app / Carlos Zarate
           </div>
           <Button color={'Primary'} type={"Label"} size={"md"} label={'Ingresar usuario'}/>
        </div>
    </div>
  )
}

