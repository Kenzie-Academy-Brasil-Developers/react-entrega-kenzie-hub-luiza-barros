import { AiFillDelete } from 'react-icons/ai'
import CardStyle from './card'

const Card = ({ techs, setTechID }) => {
    return (
        <CardStyle>    
            {
                techs.map((tech, index) => (
                    <li key={index}>
                        <h4>{ tech.title }</h4>
                        
                        <div>
                            <p>{ tech.status }</p>
                            <span onClick={() => setTechID(tech.id)}>
                                <AiFillDelete/>
                            </span>
                        </div>
                    </li>
                ))
            }
        </CardStyle>
    )
}

export default Card