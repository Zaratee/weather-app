import Button from "src/components/button"
import SelectAvatar from "./components/selectAvatar"
import { Form, Formik } from "formik"
import Input from "src/components/input"
import GoogleMapReact from 'google-map-react';

interface IErrors{
    profile: String,
    username: String,
    lat: String,
    lng: String
}
interface IMyFormValues {
    profile: String,
    username: String,
    lat: String,
    lng: String
}
interface IProps{
    isModalActive: Boolean
    setShowModalAddUser: (value: Boolean)=>void

}

const ModalAddUser = (props : IProps) => {
    const {isModalActive, setShowModalAddUser} = props
    const initialValues: IMyFormValues = {profile: '0', username: '', lat:'', lng:''};
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
      if (!isModalActive){
        return
      }
  return (
    <div className="modal-add-user">
        <Formik 
            initialValues={initialValues}
            validate={values => {
                const errors : IErrors = {
                    profile : '0',
                    lat: '',
                    lng:'',
                    username: ''
                };
                if (!values.profile.trim()) {
                    errors.profile = 'Required';
                  }
                if (!values.lat.trim()) {
                    errors.lat = 'Required';
                  }
                if (!values.lng.trim()) {
                    errors.lng = 'Required';
                  }
                if (!values.username.trim()) {
                    errors.username = 'Required';
                  }
                  return errors;
            }}
            onSubmit={(values)=>{
                console.log(values)
            }}>
                <div className="add-card">
                    <div className="add-card-header" >
                        <Button onClick={()=>setShowModalAddUser(false)} type="Icon Rounded" iconType="Cross" color="Primary Light" size="md" iconColor="Primary"/>
                    </div>
                    <div className="add-card-body">
                        <div className="add-user-info-section">
                            <label className="headline-desktop3">Añadir un nuevo usuario</label>
                            <Form className="add-card-form">
                                <SelectAvatar/>
                                <Input label="Usuario" placeholder="Nombre de usuario"/>
                                <div className="add-user-input-container">
                                    <Input label="Latitud" placeholder="Ingresa latitud"/>
                                    <Input label="Longitud" placeholder="Ingresa longitud"/>
                                </div>
                                <div className="fit-content">
                                    <Button onClick={()=>{}} label={'Añadir usuario'} type="Label" color="Primary" size="md"/>
                                </div>
                            </Form>
                        </div>
                        <div  className="add-card-map-section">
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "" }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            />
                        </div>
                    </div>
                </div>
        </Formik>
    </div>
  )
}

export default ModalAddUser