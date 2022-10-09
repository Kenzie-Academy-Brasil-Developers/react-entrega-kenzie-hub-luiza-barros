import { useNavigate } from 'react-router-dom'
import KenzieHub from '../../assets/Logo.png'

const Menu = ({ content }) => {
    const navigate = useNavigate()

    function alterPage() {
        localStorage.clear()
        navigate('/')
    }

    return (
        <div>
            <img src={ KenzieHub } alt='Kenzie Hub'/>
            <button type='button' onClick={() => alterPage()}>{ content }</button>
        </div>
    )
}

export default Menu