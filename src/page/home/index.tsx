import UserCard from "src/components/userCard"
import UserContainer from "./components/userContainer"
import { connect } from "react-redux";

interface IProps{
  users: IUser[]
}

interface IUser{
  id: String,
  username: String,
  lng: String,
  lat: String,
  img: string,
}

const Home = (props: IProps) => {
  const {users} = props
  return (
    <div className="home">
        <div>
            <div className="headline-desktop1">Usuarios registrados</div>
            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci, esse voluptate nihil vel fugiat ipsa.</div>
        </div>
        <UserContainer>
          {
            users.map((user, index) => {
              return(
                <UserCard key={index} id={user.id} lat={user.lat} lng={user.lng} userName={user.username} userImg={user.img}/>
              )
            })
          }
        </UserContainer>
    </div>
  )
}

interface IState {
  users: []
}

const properties = (state: IState) => {
  const allUsers = state.users;  
  return {
    users: allUsers
  };
};


export default connect(properties)(Home);