import { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { NavBar, Main } from './userProfileInfo.js'
import Menu from '../../components/Menu'
import Modal from './modal/createTechModal'

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false)

    return (
            <div>
                <Menu content='Sair'/>
    
                <NavBar>
                    <h2>Olá, {user.name}</h2>
                    <p>{user.course_module}</p>
                </NavBar>
    
                <Main>
                    <section>
                        <h3>Tecnologias</h3>
                        <input 
                        type='button' 
                        onClick={() => setShowModal(true)} 
                        value='+'/>
                    </section>

                    {
                        showModal && <Modal setShowModal={setShowModal}/>
                    }
                </Main>
            </div>
    )
}

export default Dashboard