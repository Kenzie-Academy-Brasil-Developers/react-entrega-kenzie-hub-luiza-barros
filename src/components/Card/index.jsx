import { AiFillDelete } from 'react-icons/ai'

const Card = ({ techs, setTechID }) => {
    return (
        <ul>    
            {
                techs.map((tech, index) => (
                    <li key={index}>
                        <h4>{ tech.title }</h4>
                        <p>{ tech.status }</p>
                        <span onClick={() => setTechID(tech.id)}>
                            <AiFillDelete/>
                        </span>
                    </li>
                ))
            }
        </ul>
    )
}

export default Card