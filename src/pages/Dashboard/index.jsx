import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'
import Menu from '../../components/Menu'
import NavBar from './userProfileInfo.js'

const Dashboard = () => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return null
    }

    return (
        <>
            {
                user
                ?
                    <div>
                        <Menu content='Sair'/>
            
                        <NavBar>
                            <h2>Olá, {user.name}</h2>
                            <p>{user.course_module}</p>
                        </NavBar>
            
                        <main></main>
                    </div>
                : <Navigate to='/' replace/>
            }
        </>
    )
}

export default Dashboard