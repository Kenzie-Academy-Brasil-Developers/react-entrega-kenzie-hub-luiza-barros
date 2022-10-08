import { useNavigate } from 'react-router-dom'
import KenzieHub from './assets/Logo.png'

const Menu = ({ content }) => {
    const navigate = useNavigate()

    return (
        <div>
            <img src={ KenzieHub } alt='Kenzie Hub'/>
            <button type='button' onClick={() => navigate('/')}>{ content }</button>
        </div>
    )
}

export default Menu