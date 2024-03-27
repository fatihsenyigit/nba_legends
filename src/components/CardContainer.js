
// import { data } from '../helper/data'
import PlayerCard from './PlayerCard'
import './_cardContainer.scss'



const CardContainer = (data) => {
    return (
        <div className="card-container">
            {data.dataInput.map(e=>{
               return <PlayerCard key={e.name} {...e}></PlayerCard>;
            })}
        </div>
    )
}

export default CardContainer