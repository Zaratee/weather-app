import Button from "src/components/button"
import SelectAvatar from "./components/selectAvatar"
import Input from "src/components/input"
import GoogleMap from "src/components/googleMap"
import { useForm, SubmitHandler } from "react-hook-form"
import { Dispatch } from "@reduxjs/toolkit"
import { getWeatherFromNewUser } from "src/actions/weatherApiActions"
import { connect } from "react-redux"
import { useEffect } from "react"

interface IFields{
    username: string,
    lat: string,
    lng: string,
    profile: string
}

interface IProps{ 
    isModalActive: boolean
    setShowModalAddUser: (value: boolean)=>void,
    createCustomAppointment: (value:IFields)=>void
}

const ModalAddUser = (props : IProps) => {
    const {isModalActive, setShowModalAddUser, createCustomAppointment} = props
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm<IFields>()

    const onSubmit: SubmitHandler<IFields> = (data) => {
        if(!data.lat || !data.lng){
            alert('Latitud y Longitud deben de ser de valor numérico')
            return
        }
        createCustomAppointment(data)
        reset({'lat': '', 'lng':'','profile':'Profile 1','username' : ''})
        setShowModalAddUser(false)
    }
    if (!isModalActive){
        return
    }
  return (
    <div className="modal-add-user">
                <div className="add-card">
                    <div className="add-card-header" >
                        <Button onClick={()=>{setShowModalAddUser(false);reset({'lat': '', 'lng':'','profile':'Profile 1','username' : ''})}} type="Icon Rounded" iconType="Cross" color="Primary Light" size="md" iconColor="Primary"/>
                    </div>
                    <div className="add-card-body">
                        <div className="add-user-info-section">
                            <label className="headline-desktop3">Añadir un nuevo usuario</label>
                            <form className="add-card-form" onSubmit={handleSubmit(onSubmit)}>
                                <SelectAvatar  register={register} />
                                <Input valueAsNumber={false}   name='username' error={errors.username} label="Usuario" placeholder="Nombre de usuario" register={register}  required/>
                                <div className="add-user-input-container">
                                        <Input  name="lat" error={errors.lat} label="Latitud" placeholder="Ingresa latitud" register={register} valueAsNumber required/>
                                        <Input name="lng" error={errors.lng} label="Longitud" placeholder="Ingresa longitud" register={register} valueAsNumber required/>
                                </div>
                                <div className="fit-content">
                                    <Button label={'Añadir usuario'} type="Label" color="Primary" size="md"/>
                                </div>
                            </form>
                    </div>
                <div  className="add-card-map-section">
                   <GoogleMap/>
                </div>
            </div>
        </div>
    </div>
  )
}


const actions = (dispatch : Dispatch ) => {
    return {
      createCustomAppointment(newUserInfo: IFields ) {
        getWeatherFromNewUser(dispatch)(newUserInfo);
      },
    };
  };
  
  
  
  export default connect(null, actions)(ModalAddUser);

