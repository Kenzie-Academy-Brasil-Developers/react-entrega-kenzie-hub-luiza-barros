import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import { useState } from 'react'

const RoutesMain = () => {
    const [user, setUser] = useState(null)

    return (
        <Routes>
            <Route path='/' element={ <Login user={user} setUser={setUser}/> }>
                <Route path='/dashboard' element={ <Dashboard/> }/>
            </Route>
            <Route path='/registro' element={ <Register/> }/>
        </Routes>
    )
}

export default RoutesMain