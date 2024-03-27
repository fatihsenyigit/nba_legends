
import { data } from '../helper/data'
import PlayerCard from './PlayerCard'
import './_cardContainer.scss'



const CardContainer = () => {
    return (
        <div className="card-container">
            {data.map(e=>{
               return <PlayerCard key={e.name} {...e}></PlayerCard>;
            })}
        </div>
    )
}

export default CardContainer