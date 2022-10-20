import React from 'react'
import { ToastContainer } from 'react-toastify'
import Routes from './routes'
import AuthProvider from './pages/contexts/AuthContext'

const App = () => {
  return (
    <div>
      <ToastContainer/>

      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </div>
  )
}

export default App