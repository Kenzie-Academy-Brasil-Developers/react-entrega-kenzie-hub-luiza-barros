import { createContext } from 'react'

export const TechContext = createContext({})

const TechProvider = ({ children }) => {

    return (
        <TechContext.Provider value={{}}>
            { children }
        </TechContext.Provider>
    )
}

export default TechProvider