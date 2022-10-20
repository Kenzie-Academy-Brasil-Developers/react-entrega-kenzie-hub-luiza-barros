import { AiFillDelete } from 'react-icons/ai'
import CardStyle from './card'

export interface iTech {
    title: string,
    status: string,
    id: string
}

interface iCard {
    techs: iTech[] | null | undefined,
    setTechID: React.Dispatch<React.SetStateAction<string | null>>
}

const Card = ({ techs, setTechID }: iCard) => {
    return (
        <CardStyle>    
            {
                techs?.length === 0 
                ? <p>Insira novas tecnologias</p> 
                : techs?.map((tech: iTech, index: number) => (
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