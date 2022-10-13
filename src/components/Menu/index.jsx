import { Link } from 'react-router-dom'
import Container from './menu.js'

const Menu = ({ content }) => {
    return (
        <Container>
            <header>
                <h1 className='kenziehub'>Kenzie Hub</h1>
                <Link to={'/'} onClick={() => localStorage.clear()}>{ content }</Link>
            </header>
        </Container>
    )
}

export default Menu