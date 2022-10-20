import { createContext, ReactNode, useEffect, useState } from 'react'
import { notifyError, notifySuccess } from '../../../toast/index'
import api from '../../../services/api'

interface iTechProvider {
    children: ReactNode
}

export const TechContext = createContext({})

const TechProvider = ({ children }: iTechProvider) => {
    const [tech, setTech] = useState(null)

    useEffect(() => {
        async function createTech() {
            if (tech) {
                try {
                    await api.post('/users/techs', tech)
                    notifySuccess()
                } catch (error) {
                    notifyError()
                }
            }
        }
        createTech()
    }, [tech])

    return (
        <TechContext.Provider value={{ tech, setTech }}>
            { children }
        </TechContext.Provider>
    )
}

export default TechProvider