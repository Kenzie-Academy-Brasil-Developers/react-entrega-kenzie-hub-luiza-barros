import Menu from '../../components/Menu'
import NavBar from './userProfileInfo.js'

const Dashboard = ({ user, setUser}) => {
    return (
        <div>
            <Menu content='Sair'/>
            
            <NavBar>
                <h2>Olá, {user.name}</h2>
                <p>{user.course_module}</p>
            </NavBar>

            <main></main>
        </div>
    )
}

export default Dashboard