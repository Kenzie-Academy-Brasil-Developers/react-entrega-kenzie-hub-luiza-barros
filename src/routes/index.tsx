import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import ProtectedRoutes from '../components/ProtectedRoutes'

const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={ <Login/> }/>
            <Route element={ <ProtectedRoutes/> }>
                <Route path='/dashboard' element={ <Dashboard/> }/>
            </Route>
            <Route path='/registro' element={ <Register/> }/>
        </Routes>
    )
}

export default RoutesMain