import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api.js'

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        async function isUserValid() {
            const token = localStorage.getItem('@kenziehub:token')

            if (token) {
                try {
                    api.defaults.headers.authorization = `Bearer ${token}`
                    
                    const { data } = await api.get('/profile')
                    setUser(data)

                    navigate('/dashboard')
                } catch (error) {
                    localStorage.clear()
                }
            }
            setLoading(false)
        }
        isUserValid()
    }, [navigate])

    return (
        <AuthContext.Provider value={{ user, loading, setUser }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider