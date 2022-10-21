import { createContext, ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { notifyError, notifySuccess } from '../../toast/index'
import { iTech } from '../../components/Card'
import api from '../../services/api'

export interface iUser {
    id: string,
    name: string,
    email: string,
    course_module: string,
    bio: string,
    contact: string,
    techs: iTech[] | null
}

interface iAuthProvider {
    children: ReactNode
}

interface iAuthContext {
    user: iUser | null,
    loading: boolean,
    techID: string | null
    setUser: React.Dispatch<React.SetStateAction<iUser | null>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setTechID: React.Dispatch<React.SetStateAction<string | null>>
}

export const AuthContext = createContext<iAuthContext>({} as iAuthContext)

const AuthProvider = ({ children }: iAuthProvider) => {
    const [user, setUser] = useState<iUser | null>(null)
    const [loading, setLoading] = useState(true)
    const [techID, setTechID] = useState<string | null>(null)

    const navigate = useNavigate()

    useEffect(() => {
        async function isUserValid() {
            const token = localStorage.getItem('@kenziehub:token')

            if (token) {
                try {
                    api.defaults.headers.authorization = `Bearer ${token}`
                    
                    const { data } = await api.get<iUser>('/profile')
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
                    await api.delete<void>(`/users/techs/${techID}`)
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
            const { data } = await api.get<iUser>('/profile')
            setUser(data)
        }
        checkUser()
    }, [user])

    return (
        <AuthContext.Provider value={{ user, loading, techID, setTechID, setUser, setLoading }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider