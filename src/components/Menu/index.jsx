import { useNavigate } from 'react-router-dom'
import Container from './styles/menu'

const Menu = ({ content }) => {
    const navigate = useNavigate()

    function alterPage() {
        localStorage.clear()
        navigate('/')
    }

    return (
        <Container>
            <header>
                <h1 className='kenziehub'>Kenzie Hub</h1>
                <button type='button' onClick={() => alterPage()}>{ content }</button>
            </header>
        </Container>
    )
}

export default Menu