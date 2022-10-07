import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'

const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={ <Login/> }>
                <Route path='/dashboard' element={ <Dashboard/> }/>
            </Route>
            <Route path='/registro' element={ <Register/> }/>
        </Routes>
    )
}

export default RoutesMain