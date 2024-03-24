
import "./_playerCard.scss";

const PlayerCard = ({name,img}) => {
    return (
        <div className="player-container">
            <img src={img} alt="" />
            <h3>{name}</h3>
        </div>
    )
}

export default PlayerCard