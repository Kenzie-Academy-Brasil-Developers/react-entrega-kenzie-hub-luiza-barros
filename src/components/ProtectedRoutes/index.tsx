import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { AuthContext } from '../../pages/contexts/AuthContext'
import { useContext } from 'react'

const ProtectedRoutes = () => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return null
    }
    return user ? <Outlet/> : <Navigate to='/' replace state={ {from: location} }/>
}

export default ProtectedRoutes