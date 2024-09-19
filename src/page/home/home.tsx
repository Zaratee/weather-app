import UserCard from "src/components/userCard"
import UserContainer from "./components/userContainer"

export const Home = () => {
  return (
    <div className="home">
        <div>
            <div className="headline-desktop1">Usuarios registrados</div>
            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci, esse voluptate nihil vel fugiat ipsa.</div>
        </div>
        <UserContainer>
            <UserCard id={'1'} lat={'100'} lng={'200'}/>
            <UserCard id={'3'} lat={'100'} lng={'200'}/>
            <UserCard id={'4'} lat={'100'} lng={'200'}/>
            
        </UserContainer>
    </div>
  )
}

