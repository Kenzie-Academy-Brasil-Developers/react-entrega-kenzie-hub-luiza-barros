import { createContext, ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { notifyError, notifySuccess } from '../../toast/index'
import api from '../../services/api'

interface iAuthProvider {
    children: ReactNode
}

export const AuthContext = createContext({})

const AuthProvider = ({ children }: iAuthProvider) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [techID, setTechID] = useState(null)

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

    useEffect(() => {
        async function deleteTech() {
            if (techID) {
                try {
                    await api.delete(`/users/techs/${techID}`)
                    notifySuccess()
                } catch (error) {
                    notifyError()
                }
            }
        }
        deleteTech()
    }, [techID])

    useEffect(() => {
        async function checkUser() {
            const { data } = await api.get('/profile')
            setUser(data)
        }
        checkUser()
    }, [user])

    return (
        <AuthContext.Provider value={{ user, loading, techID, setTechID, setUser }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider